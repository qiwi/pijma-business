import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32GraphV4 = (props: SvgProps) => (
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
      d="M21.8666 9.49995C21.8666 9.05812 22.2248 8.69995 22.6666 8.69995H28C28.4418 8.69995 28.8 9.05812 28.8 9.49995V14.7C28.8 15.1418 28.4418 15.5 28 15.5C27.5581 15.5 27.2 15.1418 27.2 14.7V11.3973L18.9389 19.4518C18.0457 20.3227 16.6209 20.3227 15.7277 19.4518L12.4886 16.2937C12.2168 16.0287 11.7831 16.0287 11.5113 16.2937L4.55843 23.0728C4.24208 23.3812 3.73559 23.3748 3.42715 23.0584C3.11871 22.7421 3.12512 22.2356 3.44147 21.9272L10.3943 15.1481C11.2876 14.2772 12.7123 14.2772 13.6056 15.1481L16.8446 18.3062C17.1165 18.5712 17.5501 18.5712 17.822 18.3062L26.0335 10.3H22.6666C22.2248 10.3 21.8666 9.94178 21.8666 9.49995Z"
      fill={props.color}
    />
  </Svg>
)