import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24SettingsV1 = (props: SvgProps) => (
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
      d="M10.559 2.78679C11.4526 2.2711 12.5472 2.2711 13.4408 2.78679L19.1218 6.06508C20.039 6.59437 20.5999 7.58218 20.5999 8.64607L20.5999 15.354C20.5999 16.4179 20.039 17.4057 19.1218 17.935L13.4408 21.2133C12.5472 21.7289 11.4526 21.7289 10.559 21.2133L4.87799 17.935C3.96078 17.4057 3.3999 16.4179 3.3999 15.354L3.3999 8.64606C3.3999 7.58218 3.96078 6.59437 4.87799 6.06508L10.559 2.78679ZM12.8411 3.82615C12.3186 3.52465 11.6812 3.52465 11.1588 3.82615L5.47776 7.10444C4.93918 7.41524 4.5999 8.00259 4.5999 8.64606L4.5999 15.354C4.5999 15.9975 4.93919 16.5848 5.47777 16.8956L11.1588 20.1739C11.6812 20.4754 12.3186 20.4754 12.8411 20.1739L18.522 16.8956C19.0606 16.5848 19.3999 15.9975 19.3999 15.354L19.3999 8.64606C19.3999 8.00259 19.0606 7.41524 18.522 7.10444L12.8411 3.82615ZM11.9999 9.0484C10.4218 9.0484 9.12138 10.3581 9.12138 12C9.12138 13.642 10.4218 14.9516 11.9999 14.9516C13.578 14.9516 14.8784 13.642 14.8784 12C14.8784 10.3581 13.578 9.0484 11.9999 9.0484ZM7.92138 12C7.92138 9.71897 9.7357 7.8484 11.9999 7.8484C14.2641 7.8484 16.0784 9.71897 16.0784 12C16.0784 14.2811 14.2641 16.1516 11.9999 16.1516C9.7357 16.1516 7.92138 14.2811 7.92138 12Z"
      fill={props.color}
    />
  </Svg>
)