import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Star = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.80104 2.24741C7.30187 1.25086 8.69833 1.25087 9.19916 2.24741L10.4797 4.79533C10.5315 4.89849 10.6224 4.96528 10.7211 4.98533L13.4152 5.53281C14.4544 5.744 14.8383 7.01461 14.159 7.79421L12.2286 10.0099C12.1589 10.09 12.1237 10.201 12.1372 10.3141L12.4532 12.9566C12.5902 14.1029 11.3214 14.9577 10.3358 14.2442L8.19356 12.6935C8.07641 12.6087 7.92378 12.6087 7.80664 12.6935L5.66441 14.2442C4.67875 14.9577 3.40996 14.1029 3.54702 12.9566L3.86301 10.3141C3.87653 10.201 3.84132 10.09 3.77157 10.0099L1.84115 7.79421C1.16193 7.0146 1.54575 5.744 2.58503 5.5328L5.27913 4.98533C5.37778 4.96528 5.46868 4.8985 5.52053 4.79533L6.80104 2.24741ZM8.30565 2.69646C8.17401 2.43451 7.82619 2.43451 7.69454 2.69646L6.41404 5.24438C6.2283 5.61395 5.88591 5.88246 5.47828 5.9653L2.78418 6.51278C2.53264 6.56389 2.39471 6.90727 2.59513 7.13732L4.52555 9.35304C4.78385 9.64952 4.9025 10.0433 4.85593 10.4328L4.53995 13.0753C4.49712 13.4335 4.86123 13.5911 5.07805 13.4342L7.22028 11.8835C7.68731 11.5454 8.31289 11.5454 8.77992 11.8835L10.9221 13.4342C11.139 13.5911 11.5031 13.4335 11.4602 13.0753L11.1443 10.4328C11.0977 10.0433 11.2163 9.64952 11.4746 9.35304L13.4051 7.13732C13.6055 6.90727 13.4676 6.56389 13.216 6.51278L10.5219 5.9653C10.1143 5.88246 9.77189 5.61395 9.58616 5.24438L8.30565 2.69646Z"
      fill={props.color}
    />
  </Svg>
)
