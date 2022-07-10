import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowRightV3 = (props: SvgProps) => (
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
      d="M20.0202 15.1515C20.4888 15.6201 20.4888 16.3799 20.0202 16.8486L9.43442 27.4344C9.122 27.7468 9.122 28.2533 9.43442 28.5657C9.74684 28.8782 10.2534 28.8782 10.5658 28.5657L21.1516 17.9799C22.245 16.8865 22.245 15.1136 21.1516 14.0201L10.5658 3.43436C10.2534 3.12194 9.74684 3.12194 9.43442 3.43436C9.122 3.74678 9.122 4.25331 9.43442 4.56573L20.0202 15.1515Z"
      fill={props.color}
    />
  </Svg>
)
