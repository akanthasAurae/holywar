import fs from "fs"
import path from "path"
import { visit } from "unist-util-visit"
import type { Root, Text } from "mdast"
import { QuartzTransformerPlugin } from "../types"

type FastTextColor = {
  color: string
  id: string
  bold: boolean
  italic: boolean
  cap_mode: { state: "normal" | "all_caps" | "small_caps" }
  line_mode: { state: "none" | "underline" | "overline" | "line-through" }
  useCssColorVariable: boolean
  colorVariable: string
  className: string
}

export const FastTextColor: QuartzTransformerPlugin<
  { vaultRoot: string; outDir: string }
> = (opts) => {
  // ---- normalize options (CRITICAL) ----
  const options = opts ?? {
    vaultRoot: process.cwd(),
    outDir: "public",
  }

  // ---- setup (runs once) ----
  const configPath = path.join(
    options.vaultRoot,
    ".obsidian/plugins/fast-text-color/data.json"
  )

  const raw = fs.readFileSync(configPath, "utf8")
  const colors: FastTextColor[] = JSON.parse(raw).colors
  const colorMap = new Map(colors.map((c) => [c.id, c]))

  const cssPath = path.join(options.outDir, "fast-text-color.css")
  fs.writeFileSync(cssPath, generateCSS(colors))

  const REGEX = /~=\{([a-zA-Z0-9_-]+)\}([\s\S]+?)~/g

  // ---- transformer (always returned) ----
  return (tree: Root) => {
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index == null) return
      if (!REGEX.test(node.value)) return

      const out: any[] = []
      let last = 0

      for (const m of node.value.matchAll(REGEX)) {
        const [full, id, text] = m
        const start = m.index!
        const end = start + full.length

        if (start > last) {
          out.push({ type: "text", value: node.value.slice(last, start) })
        }

        const color = colorMap.get(id)
        out.push(
          color
            ? {
                type: "html",
                value: `<span class="${color.className}">${text}</span>`,
              }
            : { type: "text", value: full }
        )

        last = end
      }

      if (last < node.value.length) {
        out.push({ type: "text", value: node.value.slice(last) })
      }

      parent.children.splice(index, 1, ...out)
    })
  }
}

function generateCSS(colors: FastTextColor[]): string {
  return colors
    .map((c) => {
      let css = `.${c.className} {\n`
      css += c.useCssColorVariable
        ? `  color: var(${c.colorVariable});\n`
        : `  color: ${c.color};\n`
      if (c.bold) css += `  font-weight: bold;\n`
      if (c.italic) css += `  font-style: italic;\n`
      if (c.cap_mode.state === "all_caps")
        css += `  text-transform: uppercase;\n`
      if (c.cap_mode.state === "small_caps")
        css += `  font-variant: small-caps;\n`
      if (c.line_mode.state !== "none")
        css += `  text-decoration: ${c.line_mode.state};\n`
      return css + "}\n"
    })
    .join("\n")
}
