import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24CrossInCircleV2 = (props: SvgProps) => (
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
      d="M17.4295 18.278L5.72198 6.57051C4.46123 8.0267 3.7 9.92352 3.7 12C3.7 16.584 7.41604 20.3 12 20.3C14.0765 20.3 15.9733 19.5388 17.4295 18.278ZM19.1285 18.2799C18.9961 18.4301 18.859 18.576 18.7175 18.7175C18.576 18.859 18.4301 18.9961 18.2799 19.1285C16.6057 20.6045 14.4074 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 9.59256 3.39549 7.39428 4.87155 5.72008C5.00354 5.57037 5.14018 5.42485 5.28123 5.28374C5.28165 5.28332 5.28207 5.28291 5.28249 5.28249C5.28291 5.28207 5.28332 5.28165 5.28374 5.28123C5.42485 5.14018 5.57037 5.00354 5.72008 4.87155C7.39428 3.39549 9.59256 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 14.4074 20.6045 16.6057 19.1285 18.2799ZM6.57051 5.72198C8.0267 4.46123 9.92352 3.7 12 3.7C16.584 3.7 20.3 7.41604 20.3 12C20.3 14.0765 19.5388 15.9733 18.278 17.4295L6.57051 5.72198Z"
      fill={props.color}
    />
  </Svg>
)
