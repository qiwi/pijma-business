import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowRightV3 = (props: SvgProps) => (
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
      d="M14.6614 11.01C15.2082 11.5568 15.2082 12.4432 14.6614 12.9899L7.07565 20.5757C6.84133 20.81 6.84133 21.1899 7.07565 21.4242C7.30996 21.6586 7.68986 21.6586 7.92417 21.4242L15.51 13.8385C16.5253 12.8231 16.5253 11.1769 15.51 10.1615L7.92417 2.57571C7.68986 2.3414 7.30996 2.3414 7.07565 2.57571C6.84133 2.81003 6.84133 3.18992 7.07565 3.42424L14.6614 11.01Z"
      fill={props.color}
    />
  </Svg>
)
