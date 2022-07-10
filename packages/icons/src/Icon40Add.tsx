import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Add = (props: SvgProps) => (
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
      d="M4 11C4 7.13401 7.13401 4 11 4H29C32.866 4 36 7.13401 36 11V29C36 32.866 32.866 36 29 36H11C7.13401 36 4 32.866 4 29V11ZM11 6C8.23858 6 6 8.23858 6 11V29C6 31.7614 8.23858 34 11 34H29C31.7614 34 34 31.7614 34 29V11C34 8.23858 31.7614 6 29 6H11ZM19 21V28.3333H21V21H28.3333V19H21V11.6667H19V19H11.6667V21H19Z"
      fill={props.color}
    />
  </Svg>
)
