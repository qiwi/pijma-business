import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Map = (props: SvgProps) => (
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
      d="M23.8385 4.10557C24.094 3.97783 24.3919 3.96544 24.6571 4.07152L32.6773 7.27962C34.6841 8.08233 36 10.0259 36 12.1873V31.8349C36 34.0584 33.7543 35.5788 31.6899 34.753L24.3313 31.8095L16.1615 35.8944C15.906 36.0222 15.6081 36.0346 15.3429 35.9285L7.32265 32.7204C5.31589 31.9177 4 29.9741 4 27.8127V8.16507C4 5.94161 6.24566 4.42123 8.31009 5.247L15.6687 8.19046L23.8385 4.10557ZM25.2857 30.0373L32.4327 32.896C33.1834 33.1963 34 32.6435 34 31.8349V12.1873C34 10.8437 33.182 9.63555 31.9346 9.13657L25.2857 6.47703V17.8571C25.2857 18.4094 24.838 18.8571 24.2857 18.8571C23.7334 18.8571 23.2857 18.4094 23.2857 17.8571V6.61803L16.1615 10.1801C15.906 10.3079 15.6081 10.3203 15.3429 10.2142L7.5673 7.10395C6.8166 6.80367 6 7.35654 6 8.16507V27.8127C6 29.1563 6.81798 30.3644 8.06543 30.8634L14.7143 33.523V20C14.7143 19.4477 15.162 19 15.7143 19C16.2666 19 16.7143 19.4477 16.7143 20V33.382L23.2857 30.0963V26.4286C23.2857 25.8763 23.7334 25.4286 24.2857 25.4286C24.838 25.4286 25.2857 25.8763 25.2857 26.4286V30.0373Z"
      fill={props.color}
    />
  </Svg>
)
