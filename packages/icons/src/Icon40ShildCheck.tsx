import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40ShildCheck = (props: SvgProps) => (
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
      d="M21.2164 6.30215C20.4508 5.89928 19.5492 5.89928 18.7836 6.30215L16.4756 7.51663C14.7331 8.43351 12.8855 9.12 10.9763 9.55954L10.1329 9.75369C8.90946 10.0353 8 11.1748 8 12.5354V19.4582C8 25.3063 11.4038 30.5521 16.5824 32.7661L18.9762 33.7895C19.6326 34.0702 20.3674 34.0702 21.0238 33.7895L23.4176 32.7661C28.5962 30.5521 32 25.3063 32 19.4582V12.5354C32 11.1748 31.0905 10.0353 29.8671 9.75369L29.0237 9.55954C27.1145 9.12 25.2669 8.43351 23.5244 7.51663L21.2164 6.30215ZM17.8523 4.53223C19.2009 3.82259 20.7991 3.82259 22.1477 4.53223L24.4558 5.74671C26.0466 6.58381 27.7321 7.20986 29.4724 7.61052L30.3158 7.80467C32.4912 8.30548 34 10.289 34 12.5354V19.4582C34 26.0751 30.1475 32.0639 24.2038 34.6051L21.8101 35.6285C20.6515 36.1238 19.3485 36.1238 18.1899 35.6285L15.7962 34.6051C9.85248 32.0639 6 26.0751 6 19.4582V12.5354C6 10.289 7.50877 8.30548 9.6842 7.80467L10.5276 7.61052C12.2679 7.20986 13.9534 6.58381 15.5442 5.74671L17.8523 4.53223ZM24.4088 17.28C24.8062 17.6636 24.8173 18.2967 24.4338 18.694L20.7946 22.4641C19.6761 23.6227 17.8477 23.6227 16.7292 22.4641L15.5662 21.2593C15.1827 20.8619 15.1938 20.2288 15.5912 19.8453C15.9886 19.4617 16.6216 19.4729 17.0052 19.8702L18.1682 21.075C18.5003 21.4191 19.0235 21.4191 19.3556 21.075L22.9948 17.305C23.3784 16.9076 24.0114 16.8965 24.4088 17.28Z"
      fill={props.color}
    />
  </Svg>
)
