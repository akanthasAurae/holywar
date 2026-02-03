import type { QuartzTransformerPlugin } from "../types"
import type { Pluggable } from "unified"
import { TextColorSyntax } from "./textcolorsyntax"
import { textColorFromMarkdown } from "./textcolorFromMarkdown"

export const TextColorMarkdown: QuartzTransformerPlugin = () => {
  return {
    name: "TextColorMarkdown",

    markdownPlugins(): Pluggable[] {
      return [
        [
          function remarkTextColor() {
            const data = this.data()

            const micromark =
              data.micromarkExtensions ||
              (data.micromarkExtensions = [])

            const mdast =
              data.fromMarkdownExtensions ||
              (data.fromMarkdownExtensions = [])

            micromark.push(TextColorSyntax())
            mdast.push(textColorFromMarkdown())

            return () => {}
          },
        ],
      ]
    },
  }
}
