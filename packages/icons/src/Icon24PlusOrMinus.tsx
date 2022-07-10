import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24PlusOrMinus = (props: SvgProps) => (
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
      d="M11.9999 3.60002C7.36071 3.60002 3.5999 7.36083 3.5999 12C3.5999 14.894 5.06336 17.4461 7.29059 18.9568L15.6705 4.44233C14.5616 3.90273 13.3161 3.60002 11.9999 3.60002ZM16.7092 5.04326L8.32928 19.5577C9.43824 20.0973 10.6837 20.4 11.9999 20.4C16.6391 20.4 20.3999 16.6392 20.3999 12C20.3999 9.10606 18.9364 6.55391 16.7092 5.04326ZM2.3999 12C2.3999 6.69809 6.69797 2.40002 11.9999 2.40002C17.3018 2.40002 21.5999 6.69809 21.5999 12C21.5999 17.302 17.3018 21.6 11.9999 21.6C6.69797 21.6 2.3999 17.302 2.3999 12ZM8.76139 5.77502C9.09276 5.77502 9.36139 6.04365 9.36139 6.37502V8.16151H11.1479C11.4792 8.16151 11.7479 8.43014 11.7479 8.76151C11.7479 9.09288 11.4792 9.36151 11.1479 9.36151H9.36139V11.148C9.36139 11.4794 9.09276 11.748 8.76139 11.748C8.43002 11.748 8.16139 11.4794 8.16139 11.148V9.36151H6.3749C6.04353 9.36151 5.7749 9.09288 5.7749 8.76151C5.7749 8.43014 6.04353 8.16151 6.3749 8.16151H8.16139V6.37502C8.16139 6.04365 8.43002 5.77502 8.76139 5.77502ZM12.5249 15.5115C12.5249 15.1802 12.7935 14.9115 13.1249 14.9115H17.8979C18.2292 14.9115 18.4979 15.1802 18.4979 15.5115C18.4979 15.8429 18.2292 16.1115 17.8979 16.1115H13.1249C12.7935 16.1115 12.5249 15.8429 12.5249 15.5115Z"
      fill={props.color}
    />
  </Svg>
)
