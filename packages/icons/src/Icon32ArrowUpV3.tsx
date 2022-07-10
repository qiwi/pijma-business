import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowUpV3 = (props: SvgProps) => (
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
      d="M6.43751 13.6723C6.75171 13.9829 7.25823 13.98 7.56886 13.6658L15.2 5.94704L15.2 28C15.2 28.4418 15.5581 28.8 16 28.8C16.4418 28.8 16.8 28.4418 16.8 28L16.8 5.94704L24.431 13.6658C24.7417 13.98 25.2482 13.9829 25.5624 13.6723C25.8766 13.3617 25.8795 12.8552 25.5689 12.541L16.5689 3.43751C16.4186 3.2855 16.2137 3.19995 16 3.19995C15.7862 3.19995 15.5813 3.2855 15.431 3.43751L6.43104 12.541C6.12041 12.8552 6.12331 13.3617 6.43751 13.6723Z"
      fill={props.color}
    />
  </Svg>
)
