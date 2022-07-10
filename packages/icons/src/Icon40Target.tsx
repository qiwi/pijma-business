import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Target = (props: SvgProps) => (
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
      d="M20 4C20.5523 4 21 4.44772 21 5V7.37223C27.1982 7.8563 32.1437 12.8018 32.6278 19L35 19C35.5523 19 36 19.4477 36 20C36 20.5523 35.5523 21 35 21L32.6278 21C32.1437 27.1982 27.1982 32.1437 21 32.6278V35C21 35.5523 20.5523 36 20 36C19.4477 36 19 35.5523 19 35V32.6278C12.8018 32.1437 7.8563 27.1982 7.37223 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H7.37223C7.8563 12.8018 12.8018 7.8563 19 7.37223V5C19 4.44772 19.4477 4 20 4ZM20 9.33333C14.109 9.33333 9.33333 14.109 9.33333 20C9.33333 25.891 14.109 30.6667 20 30.6667C25.891 30.6667 30.6667 25.891 30.6667 20C30.6667 14.109 25.891 9.33333 20 9.33333ZM20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16ZM14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20C26 23.3137 23.3137 26 20 26C16.6863 26 14 23.3137 14 20Z"
      fill={props.color}
    />
  </Svg>
)