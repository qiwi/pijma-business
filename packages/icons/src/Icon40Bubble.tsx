import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Bubble = (props: SvgProps) => (
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
      d="M4 11.131C4 8.26288 6.40147 6 9.28571 6H30.7143C33.5985 6 36 8.26288 36 11.131V23.5239C36 26.3921 33.5985 28.6549 30.7143 28.6549H15.3466C14.4636 28.6549 13.6238 28.9934 13.0102 29.5849L9.35208 33.1109C7.42137 34.9719 4 33.7273 4 30.9304V11.131ZM9.28571 8C7.43609 8 6 9.43613 6 11.131V30.9304C6 31.8137 7.19495 32.4123 7.9641 31.6709L11.6222 28.1449C12.616 27.1869 13.9564 26.6549 15.3466 26.6549H30.7143C32.5639 26.6549 34 25.2188 34 23.5239V11.131C34 9.43613 32.5639 8 30.7143 8H9.28571Z"
      fill={props.color}
    />
  </Svg>
)
