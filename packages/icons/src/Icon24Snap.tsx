import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Snap = (props: SvgProps) => (
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
      d="M5.3999 3.50002C5.3999 3.16865 5.66853 2.90002 5.9999 2.90002H17.9999C18.3313 2.90002 18.5999 3.16865 18.5999 3.50002C18.5999 3.8314 18.3313 4.10002 17.9999 4.10002H16.5999V10.7243L19.0353 12.2577C19.3867 12.479 19.5999 12.8652 19.5999 13.2804C19.5999 13.9478 19.0588 14.4889 18.3914 14.4889H12.5999V20.5C12.5999 20.8314 12.3313 21.1 11.9999 21.1C11.6685 21.1 11.3999 20.8314 11.3999 20.5V14.4889H5.6084C4.94097 14.4889 4.3999 13.9478 4.3999 13.2804C4.3999 12.8652 4.6131 12.479 4.9645 12.2577L7.3999 10.7243V4.10002H5.9999C5.66853 4.10002 5.3999 3.8314 5.3999 3.50002ZM8.5999 4.10002V11.3868L5.60387 13.2732C5.6014 13.2748 5.5999 13.2775 5.5999 13.2804C5.5999 13.2827 5.60025 13.2834 5.60032 13.2835C5.60057 13.2841 5.60119 13.2852 5.60239 13.2864C5.6036 13.2876 5.6047 13.2882 5.60528 13.2885C5.6055 13.2886 5.60624 13.2889 5.6084 13.2889H18.3914C18.3937 13.2889 18.3943 13.2886 18.3945 13.2885C18.3951 13.2882 18.3962 13.2876 18.3974 13.2864C18.3984 13.2855 18.399 13.2846 18.3993 13.2839C18.3994 13.2838 18.3992 13.2841 18.3993 13.2839C18.3994 13.2838 18.3999 13.2827 18.3999 13.2804C18.3999 13.2775 18.3984 13.2748 18.3959 13.2732L15.3999 11.3868V4.10002H8.5999Z"
      fill={props.color}
    />
  </Svg>
)