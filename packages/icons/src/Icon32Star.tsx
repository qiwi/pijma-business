import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Star = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7806 4.58458C14.7084 2.7384 17.2916 2.73841 18.2194 4.58458L20.7804 9.68042C20.9109 9.94003 21.143 10.114 21.4021 10.1666L26.7903 11.2616C28.7113 11.6519 29.4298 14.0077 28.1671 15.457L24.3063 19.8885C24.129 20.0919 24.0419 20.3704 24.0756 20.6518L24.7076 25.9369C24.9629 28.0718 22.6062 29.642 20.7887 28.3264L16.5042 25.225C16.1999 25.0048 15.8001 25.0048 15.4958 25.225L11.2114 28.3264C9.3938 29.642 7.03716 28.0718 7.29244 25.9369L7.92441 20.6518C7.95807 20.3704 7.87097 20.0919 7.69375 19.8885L3.8329 15.457C2.57022 14.0077 3.28869 11.6519 5.20971 11.2616L10.5979 10.1666C10.857 10.114 11.0891 9.94003 11.2196 9.68042L13.7806 4.58458ZM16.7898 5.30306C16.4527 4.63225 15.5473 4.63225 15.2102 5.30306L12.6492 10.3989C12.3045 11.0848 11.67 11.5814 10.9165 11.7346L5.52834 12.8295C4.86771 12.9638 4.54268 13.836 5.03928 14.406L8.90012 18.8374C9.379 19.3871 9.59962 20.1181 9.51309 20.8418L8.88112 26.1269C8.77662 27.0008 9.68578 27.4555 10.2732 27.0303L14.5576 23.9289C15.4217 23.3035 16.5783 23.3035 17.4424 23.9289L21.7268 27.0303C22.3142 27.4555 23.2234 27.0008 23.1189 26.1269L22.4869 20.8418C22.4004 20.1181 22.621 19.3871 23.0999 18.8374L26.9607 14.406C27.4573 13.836 27.1323 12.9638 26.4717 12.8295L21.0835 11.7346C20.33 11.5814 19.6955 11.0848 19.3508 10.3989L16.7898 5.30306Z"
      fill={props.color}
    />
  </Svg>
)