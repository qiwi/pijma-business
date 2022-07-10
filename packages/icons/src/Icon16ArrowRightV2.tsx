import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16ArrowRightV2 = (props: SvgProps) => (
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
      d="M9.11169 2.63026C8.90748 2.81616 8.89264 3.13239 9.07854 3.33659L12.8687 7.5H2C1.72386 7.5 1.5 7.72386 1.5 8C1.5 8.27615 1.72386 8.5 2 8.5H12.8687L9.07854 12.6634C8.89264 12.8676 8.90748 13.1838 9.11169 13.3697C9.31589 13.5556 9.63212 13.5408 9.81802 13.3366L14.3697 8.33659C14.5434 8.14581 14.5434 7.8542 14.3697 7.66341L9.81802 2.66341C9.63212 2.45921 9.31589 2.44437 9.11169 2.63026Z"
      fill={props.color}
    />
  </Svg>
)
