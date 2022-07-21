import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowDownV2 = (props: SvgProps) => (
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
      d="M23 3.19995C26.2033 3.19995 28.8 5.7967 28.8 8.99995L28.8 23C28.8 26.2032 26.2033 28.7999 23 28.7999L9.00005 28.7999C5.7968 28.7999 3.20005 26.2032 3.20005 22.9999L3.20005 8.99995C3.20005 5.7967 5.7968 3.19995 9.00005 3.19995L23 3.19995ZM27.2 8.99995C27.2 6.68036 25.3196 4.79995 23 4.79995L16.8 4.79995L16.8 18.0686L22.101 12.7676C22.4134 12.4552 22.92 12.4552 23.2324 12.7676C23.5448 13.08 23.5448 13.5865 23.2324 13.899L16.5657 20.5656C16.2533 20.8781 15.7468 20.8781 15.4344 20.5656L8.7677 13.899C8.45528 13.5865 8.45528 13.08 8.7677 12.7676C9.08012 12.4552 9.58665 12.4552 9.89907 12.7676L15.2 18.0686L15.2 4.79995L9.00005 4.79995C6.68046 4.79995 4.80005 6.68035 4.80005 8.99995L4.80005 22.9999C4.80005 25.3195 6.68045 27.1999 9.00005 27.1999L23 27.1999C25.3196 27.1999 27.2 25.3195 27.2 23L27.2 8.99995Z"
      fill={props.color}
    />
  </Svg>
)