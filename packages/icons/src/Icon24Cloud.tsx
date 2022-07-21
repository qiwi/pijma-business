import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Cloud = (props: SvgProps) => (
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
      d="M7.1999 10.0898C7.1999 10.0902 7.1999 10.0906 7.1999 10.0909L7.20007 10.1336C7.20129 10.4311 6.98424 10.6846 6.69005 10.7292C4.96927 10.9902 3.5999 12.5757 3.5999 14.5455C3.5999 16.708 5.24445 18.4 7.1999 18.4L7.20498 18.4L7.206 18.4L17.3999 18.4C19.024 18.4 20.3999 16.9929 20.3999 15.1818C20.3999 13.3707 19.024 11.9637 17.3999 11.9637C16.2607 11.9637 15.2512 12.6486 14.7421 13.688C14.5963 13.9856 14.2369 14.1087 13.9393 13.9629C13.6417 13.8172 13.5186 13.4577 13.6644 13.1602C14.0583 12.3559 14.6847 11.689 15.4551 11.2646C15.5494 10.8912 15.5999 10.4978 15.5999 10.0909C15.5999 7.57692 13.6867 5.60002 11.3999 5.60002C9.11342 5.60002 7.20047 7.57633 7.1999 10.0898ZM16.7566 10.8151C16.7852 10.5777 16.7999 10.336 16.7999 10.0909C16.7999 6.98168 14.415 4.40002 11.3999 4.40002C8.52996 4.40002 6.23102 6.73905 6.01629 9.6457C3.91766 10.205 2.3999 12.2066 2.3999 14.5455C2.3999 17.3033 4.51616 19.6 7.1999 19.6L17.3999 19.6C19.7523 19.6 21.5999 17.5882 21.5999 15.1818C21.5999 12.7755 19.7523 10.7637 17.3999 10.7637C17.1808 10.7637 16.966 10.7812 16.7566 10.8151Z"
      fill={props.color}
    />
  </Svg>
)