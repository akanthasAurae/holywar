import type {
  Code,
  State,
  Extension,
  Construct,
} from "micromark-util-types"

export function TextColorSyntax(): Extension {
  const construct: Construct = {
    name: "TextColor",
    tokenize: tokenizeTextColor,
  }

  return {
    text: {
      126: construct, // "~"
    },
  }
}

function tokenizeTextColor(
  this: unknown,
  effects: any,
  ok: State,
  nok: State
): State {
  return start

  function start(code: Code): State | undefined {
    if (code !== 126 /* ~ */) return nok(code)
    effects.enter("TextColor")
    effects.consume(code)
    return afterTilde
  }

  function afterTilde(code: Code): State | undefined {
    if (code !== 61 /* = */) return nok(code)
    effects.consume(code)
    return afterEquals
  }

  function afterEquals(code: Code): State | undefined {
    if (code !== 123 /* { */) return nok(code)
    effects.consume(code)
    return inside
  }

  function inside(code: Code): State | undefined {
    if (code === null) return nok(code)

    if (code === 126 /* ~ */) {
      effects.consume(code)
      effects.exit("TextColor")
      return ok
    }

    effects.consume(code)
    return inside
  }
}
