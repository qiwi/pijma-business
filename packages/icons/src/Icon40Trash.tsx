import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon40Trash = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    focusable={false}
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5192 6C16.096 6 14.9423 7.15373 14.9423 8.57692V9.36538H26.0577V8.57692C26.0577 7.15373 24.904 6 23.4808 6H17.5192ZM28.0577 9.36538V8.57692C28.0577 6.04916 26.0085 4 23.4808 4H17.5192C14.9915 4 12.9423 6.04916 12.9423 8.57692V9.36538H5C4.44772 9.36538 4 9.8131 4 10.3654C4 10.9177 4.44772 11.3654 5 11.3654H8.17308V32.4038C8.17308 34.613 9.96394 36.4038 12.1731 36.4038H28.8269C31.0361 36.4038 32.8269 34.613 32.8269 32.4038V11.3654H36C36.5523 11.3654 37 10.9177 37 10.3654C37 9.8131 36.5523 9.36538 36 9.36538H28.0577ZM10.1731 11.3654V32.4038C10.1731 33.5084 11.0685 34.4038 12.1731 34.4038H28.8269C29.9315 34.4038 30.8269 33.5084 30.8269 32.4038V11.3654H10.1731ZM17.5192 17.1154C18.0715 17.1154 18.5192 17.5631 18.5192 18.1154V27.6538C18.5192 28.2061 18.0715 28.6538 17.5192 28.6538C16.9669 28.6538 16.5192 28.2061 16.5192 27.6538V18.1154C16.5192 17.5631 16.9669 17.1154 17.5192 17.1154ZM24.0769 17.1154C24.6292 17.1154 25.0769 17.5631 25.0769 18.1154V27.6538C25.0769 28.2061 24.6292 28.6538 24.0769 28.6538C23.5246 28.6538 23.0769 28.2061 23.0769 27.6538V18.1154C23.0769 17.5631 23.5246 17.1154 24.0769 17.1154Z"
      fill={props.color}
    />
  </Svg>
)