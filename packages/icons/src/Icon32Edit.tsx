import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32Edit = (props: SvgProps) => (
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
      d="M7.42852 3.79995C5.92645 3.79995 4.79995 4.92786 4.79995 6.21038V22.2625C4.79995 23.545 5.92645 24.6729 7.42852 24.6729H10.7365C12.1277 24.6729 13.447 25.3235 14.2409 26.4386L15.2253 27.8212C15.5849 28.3262 16.415 28.3262 16.7746 27.8212L17.759 26.4386C18.5529 25.3235 19.8722 24.6729 21.2634 24.6729H24.5714C26.0735 24.6729 27.2 23.545 27.2 22.2625V6.21038C27.2 4.92786 26.0735 3.79995 24.5714 3.79995H7.42852ZM3.19995 6.21038C3.19995 3.94675 5.1435 2.19995 7.42852 2.19995H24.5714C26.8564 2.19995 28.8 3.94675 28.8 6.21038V22.2625C28.8 24.5261 26.8564 26.2729 24.5714 26.2729H21.2634C20.3619 26.2729 19.5403 26.6953 19.0624 27.3665L18.078 28.7491C17.0805 30.1502 14.9194 30.1502 13.9219 28.7491L12.9375 27.3665C12.4596 26.6953 11.638 26.2729 10.7365 26.2729H7.42852C5.1435 26.2729 3.19995 24.5261 3.19995 22.2625V6.21038ZM17.5852 8.17434C18.5491 7.18156 20.1778 7.14773 21.1867 8.09237L21.7734 8.64176C22.7453 9.55184 22.7858 11.041 21.8568 11.9978L12.9103 21.2128C12.7597 21.368 12.5526 21.4556 12.3363 21.4556H9.32254C8.88071 21.4556 8.52254 21.0974 8.52254 20.6556L8.52254 17.8335C8.52254 17.6254 8.60361 17.4255 8.74855 17.2762L17.5852 8.17434ZM20.0931 9.26029C19.7177 8.90878 19.0862 8.92531 18.7332 9.28886L10.1225 18.158L10.1225 19.8556L11.998 19.8556L20.7089 10.8833C21.011 10.5721 21.002 10.1114 20.6798 9.80967L20.0931 9.26029ZM16.0571 20.6573C16.0571 20.2155 16.4153 19.8573 16.8571 19.8573H22.8571C23.2989 19.8573 23.6571 20.2155 23.6571 20.6573C23.6571 21.0991 23.2989 21.4573 22.8571 21.4573H16.8571C16.4153 21.4573 16.0571 21.0991 16.0571 20.6573Z"
      fill={props.color}
    />
  </Svg>
)