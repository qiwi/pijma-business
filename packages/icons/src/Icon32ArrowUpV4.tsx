import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowUpV4 = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8485 11.9799C16.3799 11.5113 15.6201 11.5113 15.1514 11.9799L4.56564 22.5657C4.25322 22.8781 3.74669 22.8781 3.43427 22.5657C3.12185 22.2533 3.12185 21.7467 3.43427 21.4343L14.0201 10.8485C15.1135 9.75508 16.8864 9.75508 17.9799 10.8485L28.5656 21.4343C28.8781 21.7467 28.8781 22.2533 28.5656 22.5657C28.2532 22.8781 27.7467 22.8781 27.4343 22.5657L16.8485 11.9799Z"
      fill={props.color}
    />
  </Svg>
)
