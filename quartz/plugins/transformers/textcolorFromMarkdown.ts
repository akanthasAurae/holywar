import type { Extension as MdastExtension } from "mdast-util-from-markdown"

export function textColorFromMarkdown(): MdastExtension {
  return {
    enter: {
      textColor(this: any) {
        this.enter(
          {
            type: "textColor",
            color: "",
            children: [],
          },
          null
        )
      },
    },
    exit: {
      textColor(this: any) {
        const node = this.stack[this.stack.length - 1]

        const raw = this.sliceSerialize(node)

        const match = raw.match(/^\{([^}]+)\}([\s\S]*?)=?$/)

        if (match) {
          node.color = match[1]
          node.children.push({
            type: "text",
            value: match[2],
          })
        }

        this.exit(null)
      },
    },
  }
}
