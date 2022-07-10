import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowLeftV1 = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36 30C36 33.3137 33.3137 36 30 36L10 36C6.68629 36 4 33.3137 4 30L4 10C4 6.68629 6.68629 4 10 4L30 4C33.3137 4 36 6.68629 36 10L36 30ZM30 34C32.2091 34 34 32.2091 34 30L34 21L17.4142 21L24.0404 27.6262C24.431 28.0167 24.431 28.6499 24.0404 29.0404C23.6499 29.431 23.0168 29.431 22.6262 29.0404L13.5858 20L22.6262 10.9596C23.0168 10.569 23.6499 10.569 24.0404 10.9596C24.431 11.3501 24.431 11.9833 24.0404 12.3738L17.4142 19L34 19L34 10C34 7.79086 32.2091 6 30 6L10 6C7.79086 6 6 7.79086 6 10L6 30C6 32.2091 7.79086 34 10 34L30 34Z"
      fill={props.color}
    />
  </Svg>
)
