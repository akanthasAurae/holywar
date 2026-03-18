import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const SubMarquee: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
  const content = cfg?.SubMarquee

  if (!content) return null

  return (
    <div class={classNames(displayClass, "marquee-wrapper")}>
      <div class="marquee">
        <span>{content}</span>
      </div>
    </div>
  )
}

SubMarquee.css = `
.marquee-wrapper {
  overflow-x: clip;
  white-space: nowrap;
  width: 100%;
  position: relative;
  bottom: 20px;
}

.marquee {
  display: inline-block;
  animation: marquee-scroll 5s linear infinite;
}

.marquee span {
  padding-left: 100%;
  text-transform: uppercase;
  font-size: 0.7em;
  font-family: 'Source Code Pro', monospace;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-200%);
  }
}
`

export default (() => SubMarquee) satisfies QuartzComponentConstructor