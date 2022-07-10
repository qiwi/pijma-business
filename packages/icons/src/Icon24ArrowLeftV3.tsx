import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24ArrowLeftV3 = (props: SvgProps) => (
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
      d="M9.33857 11.01C8.79183 11.5568 8.79183 12.4432 9.33857 12.9899L16.9244 20.5757C17.1587 20.81 17.1587 21.1899 16.9244 21.4242C16.69 21.6586 16.3101 21.6586 16.0758 21.4242L8.49004 13.8385C7.47467 12.8231 7.47468 11.1769 8.49004 10.1615L16.0758 2.57571C16.3101 2.3414 16.69 2.3414 16.9244 2.57571C17.1587 2.81003 17.1587 3.18992 16.9244 3.42424L9.33857 11.01Z"
      fill={props.color}
    />
  </Svg>
)
