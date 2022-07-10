import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32ShildCross = (props: SvgProps) => (
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
      d="M16.9888 5.04319C16.3667 4.71895 15.6332 4.71895 15.0111 5.04319L13.1469 6.01478C11.7404 6.74786 10.2491 7.29666 8.7082 7.64801L8.02701 7.80334C7.03129 8.03038 6.29995 8.94543 6.29995 10.0283V15.5666C6.29995 20.2406 9.04669 24.4386 13.2341 26.2118L15.1674 27.0305C15.701 27.2565 16.2989 27.2565 16.8325 27.0305L18.7658 26.2118C22.9532 24.4386 25.7 20.2406 25.7 15.5666V10.0283C25.7 8.94543 24.9686 8.03038 23.9729 7.80334L23.2917 7.64801C21.7508 7.29666 20.2595 6.74786 18.853 6.01478L16.9888 5.04319ZM14.2716 3.62433C15.3571 3.05857 16.6428 3.05857 17.7283 3.62433L19.5925 4.59592C20.8782 5.26602 22.2405 5.76726 23.6474 6.08805L24.3286 6.24338C26.0781 6.6423 27.2999 8.22566 27.2999 10.0283V15.5666C27.2999 20.8645 24.1858 25.6542 19.3898 27.6852L17.4564 28.5039C16.524 28.8987 15.4759 28.8987 14.5435 28.5039L12.6101 27.6852C7.81407 25.6542 4.69995 20.8645 4.69995 15.5666V10.0283C4.69995 8.22566 5.9218 6.6423 7.67131 6.24338L8.3525 6.08805C9.75938 5.76726 11.1217 5.26602 12.4074 4.59592L14.2716 3.62433ZM13.1916 12.2876C13.508 11.9792 14.0145 11.9857 14.3229 12.3021L16 14.023L17.677 12.3021C17.9854 11.9857 18.4919 11.9792 18.8083 12.2876C19.1247 12.5959 19.1312 13.1024 18.8229 13.4188L17.117 15.1692L18.8229 16.9195C19.1312 17.236 19.1247 17.7425 18.8083 18.0508C18.4919 18.3592 17.9854 18.3527 17.677 18.0363L16 16.3154L14.3229 18.0363C14.0145 18.3527 13.508 18.3592 13.1916 18.0508C12.8752 17.7425 12.8687 17.236 13.177 16.9195L14.8829 15.1692L13.177 13.4188C12.8687 13.1024 12.8752 12.5959 13.1916 12.2876Z"
      fill={props.color}
    />
  </Svg>
)