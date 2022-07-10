import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ArrowLeftV2 = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0827 7.78917C17.4753 8.17763 17.4786 8.81079 17.0901 9.20337L7.39632 19H35C35.5523 19 36 19.4477 36 20C36 20.5523 35.5523 21 35 21H7.39632L17.0901 30.7966C17.4786 31.1892 17.4753 31.8224 17.0827 32.2108C16.6901 32.5993 16.0569 32.5959 15.6685 32.2034L4.28917 20.7034C3.90361 20.3137 3.90361 19.6863 4.28917 19.2966L15.6685 7.79663C16.0569 7.40405 16.6901 7.40071 17.0827 7.78917Z"
      fill={props.color}
    />
  </Svg>
)
