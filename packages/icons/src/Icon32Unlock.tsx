import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Unlock = (props: SvgProps) => (
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
      d="M15.8923 4.80001C13.4697 4.80001 11.3116 6.36694 10.5416 8.70113L10.4264 9.05062C10.2879 9.47021 9.8356 9.69815 9.41601 9.55975C8.99642 9.42134 8.76848 8.969 8.90688 8.54941L9.02217 8.19991C10.0056 5.2185 12.7702 3.20001 15.8923 3.20001C19.8993 3.20001 23.1333 6.48017 23.1333 10.5088V12.8813C24.9454 13.255 26.3 14.8733 26.3 16.8V24.8C26.3 27.0012 24.5319 28.8 22.3333 28.8H9.66662C7.46801 28.8 5.69995 27.0012 5.69995 24.8V16.8C5.69995 14.5988 7.46801 12.8 9.66662 12.8H21.5333V10.5088C21.5333 7.34799 18.9999 4.80001 15.8923 4.80001ZM9.66662 14.4C8.36742 14.4 7.29995 15.4666 7.29995 16.8V24.8C7.29995 26.1334 8.36742 27.2 9.66662 27.2H22.3333C23.6325 27.2 24.7 26.1334 24.7 24.8V16.8C24.7 15.4666 23.6325 14.4 22.3333 14.4H9.66662ZM13.6166 20C13.6166 19.5582 13.9748 19.2 14.4166 19.2H17.5833C18.0251 19.2 18.3833 19.5582 18.3833 20C18.3833 20.4418 18.0251 20.8 17.5833 20.8H16.8V23.2C16.8 23.6418 16.4418 24 16 24C15.5581 24 15.2 23.6418 15.2 23.2V20.8H14.4166C13.9748 20.8 13.6166 20.4418 13.6166 20Z"
      fill={props.color}
    />
  </Svg>
)