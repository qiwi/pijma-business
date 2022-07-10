import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24CheckInCircle = (props: SvgProps) => (
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
      d="M17.1762 8.25278C17.4094 8.48822 17.4076 8.86811 17.1721 9.1013L10.5414 15.6689L6.85539 12.4521C6.60573 12.2342 6.57997 11.8552 6.79786 11.6055C7.01574 11.3558 7.39477 11.3301 7.64443 11.548L10.4897 14.0311L16.3277 8.24872C16.5631 8.01553 16.943 8.01735 17.1762 8.25278Z"
      fill={props.color}
    />
  </Svg>
)
