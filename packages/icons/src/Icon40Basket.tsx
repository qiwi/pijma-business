import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Basket = (props: SvgProps) => (
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
      d="M16.6744 6.09454C17.1745 6.32895 17.3899 6.92436 17.1555 7.42443L14.0732 14H25.9268L22.8445 7.42443C22.6101 6.92436 22.8255 6.32895 23.3256 6.09454C23.8256 5.86013 24.4211 6.07549 24.6555 6.57557L28.1357 14H35C35.5523 14 36 14.4477 36 15C36 15.5523 35.5523 16 35 16H33.4956C33.6696 16.5127 33.7135 17.078 33.5969 17.6378L31.0065 30.0717C30.5376 32.3227 28.6406 34 26.3669 34H13.6331C11.3594 34 9.46243 32.3227 8.99346 30.0717L6.40307 17.6378C6.28646 17.078 6.3304 16.5127 6.50437 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H11.8643L15.3445 6.57557C15.5789 6.07549 16.1744 5.86013 16.6744 6.09454ZM12.4776 16H9.21241C8.72603 16 8.21361 16.5223 8.36104 17.2299L10.9514 29.6638C11.245 31.073 12.3916 32 13.6331 32H26.3669C27.6084 32 28.755 31.073 29.0486 29.6638L31.639 17.2299C31.7864 16.5223 31.274 16 30.7876 16H27.5224C27.5079 16.0003 27.4934 16.0003 27.4789 16H12.5211C12.5066 16.0003 12.4921 16.0003 12.4776 16ZM13.2831 20.012C13.8288 19.9267 14.3403 20.3 14.4255 20.8456L15.363 26.8456C15.4483 27.3913 15.075 27.9028 14.5294 27.988C13.9837 28.0733 13.4722 27.7 13.387 27.1544L12.4495 21.1544C12.3642 20.6087 12.7375 20.0972 13.2831 20.012ZM26.7169 20.012C27.2625 20.0972 27.6358 20.6087 27.5505 21.1544L26.613 27.1544C26.5278 27.7 26.0163 28.0733 25.4706 27.988C24.925 27.9028 24.5517 27.3913 24.637 26.8456L25.5745 20.8456C25.6597 20.3 26.1712 19.9267 26.7169 20.012ZM20 20C20.5523 20 21 20.4477 21 21V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V21C19 20.4477 19.4477 20 20 20Z"
      fill={props.color}
    />
  </Svg>
)