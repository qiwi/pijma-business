import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Pluse = (props: SvgProps) => (
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
      d="M16 4.19995C16.4418 4.19995 16.8 4.55812 16.8 4.99995V15.2H27C27.4418 15.2 27.7999 15.5581 27.7999 16C27.7999 16.4418 27.4418 16.8 27 16.8H16.8V27C16.8 27.4418 16.4418 27.7999 16 27.7999C15.5581 27.7999 15.2 27.4418 15.2 27V16.8H4.99995C4.55812 16.8 4.19995 16.4418 4.19995 16C4.19995 15.5581 4.55812 15.2 4.99995 15.2H15.2V4.99995C15.2 4.55812 15.5581 4.19995 16 4.19995Z"
      fill={props.color}
    />
  </Svg>
)
