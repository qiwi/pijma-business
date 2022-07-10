import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowDownV3 = (props: SvgProps) => (
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
      d="M2.63026 9.11169C2.81616 8.90748 3.13239 8.89264 3.33659 9.07854L7.5 12.8687L7.5 2C7.5 1.72386 7.72386 1.5 8 1.5C8.27615 1.5 8.5 1.72386 8.5 2L8.5 12.8687L12.6634 9.07854C12.8676 8.89264 13.1838 8.90748 13.3697 9.11169C13.5556 9.31589 13.5408 9.63212 13.3366 9.81801L8.33659 14.3697C8.14581 14.5434 7.8542 14.5434 7.66341 14.3697L2.66341 9.81802C2.45921 9.63212 2.44437 9.31589 2.63026 9.11169Z"
      fill={props.color}
    />
  </Svg>
)
