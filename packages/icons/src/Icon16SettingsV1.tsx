import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16SettingsV1 = (props: SvgProps) => (
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
      d="M6.90136 1.28427C7.58344 0.905244 8.41657 0.905244 9.09865 1.28427L13.3594 3.65193C14.0614 4.04205 14.5 4.77666 14.5 5.5777L14.5 10.4223C14.5 11.2233 14.0614 11.9579 13.3594 12.3481L9.09865 14.7157C8.41657 15.0948 7.58344 15.0948 6.90136 14.7157L2.64061 12.3481C1.93856 11.958 1.5 11.2233 1.5 10.4223L1.5 5.57769C1.5 4.77666 1.93856 4.04205 2.64061 3.65192L6.90136 1.28427ZM8.61291 2.15838C8.2329 1.94721 7.7671 1.94721 7.38709 2.15838L3.12635 4.52603C2.73656 4.74263 2.5 5.14564 2.5 5.57769L2.5 10.4223C2.5 10.8544 2.73656 11.2574 3.12635 11.474L7.38709 13.8416C7.7671 14.0528 8.23291 14.0528 8.61292 13.8416L12.8737 11.474C13.2634 11.2574 13.5 10.8544 13.5 10.4223L13.5 5.5777C13.5 5.14564 13.2634 4.74263 12.8737 4.52603L8.61291 2.15838ZM8 5.93494C6.82727 5.93494 5.89111 6.86745 5.89111 8C5.89111 9.13255 6.82727 10.0651 8 10.0651C9.17273 10.0651 10.1089 9.13255 10.1089 8C10.1089 6.86745 9.17273 5.93494 8 5.93494ZM4.89111 8C4.89111 6.29926 6.29103 4.93494 8 4.93494C9.70897 4.93494 11.1089 6.29926 11.1089 8C11.1089 9.70074 9.70897 11.0651 8 11.0651C6.29103 11.0651 4.89111 9.70074 4.89111 8Z"
      fill={props.color}
    />
  </Svg>
)
