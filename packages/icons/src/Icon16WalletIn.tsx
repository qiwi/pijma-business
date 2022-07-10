import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16WalletIn = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 1.5C7.52614 1.5 7.75 1.72386 7.75 2V3.79289L8.39645 3.14645C8.59171 2.95118 8.90829 2.95118 9.10355 3.14645C9.29882 3.34171 9.29882 3.65829 9.10355 3.85355L8.13388 4.82322C7.64573 5.31138 6.85427 5.31138 6.36612 4.82322L5.39645 3.85355C5.20118 3.65829 5.20118 3.34171 5.39645 3.14645C5.59171 2.95118 5.90829 2.95118 6.10355 3.14645L6.75 3.79289V2C6.75 1.72386 6.97386 1.5 7.25 1.5ZM3.5 4.75C2.94772 4.75 2.5 5.19772 2.5 5.75V6H12V5.75C12 5.19772 11.5523 4.75 11 4.75H10.25C9.97386 4.75 9.75 4.52614 9.75 4.25C9.75 3.97386 9.97386 3.75 10.25 3.75H11C12.1046 3.75 13 4.64543 13 5.75V6.06301C13.8626 6.28503 14.5 7.06808 14.5 8V12.5C14.5 13.6046 13.6046 14.5 12.5 14.5H3.5C2.39543 14.5 1.5 13.6046 1.5 12.5V5.75C1.5 4.64543 2.39543 3.75 3.5 3.75H4.25C4.52614 3.75 4.75 3.97386 4.75 4.25C4.75 4.52614 4.52614 4.75 4.25 4.75H3.5ZM13.5 11.25V9.25H12.5C11.9477 9.25 11.5 9.69772 11.5 10.25C11.5 10.8023 11.9477 11.25 12.5 11.25H13.5ZM13.5 8.25H12.5C11.3954 8.25 10.5 9.14543 10.5 10.25C10.5 11.3546 11.3954 12.25 12.5 12.25H13.5V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V7H12.5C13.0523 7 13.5 7.44772 13.5 8V8.25Z"
      fill={props.color}
    />
  </Svg>
)