import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Check = (props: SvgProps) => (
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
      d="M14.8245 2.61963C15.0346 2.79885 15.0596 3.11444 14.8804 3.32452L8.63144 10.6493C7.23413 12.2872 4.70339 12.2872 3.30608 10.6493L1.11963 8.08643C0.940403 7.87635 0.965416 7.56076 1.1755 7.38153C1.38558 7.20231 1.70117 7.22732 1.88039 7.4374L4.06685 10.0003C5.06492 11.1702 6.87259 11.1702 7.87067 10.0003L14.1196 2.6755C14.2989 2.46542 14.6144 2.4404 14.8245 2.61963Z"
      fill={props.color}
    />
  </Svg>
)
