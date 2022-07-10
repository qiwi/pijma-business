import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Download = (props: SvgProps) => (
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
      d="M3.71429 2.5C3.04365 2.5 2.5 3.04365 2.5 3.71429V12.2857C2.5 12.9563 3.04365 13.5 3.71429 13.5H12.2857C12.9563 13.5 13.5 12.9563 13.5 12.2857V5.42857C13.5 4.75794 12.9563 4.21429 12.2857 4.21429H8.71008C8.12282 4.21429 7.5596 3.981 7.14434 3.56574L6.43426 2.85566C6.20654 2.62793 5.89768 2.5 5.57563 2.5H3.71429ZM1.5 3.71429C1.5 2.49137 2.49137 1.5 3.71429 1.5H5.57563C6.1629 1.5 6.72611 1.73329 7.14137 2.14855L7.85145 2.85863C8.07917 3.08635 8.38803 3.21429 8.71008 3.21429H12.2857C13.5086 3.21429 14.5 4.20566 14.5 5.42857V12.2857C14.5 13.5086 13.5086 14.5 12.2857 14.5H3.71429C2.49137 14.5 1.5 13.5086 1.5 12.2857V3.71429ZM6.28571 6.64286C6.56186 6.64286 6.78571 6.86671 6.78571 7.14286V9.57861L7.64645 8.71788C7.84171 8.52261 8.15829 8.52261 8.35355 8.71788C8.54882 8.91314 8.54882 9.22972 8.35355 9.42498L7.24536 10.5332C6.71536 11.0632 5.85607 11.0632 5.32607 10.5332L4.21788 9.42498C4.02261 9.22972 4.02261 8.91314 4.21788 8.71788C4.41314 8.52261 4.72972 8.52261 4.92498 8.71788L5.78571 9.57861V7.14286C5.78571 6.86671 6.00957 6.64286 6.28571 6.64286Z"
      fill={props.color}
    />
  </Svg>
)