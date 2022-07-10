import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowDownV1 = (props: SvgProps) => (
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
      d="M20 4C20.5523 4 21 4.44772 21 5V28.8358L28.6679 21.1679C29.0584 20.7774 29.6916 20.7774 30.0821 21.1679C30.4726 21.5584 30.4726 22.1916 30.0821 22.5821L20.7071 31.9571C20.3166 32.3476 19.6834 32.3476 19.2929 31.9571L9.91789 22.5821C9.52737 22.1916 9.52737 21.5584 9.91789 21.1679C10.3084 20.7774 10.9416 20.7774 11.3321 21.1679L19 28.8358V5C19 4.44772 19.4477 4 20 4ZM4 35C4 34.4477 4.44772 34 5 34H35C35.5523 34 36 34.4477 36 35C36 35.5523 35.5523 36 35 36H5C4.44772 36 4 35.5523 4 35Z"
      fill={props.color}
    />
  </Svg>
)
