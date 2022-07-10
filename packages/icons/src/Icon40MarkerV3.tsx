import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40MarkerV3 = (props: SvgProps) => (
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
      d="M20 6C15.5107 6 11.8333 9.72831 11.8333 14.375C11.8333 16.7757 12.5886 19.3078 14.3971 21.8276C15.3018 23.0882 16.824 24.8433 18.1686 26.332C19.165 27.4351 20.835 27.4351 21.8314 26.332C23.176 24.8433 24.6982 23.0882 25.6029 21.8276C27.4114 19.3078 28.1667 16.7757 28.1667 14.375C28.1667 9.72831 24.4893 6 20 6ZM9.83333 14.375C9.83333 8.66635 14.364 4 20 4C25.636 4 30.1667 8.66635 30.1667 14.375C30.1667 17.1394 29.315 19.9885 27.3998 22.75H31C31.382 22.75 31.7306 22.9676 31.8984 23.3108L37.3984 34.5608C37.5499 34.8707 37.531 35.2369 37.3483 35.5295C37.1656 35.8222 36.845 36 36.5 36H3.5C3.15501 36 2.83439 35.8222 2.65171 35.5295C2.46903 35.2369 2.45009 34.8707 2.60162 34.5608L8.10162 23.3108C8.26939 22.9676 8.61801 22.75 9 22.75H12.6002C10.685 19.9885 9.83333 17.1394 9.83333 14.375ZM14.1427 24.75H9.62422L5.102 34H34.898L30.3758 24.75H25.8573C25.0486 25.7286 24.1361 26.7642 23.3157 27.6725C21.5251 29.6549 18.4749 29.655 16.6844 27.6725C15.8639 26.7642 14.9514 25.7286 14.1427 24.75ZM20 11.3571C18.4037 11.3571 17.0714 12.687 17.0714 14.375C17.0714 16.063 18.4037 17.3929 20 17.3929C21.5963 17.3929 22.9286 16.063 22.9286 14.375C22.9286 12.687 21.5963 11.3571 20 11.3571ZM15.0714 14.375C15.0714 11.625 17.257 9.35714 20 9.35714C22.743 9.35714 24.9286 11.625 24.9286 14.375C24.9286 17.125 22.743 19.3929 20 19.3929C17.257 19.3929 15.0714 17.125 15.0714 14.375Z"
      fill={props.color}
    />
  </Svg>
)
