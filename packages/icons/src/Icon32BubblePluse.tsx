import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32BubblePluse = (props: SvgProps) => (
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
      d="M3.19995 8.83658C3.19995 6.53164 5.1138 4.70001 7.42852 4.70001H24.5714C26.8861 4.70001 28.8 6.53164 28.8 8.83658V18.8463C28.8 21.1512 26.8861 22.9828 24.5714 22.9828H12.2773C11.5732 22.9828 10.9022 23.2552 10.4108 23.7334L7.48436 26.5814C5.92959 28.0944 3.19995 27.0668 3.19995 24.8284V8.83658ZM7.42852 6.30001C5.95615 6.30001 4.79995 7.45605 4.79995 8.83658V24.8284C4.79995 25.5626 5.76337 26.0236 6.36848 25.4347L9.29495 22.5868C10.0895 21.8135 11.1627 21.3828 12.2773 21.3828H24.5714C26.0438 21.3828 27.2 20.2268 27.2 18.8463V8.83658C27.2 7.45605 26.0438 6.30001 24.5714 6.30001H7.42852ZM12.5714 9.70486C13.0132 9.70486 13.3714 10.063 13.3714 10.5049V13.0414H16C16.4418 13.0414 16.8 13.3996 16.8 13.8414C16.8 14.2833 16.4418 14.6414 16 14.6414H13.3714V17.178C13.3714 17.6198 13.0132 17.978 12.5714 17.978C12.1296 17.978 11.7714 17.6198 11.7714 17.178V14.6414H9.14281C8.70098 14.6414 8.34281 14.2833 8.34281 13.8414C8.34281 13.3996 8.70098 13.0414 9.14281 13.0414H11.7714V10.5049C11.7714 10.063 12.1296 9.70486 12.5714 9.70486Z"
      fill={props.color}
    />
  </Svg>
)