import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowDownV2 = (props: SvgProps) => (
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
      d="M30 4C33.3137 4 36 6.68629 36 10L36 30C36 33.3137 33.3137 36 30 36L10 36C6.68629 36 4 33.3137 4 30L4 10C4 6.68629 6.68629 4 10 4L30 4ZM34 10C34 7.79086 32.2091 6 30 6L21 6L21 22.5858L27.6262 15.9596C28.0168 15.569 28.6499 15.569 29.0404 15.9596C29.431 16.3501 29.431 16.9832 29.0404 17.3738L20.7071 25.7071C20.3166 26.0976 19.6834 26.0976 19.2929 25.7071L10.9596 17.3738C10.569 16.9832 10.569 16.3501 10.9596 15.9596C11.3501 15.569 11.9833 15.569 12.3738 15.9596L19 22.5858L19 6L10 6C7.79086 6 6 7.79086 6 10L6 30C6 32.2091 7.79086 34 10 34L30 34C32.2091 34 34 32.2091 34 30L34 10Z"
      fill={props.color}
    />
  </Svg>
)
