import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Add = (props: SvgProps) => (
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
      d="M3.19995 7.99995C3.19995 5.34899 5.34898 3.19995 7.99995 3.19995H24C26.6509 3.19995 28.8 5.34898 28.8 7.99995V24C28.8 26.6509 26.6509 28.8 24 28.8H7.99995C5.34899 28.8 3.19995 26.6509 3.19995 24V7.99995ZM7.99995 4.79995C6.23264 4.79995 4.79995 6.23264 4.79995 7.99995V24C4.79995 25.7673 6.23264 27.2 7.99995 27.2H24C25.7673 27.2 27.2 25.7673 27.2 24V7.99995C27.2 6.23264 25.7673 4.79995 24 4.79995H7.99995ZM15.2 16.8V22.6666H16.8V16.8H22.6666V15.2H16.8V9.33328H15.2V15.2H9.33328V16.8H15.2Z"
      fill={props.color}
    />
  </Svg>
)
