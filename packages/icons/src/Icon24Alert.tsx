import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Alert = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20.3C16.584 20.3 20.3 16.584 20.3 12C20.3 7.41604 16.584 3.7 12 3.7C7.41604 3.7 3.7 7.41604 3.7 12C3.7 16.584 7.41604 20.3 12 20.3ZM12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3999 14.1591L11.3999 7.25L12.5999 7.25L12.5999 14.1591L11.3999 14.1591ZM11.3999 16.75L11.3999 15.4545L12.5999 15.4545L12.5999 16.75L11.3999 16.75Z"
      fill={props.color}
    />
  </Svg>
)
