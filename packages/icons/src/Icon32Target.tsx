import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Target = (props: SvgProps) => (
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
      d="M16 3.19995C16.4418 3.19995 16.8 3.55812 16.8 3.99995V5.89773C21.7585 6.28499 25.7149 10.2414 26.1022 15.2L28 15.2C28.4418 15.2 28.8 15.5581 28.8 16C28.8 16.4418 28.4418 16.8 28 16.8L26.1022 16.8C25.7149 21.7585 21.7585 25.7149 16.8 26.1022V28C16.8 28.4418 16.4418 28.8 16 28.8C15.5581 28.8 15.2 28.4418 15.2 28V26.1022C10.2414 25.7149 6.28499 21.7585 5.89773 16.8H3.99995C3.55812 16.8 3.19995 16.4418 3.19995 16C3.19995 15.5581 3.55812 15.2 3.99995 15.2H5.89773C6.28499 10.2414 10.2414 6.28499 15.2 5.89773V3.99995C15.2 3.55812 15.5581 3.19995 16 3.19995ZM16 7.46662C11.2871 7.46662 7.46662 11.2871 7.46662 16C7.46662 20.7128 11.2871 24.5333 16 24.5333C20.7128 24.5333 24.5333 20.7128 24.5333 16C24.5333 11.2871 20.7128 7.46662 16 7.46662ZM16 12.8C14.2326 12.8 12.8 14.2326 12.8 16C12.8 17.7673 14.2326 19.2 16 19.2C17.7673 19.2 19.2 17.7673 19.2 16C19.2 14.2326 17.7673 12.8 16 12.8ZM11.2 16C11.2 13.349 13.349 11.2 16 11.2C18.6509 11.2 20.8 13.349 20.8 16C20.8 18.6509 18.6509 20.8 16 20.8C13.349 20.8 11.2 18.6509 11.2 16Z"
      fill={props.color}
    />
  </Svg>
)