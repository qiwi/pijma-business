import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Check = (props: SvgProps) => (
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
      d="M22.395 4.04843C22.6444 4.26663 22.6697 4.64569 22.4515 4.89507L11.5842 17.3148C10.1499 18.954 7.59991 18.954 6.16563 17.3148L1.54836 12.0379C1.33016 11.7885 1.35543 11.4095 1.60481 11.1913C1.85419 10.9731 2.23325 10.9983 2.45146 11.2477L7.06872 16.5246C8.02491 17.6174 9.72491 17.6174 10.6811 16.5246L21.5484 4.10487C21.7666 3.85549 22.1456 3.83022 22.395 4.04843Z"
      fill={props.color}
    />
  </Svg>
)
