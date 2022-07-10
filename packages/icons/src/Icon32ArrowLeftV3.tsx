import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowLeftV3 = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9798 15.1515C11.5112 15.6201 11.5112 16.3799 11.9798 16.8486L22.5656 27.4344C22.878 27.7468 22.878 28.2533 22.5656 28.5657C22.2532 28.8782 21.7466 28.8782 21.4342 28.5657L10.8484 17.9799C9.75495 16.8865 9.75495 15.1136 10.8484 14.0201L21.4342 3.43436C21.7466 3.12194 22.2532 3.12194 22.5656 3.43436C22.878 3.74678 22.878 4.25331 22.5656 4.56573L11.9798 15.1515Z"
      fill={props.color}
    />
  </Svg>
)
