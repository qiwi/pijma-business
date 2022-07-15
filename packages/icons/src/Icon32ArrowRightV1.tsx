import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowRightV1 = (props: SvgProps) => (
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
      d="M3.19995 8.99995C3.19995 5.7967 5.7967 3.19995 8.99995 3.19995H23C26.2032 3.19995 28.8 5.7967 28.8 8.99995V23C28.8 26.2032 26.2032 28.8 23 28.8H8.99995C5.7967 28.8 3.19995 26.2032 3.19995 23V8.99995ZM8.99995 4.79995C6.68036 4.79995 4.79995 6.68036 4.79995 8.99995V15.2H18.0686L12.7676 9.89897C12.4552 9.58655 12.4552 9.08002 12.7676 8.7676C13.08 8.45518 13.5866 8.45518 13.899 8.7676L21.1313 16L13.899 23.2323C13.5866 23.5447 13.08 23.5447 12.7676 23.2323C12.4552 22.9199 12.4552 22.4134 12.7676 22.1009L18.0686 16.8H4.79995V23C4.79995 25.3195 6.68036 27.2 8.99995 27.2H23C25.3195 27.2 27.2 25.3195 27.2 23V8.99995C27.2 6.68036 25.3195 4.79995 23 4.79995H8.99995Z"
      fill={props.color}
    />
  </Svg>
)