import { visit } from "unist-util-visit"
import type { Root } from "mdast"
import type { QuartzTransformerPlugin } from "../types"

export const TextColor: QuartzTransformerPlugin = () => {
  return {
    name: "TextColor",

    transform(tree: Root) {
      visit(tree, "textColor", (node: any, index, parent: any) => {
        if (!parent || index == null) return

        parent.children[index] = {
          type: "element",
          tagName: "span",
          properties: {
            className: [`textcolor-${node.color}`],
          },
          children: node.children,
        }
      })
    },
  }
}
