import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Loader = (props: SvgProps) => (
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
      d="M21 4.875C21 4.32272 20.5523 3.875 20 3.875C19.4477 3.875 19 4.32272 19 4.875V13.1434C19.3265 13.0961 19.6605 13.0715 20.0001 13.0715C20.3397 13.0715 20.6735 13.096 21 13.1434V4.875ZM24.1379 14.4479C24.6739 14.8496 25.1495 15.3274 25.5488 15.8653L31.4021 10.0121C31.7926 9.62156 31.7926 8.98839 31.4021 8.59787C31.0116 8.20735 30.3784 8.20735 29.9879 8.59787L24.1379 14.4479ZM26.8374 19C26.8826 19.3193 26.906 19.6456 26.906 19.9774C26.906 20.3249 26.8804 20.6663 26.8308 21H35.125C35.6773 21 36.125 20.5523 36.125 20C36.125 19.4477 35.6773 19 35.125 19L26.8374 19ZM25.5295 24.1154C25.1278 24.6513 24.6499 25.127 24.112 25.5263L29.9879 31.4021C30.3784 31.7927 31.0116 31.7927 31.4021 31.4021C31.7926 31.0116 31.7926 30.3784 31.4021 29.9879L25.5295 24.1154ZM21 26.8115C20.6735 26.8588 20.3397 26.8833 20.0001 26.8833C19.6605 26.8833 19.3265 26.8588 19 26.8114V35.125C19 35.6773 19.4477 36.125 20 36.125C20.5523 36.125 21 35.6773 21 35.125V26.8115ZM15.888 25.5261C15.3501 25.1268 14.8723 24.6512 14.4706 24.1152L8.59789 29.9878C8.20737 30.3784 8.20737 31.0115 8.59789 31.4021C8.98842 31.7926 9.62158 31.7926 10.0121 31.4021L15.888 25.5261ZM13.1694 21C13.1199 20.6663 13.0942 20.3249 13.0942 19.9774C13.0942 19.6456 13.1176 19.3193 13.1629 19L4.875 19C4.32272 19 3.875 19.4477 3.875 20C3.875 20.5523 4.32272 21 4.875 21H13.1694ZM14.4513 15.8655C14.8506 15.3276 15.3262 14.8498 15.8622 14.448L10.0121 8.59793C9.62158 8.20741 8.98842 8.20741 8.5979 8.59793C8.20737 8.98846 8.20737 9.62162 8.59789 10.0121L14.4513 15.8655Z"
      fill={props.color}
    />
  </Svg>
)
