import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowRightV1 = (props: SvgProps) => (
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
      d="M4 10C4 6.68629 6.68629 4 10 4H30C33.3137 4 36 6.68629 36 10V30C36 33.3137 33.3137 36 30 36H10C6.68629 36 4 33.3137 4 30V10ZM10 6C7.79086 6 6 7.79086 6 10V19H22.5858L15.9596 12.3738C15.569 11.9832 15.569 11.3501 15.9596 10.9596C16.3501 10.569 16.9832 10.569 17.3738 10.9596L26.4142 20L17.3738 29.0404C16.9832 29.431 16.3501 29.431 15.9596 29.0404C15.569 28.6499 15.569 28.0168 15.9596 27.6262L22.5858 21H6V30C6 32.2091 7.79086 34 10 34H30C32.2091 34 34 32.2091 34 30V10C34 7.79086 32.2091 6 30 6H10Z"
      fill={props.color}
    />
  </Svg>
)
