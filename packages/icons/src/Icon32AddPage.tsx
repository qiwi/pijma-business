import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32AddPage = (props: SvgProps) => (
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
      d="M7.42852 4.79995C5.9768 4.79995 4.79995 5.9768 4.79995 7.42852V24.5714C4.79995 26.0231 5.9768 27.2 7.42852 27.2H24.5714C26.0231 27.2 27.2 26.0231 27.2 24.5714V13.3714H22.8571C20.5217 13.3714 18.6285 11.4782 18.6285 9.14281V4.79995H7.42852ZM20.2285 5.93132L26.0686 11.7714H22.8571C21.4054 11.7714 20.2285 10.5945 20.2285 9.14281V5.93132ZM3.19995 7.42852C3.19995 5.09315 5.09315 3.19995 7.42852 3.19995H19.7599L28.8 12.24V24.5714C28.8 26.9068 26.9068 28.8 24.5714 28.8H7.42852C5.09315 28.8 3.19995 26.9068 3.19995 24.5714V7.42852ZM12.5714 13.4857C13.0132 13.4857 13.3714 13.8438 13.3714 14.2857V16.9142H16C16.4418 16.9142 16.8 17.2724 16.8 17.7142C16.8 18.1561 16.4418 18.5142 16 18.5142H13.3714V21.1428C13.3714 21.5846 13.0132 21.9428 12.5714 21.9428C12.1296 21.9428 11.7714 21.5846 11.7714 21.1428V18.5142H9.14281C8.70098 18.5142 8.34281 18.1561 8.34281 17.7142C8.34281 17.2724 8.70098 16.9142 9.14281 16.9142H11.7714V14.2857C11.7714 13.8438 12.1296 13.4857 12.5714 13.4857Z"
      fill={props.color}
    />
  </Svg>
)