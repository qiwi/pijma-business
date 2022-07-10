import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowUpV1 = (props: SvgProps) => (
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
      d="M20 36C19.4477 36 19 35.5523 19 35V11.1642L11.3321 18.8321C10.9416 19.2226 10.3084 19.2226 9.91789 18.8321C9.52737 18.4416 9.52737 17.8084 9.91789 17.4179L19.2929 8.04289C19.6834 7.65237 20.3166 7.65237 20.7071 8.04289L30.0821 17.4179C30.4726 17.8084 30.4726 18.4416 30.0821 18.8321C29.6916 19.2226 29.0584 19.2226 28.6679 18.8321L21 11.1642V35C21 35.5523 20.5523 36 20 36ZM36 5C36 5.55228 35.5523 6 35 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H35C35.5523 4 36 4.44772 36 5Z"
      fill={props.color}
    />
  </Svg>
)
