import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16WalletOut = (props: SvgProps) => (
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
      d="M6.36151 1.87662C6.85067 1.37446 7.64933 1.37446 8.13849 1.87662L9.10816 2.87206C9.30084 3.06987 9.29669 3.38642 9.09889 3.57911C8.90108 3.77179 8.58453 3.76764 8.39184 3.56984L7.75 2.91094V4.76081C7.75 5.03696 7.52614 5.26081 7.25 5.26081C6.97386 5.26081 6.75 5.03696 6.75 4.76081V2.91094L6.10816 3.56984C5.91547 3.76764 5.59892 3.77179 5.40111 3.57911C5.20331 3.38642 5.19916 3.06987 5.39184 2.87206L6.36151 1.87662ZM3.5 4.49088C2.96 4.49088 2.5 4.944 2.5 5.53075V5.80068H12V5.53075C12 4.944 11.54 4.49088 11 4.49088H10.25C9.97386 4.49088 9.75 4.26702 9.75 3.99088C9.75 3.71474 9.97386 3.49088 10.25 3.49088H11C12.1169 3.49088 13 4.4166 13 5.53075V5.86463C13.8694 6.09213 14.5 6.89907 14.5 7.84054V12.4601C14.5 13.5743 13.6169 14.5 12.5 14.5H3.5C2.38315 14.5 1.5 13.5743 1.5 12.4601V5.53075C1.5 4.4166 2.38315 3.49088 3.5 3.49088H4.25C4.52614 3.49088 4.75 3.71474 4.75 3.99088C4.75 4.26702 4.52614 4.49088 4.25 4.49088H3.5ZM13.5 11.1902V9.11047H12.5C11.96 9.11047 11.5 9.56359 11.5 10.1503C11.5 10.7371 11.96 11.1902 12.5 11.1902H13.5ZM13.5 8.11047H12.5C11.3831 8.11047 10.5 9.0362 10.5 10.1503C10.5 11.2645 11.3831 12.1902 12.5 12.1902H13.5V12.4601C13.5 13.0469 13.04 13.5 12.5 13.5H3.5C2.96 13.5 2.5 13.0469 2.5 12.4601V6.80068H12.5C13.04 6.80068 13.5 7.2538 13.5 7.84054V8.11047Z"
      fill={props.color}
    />
  </Svg>
)
