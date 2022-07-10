import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ArrowDownV1 = (props: SvgProps) => (
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
      d="M16 3.19995C16.4418 3.19995 16.8 3.55812 16.8 3.99995V23.0686L22.9343 16.9343C23.2467 16.6218 23.7532 16.6218 24.0656 16.9343C24.3781 17.2467 24.3781 17.7532 24.0656 18.0656L16.5656 25.5656C16.2532 25.8781 15.7467 25.8781 15.4343 25.5656L7.93427 18.0656C7.62185 17.7532 7.62185 17.2467 7.93427 16.9343C8.24669 16.6218 8.75322 16.6218 9.06564 16.9343L15.2 23.0686V3.99995C15.2 3.55812 15.5581 3.19995 16 3.19995ZM3.19995 28C3.19995 27.5581 3.55812 27.2 3.99995 27.2H28C28.4418 27.2 28.7999 27.5581 28.7999 28C28.7999 28.4418 28.4418 28.7999 28 28.7999H3.99995C3.55812 28.7999 3.19995 28.4418 3.19995 28Z"
      fill={props.color}
    />
  </Svg>
)
