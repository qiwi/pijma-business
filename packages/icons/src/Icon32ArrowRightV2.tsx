import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowRightV2 = (props: SvgProps) => (
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
      d="M18.3277 6.43751C18.0171 6.75171 18.02 7.25823 18.3342 7.56886L26.053 15.2H4.00005C3.55822 15.2 3.20005 15.5581 3.20005 16C3.20005 16.4418 3.55822 16.8 4.00005 16.8H26.053L18.3342 24.431C18.02 24.7417 18.0171 25.2482 18.3277 25.5624C18.6383 25.8766 19.1448 25.8795 19.459 25.5689L28.5625 16.5689C28.7145 16.4186 28.8 16.2137 28.8 16C28.8 15.7862 28.7145 15.5813 28.5625 15.431L19.459 6.43104C19.1448 6.12041 18.6383 6.12331 18.3277 6.43751Z"
      fill={props.color}
    />
  </Svg>
)
