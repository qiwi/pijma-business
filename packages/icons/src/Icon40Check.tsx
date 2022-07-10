import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Check = (props: SvgProps) => (
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
      d="M37.0034 6.75757C37.4135 7.12756 37.4459 7.75989 37.0759 8.16993L17.647 29.7016C16.0585 31.462 13.296 31.462 11.7075 29.7016L2.59108 19.5985C2.22109 19.1885 2.25355 18.5561 2.66358 18.1861C3.07361 17.8162 3.70594 17.8486 4.07593 18.2586L13.1924 28.3617C13.9866 29.2419 15.3679 29.2419 16.1621 28.3617L35.5911 6.83008C35.9611 6.42004 36.5934 6.38758 37.0034 6.75757Z"
      fill={props.color}
    />
  </Svg>
)
