import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowDownV3 = (props: SvgProps) => (
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
      d="M6.43751 18.3277C6.75171 18.0171 7.25823 18.02 7.56886 18.3342L15.2 26.053L15.2 4.00005C15.2 3.55822 15.5581 3.20005 16 3.20005C16.4418 3.20005 16.8 3.55822 16.8 4.00005L16.8 26.053L24.431 18.3342C24.7417 18.02 25.2482 18.0171 25.5624 18.3277C25.8766 18.6383 25.8795 19.1448 25.5689 19.459L16.5689 28.5625C16.4186 28.7145 16.2137 28.8 16 28.8C15.7862 28.8 15.5813 28.7145 15.431 28.5625L6.43104 19.459C6.12041 19.1448 6.12331 18.6383 6.43751 18.3277Z"
      fill={props.color}
    />
  </Svg>
)
