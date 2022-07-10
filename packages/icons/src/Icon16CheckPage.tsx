import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16CheckPage = (props: SvgProps) => (
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
      d="M3.71429 2.5C3.04365 2.5 2.5 3.04365 2.5 3.71429V12.2857C2.5 12.9563 3.04365 13.5 3.71429 13.5H12.2857C12.9563 13.5 13.5 12.9563 13.5 12.2857V6.78571H11.4286C10.2057 6.78571 9.21429 5.79434 9.21429 4.57143V2.5H3.71429ZM10.2143 3.20711L12.7929 5.78571H11.4286C10.7579 5.78571 10.2143 5.24206 10.2143 4.57143V3.20711ZM1.5 3.71429C1.5 2.49137 2.49137 1.5 3.71429 1.5H9.71429C9.84689 1.5 9.97407 1.55268 10.0678 1.64645L14.3536 5.93216C14.4473 6.02593 14.5 6.15311 14.5 6.28571V12.2857C14.5 13.5086 13.5086 14.5 12.2857 14.5H3.71429C2.49137 14.5 1.5 13.5086 1.5 12.2857V3.71429ZM8.35355 7.64645C8.54882 7.84171 8.54882 8.15829 8.35355 8.35355L6.67393 10.0332C6.14393 10.5632 5.28464 10.5632 4.75464 10.0332L4.21788 9.49641C4.02261 9.30115 4.02261 8.98457 4.21788 8.7893C4.41314 8.59404 4.72972 8.59404 4.92498 8.7893L5.46175 9.32607C5.60122 9.46554 5.82735 9.46554 5.96682 9.32607L7.64645 7.64645C7.84171 7.45118 8.15829 7.45118 8.35355 7.64645Z"
      fill={props.color}
    />
  </Svg>
)
