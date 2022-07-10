import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40FlagV1 = (props: SvgProps) => (
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
      d="M10.0556 4.37674C13.3275 3.51533 16.7948 4.14732 19.5838 6.1054L19.7455 6.21888C22.4564 8.12211 25.9132 8.42808 28.8896 7.03502C31.3385 5.88884 34 7.7774 34 10.4183V19.2207C34 20.6229 33.3305 21.9485 32.1892 22.7498L30.6085 23.8595C26.6453 26.6419 21.4 26.4403 17.6472 23.3665C15.7584 21.8194 13.3593 21.1302 10.9868 21.4425L9.15424 21.6837C8.74888 21.7371 8.35904 21.7005 8 21.5912L8 35C8 35.5523 7.55229 36 7 36C6.44772 36 6 35.5523 6 35L6 18.8412C6 18.8402 6 18.8391 6 18.838V7.71797C6 6.40384 6.86068 5.21788 8.14662 4.87932L10.0556 4.37674ZM8 7.97044C8 7.9699 8 7.96935 8 7.9688V7.71797C8 7.26464 8.29366 6.90876 8.65582 6.81342L10.5648 6.31083C13.2605 5.60112 16.1221 6.11867 18.4347 7.74227L18.5963 7.85575C21.8894 10.1677 26.1075 10.5454 29.7374 8.84643C30.7476 8.3736 32 9.1154 32 10.4183V19.2207C32 19.9919 31.6312 20.6978 31.04 21.1129L29.4593 22.2226C26.2334 24.4874 21.9758 24.3267 18.9145 21.8192C16.6055 19.9279 13.6551 19.074 10.7258 19.4596L8.89322 19.7008C8.46189 19.7576 8.00105 19.4046 8 18.8399L8 7.97044Z"
      fill={props.color}
    />
  </Svg>
)