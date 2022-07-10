import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32GraphV3 = (props: SvgProps) => (
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
      d="M3.99995 3.19995C4.44178 3.19995 4.79995 3.55812 4.79995 3.99995V18.4827L7.97215 15.1122C8.88028 14.1473 10.4137 14.1473 11.3219 15.1122L14.7843 18.7911C15.0607 19.0848 15.5274 19.0848 15.8038 18.7911L24.7366 9.29995H20.9411C20.4993 9.29995 20.1411 8.94178 20.1411 8.49995C20.1411 8.05812 20.4993 7.69995 20.9411 7.69995H26.5882C27.03 7.69995 27.3882 8.05812 27.3882 8.49995V14.5C27.3882 14.9418 27.03 15.3 26.5882 15.3C26.1464 15.3 25.7882 14.9418 25.7882 14.5V10.5172L16.9689 19.8877C16.0608 20.8526 14.5273 20.8526 13.6192 19.8877L10.1568 16.2088C9.88036 15.9152 9.41366 15.9152 9.13727 16.2088L4.79995 20.8172V24C4.79995 25.7673 6.23264 27.2 7.99995 27.2H28C28.4418 27.2 28.7999 27.5581 28.7999 28C28.7999 28.4418 28.4418 28.7999 28 28.7999H7.99995C5.34898 28.7999 3.19995 26.6509 3.19995 24V3.99995C3.19995 3.55812 3.55812 3.19995 3.99995 3.19995Z"
      fill={props.color}
    />
  </Svg>
)
