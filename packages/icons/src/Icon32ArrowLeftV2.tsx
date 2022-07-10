import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowLeftV2 = (props: SvgProps) => (
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
      d="M13.6723 6.43751C13.9829 6.75171 13.98 7.25823 13.6658 7.56886L5.94704 15.2H28C28.4418 15.2 28.8 15.5581 28.8 16C28.8 16.4418 28.4418 16.8 28 16.8H5.94704L13.6658 24.431C13.98 24.7417 13.9829 25.2482 13.6723 25.5624C13.3617 25.8766 12.8552 25.8795 12.541 25.5689L3.43751 16.5689C3.2855 16.4186 3.19995 16.2137 3.19995 16C3.19995 15.7862 3.2855 15.5813 3.43751 15.431L12.541 6.43104C12.8552 6.12041 13.3617 6.12331 13.6723 6.43751Z"
      fill={props.color}
    />
  </Svg>
)
