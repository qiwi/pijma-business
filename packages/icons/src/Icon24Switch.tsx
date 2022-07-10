import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon24Switch = (props: SvgProps) => (
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
      d="M11.9999 2.40002C12.3313 2.40002 12.5999 2.66865 12.5999 3.00002V9.4286C12.5999 9.75997 12.3313 10.0286 11.9999 10.0286C11.6685 10.0286 11.3999 9.75997 11.3999 9.4286V3.00002C11.3999 2.66865 11.6685 2.40002 11.9999 2.40002ZM9.556 5.3462C9.6804 5.65333 9.53228 6.00316 9.22514 6.12756C6.51221 7.22646 4.5999 9.88773 4.5999 12.9948C4.5999 17.085 7.91337 20.4 11.9999 20.4C16.0864 20.4 19.3999 17.085 19.3999 12.9948C19.3999 9.9768 17.5958 7.37942 15.0057 6.22579C14.703 6.09097 14.567 5.73628 14.7018 5.43358C14.8366 5.13088 15.1913 4.99479 15.494 5.12961C18.5014 6.46916 20.5999 9.48622 20.5999 12.9948C20.5999 17.747 16.7499 21.6 11.9999 21.6C7.24988 21.6 3.3999 17.747 3.3999 12.9948C3.3999 9.3827 5.62392 6.29156 8.77463 5.01534C9.08176 4.89094 9.43159 5.03906 9.556 5.3462Z"
      fill={props.color}
    />
  </Svg>
)
