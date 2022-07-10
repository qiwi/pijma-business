import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16TimeV3 = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 5C1.5 3.067 3.067 1.5 5 1.5H11C12.933 1.5 14.5 3.067 14.5 5V11C14.5 12.933 12.933 14.5 11 14.5H5C3.067 14.5 1.5 12.933 1.5 11V5ZM2.5 8.5H3.125C3.40114 8.5 3.625 8.27614 3.625 8C3.625 7.72386 3.40114 7.5 3.125 7.5H2.5V5C2.5 3.61929 3.61929 2.5 5 2.5H7.5V3.125C7.5 3.40114 7.72386 3.625 8 3.625C8.27614 3.625 8.5 3.40114 8.5 3.125V2.5H11C12.3807 2.5 13.5 3.61929 13.5 5V7.5H12.875C12.5989 7.5 12.375 7.72386 12.375 8C12.375 8.27614 12.5989 8.5 12.875 8.5H13.5V11C13.5 12.3807 12.3807 13.5 11 13.5H8.5V12.875C8.5 12.5989 8.27614 12.375 8 12.375C7.72386 12.375 7.5 12.5989 7.5 12.875V13.5H5C3.61929 13.5 2.5 12.3807 2.5 11V8.5ZM8 4.5C8.27614 4.5 8.5 4.72386 8.5 5V8C8.5 8.13261 8.44732 8.25979 8.35355 8.35355L6.85355 9.85355C6.65829 10.0488 6.34171 10.0488 6.14645 9.85355C5.95118 9.65829 5.95118 9.34171 6.14645 9.14645L7.5 7.79289V5C7.5 4.72386 7.72386 4.5 8 4.5Z"
      fill={props.color}
    />
  </Svg>
)
