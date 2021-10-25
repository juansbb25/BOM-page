import React, { ReactElement, FC } from 'react'
import { useTrail, a, useSpring } from 'react-spring'
export type TrailProps = {
  children: ReactElement | ReactElement[]
  mass: number
}

export type AnimatedBannerTextProps = {
  fromColor: string
  toColor: string
  mass: number
  myText: string[]
}

const Trail: FC<TrailProps> = ({ children, mass, ...props }) => {
  const open = true
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: mass, friction: 500 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  })
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div
          key={index}
          className=' text-4xl sm:text-7xl lg:text-8xl font-Anton'
          style={style}
        >
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const AnimatedBannerText: FC<AnimatedBannerTextProps> = ({
  myText,
  mass,
  fromColor,
  toColor,
}) => {
  const styles: any = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: fromColor },
      { opacity: 0.5, color: toColor },
    ],
    from: { opacity: 0.5, color: toColor },
    config: { mass: 5, friction: 40 },
  })
  const myTextElements = myText.map((word, index) => {
    return (
      <a.span style={styles} key={index}>
        {word}
      </a.span>
    )
  })
  return <Trail mass={mass}>{myTextElements}</Trail>
}
export default AnimatedBannerText
