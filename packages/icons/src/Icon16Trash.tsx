import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Trash = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      d="M2 4.07692H3.61538M14 4.07692H12.3846M5.46154 4.07692V3.38462C5.46154 2.61991 6.08145 2 6.84615 2H9.15385C9.91855 2 10.5385 2.61991 10.5385 3.38462V4.07692M3.61538 4.07692V11.7692C3.61538 12.8738 4.51082 13.7692 5.61538 13.7692H10.3846C11.4892 13.7692 12.3846 12.8738 12.3846 11.7692V4.07692M3.61538 4.07692H12.3846M6.84615 7.07692V10.7692M9.38462 7.07692V10.7692"
      stroke={props.color}
      strokeLinecap="round"
    />
  </Svg>
)
