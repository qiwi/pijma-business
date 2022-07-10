import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24MinusInCircle = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.65 12C6.65 11.6686 6.91863 11.4 7.25 11.4H16.75C17.0814 11.4 17.35 11.6686 17.35 12C17.35 12.3314 17.0814 12.6 16.75 12.6H7.25C6.91863 12.6 6.65 12.3314 6.65 12ZM12 20.3C16.584 20.3 20.3 16.584 20.3 12C20.3 7.41604 16.584 3.7 12 3.7C7.41604 3.7 3.7 7.41604 3.7 12C3.7 16.584 7.41604 20.3 12 20.3ZM12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
      fill={props.color}
    />
  </Svg>
)
