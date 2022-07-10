import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon32CloudCross = (props: SvgProps) => (
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
      d="M24.1161 5.41952C24.4366 5.11547 24.943 5.12884 25.247 5.44941L26.8333 7.12174L28.4195 5.44941C28.7236 5.12884 29.2299 5.11547 29.5505 5.41952C29.8711 5.72358 29.8844 6.22994 29.5804 6.5505L27.9359 8.28422L29.5804 10.0179C29.8844 10.3385 29.8711 10.8449 29.5505 11.1489C29.2299 11.453 28.7236 11.4396 28.4195 11.119L26.8333 9.4467L25.247 11.119C24.943 11.4396 24.4366 11.453 24.1161 11.1489C23.7955 10.8448 23.7821 10.3385 24.0862 10.0179L25.7306 8.28422L24.0862 6.5505C23.7821 6.22994 23.7955 5.72358 24.1161 5.41952ZM8.38277 14.7247C8.38277 14.7252 8.38277 14.7258 8.38277 14.7263L8.383 14.7801C8.38463 15.1771 8.09484 15.5152 7.70226 15.5744C5.52761 15.9023 3.79995 17.8931 3.79995 20.3631C3.79995 23.0748 5.87486 25.2 8.34658 25.2L8.35434 25.1999H21.3313C23.3811 25.1999 25.1141 23.4353 25.1141 21.1684C25.1141 18.9014 23.3811 17.1368 21.3313 17.1368C19.8937 17.1368 18.621 17.9959 17.9795 19.2977C17.7842 19.694 17.3046 19.857 16.9083 19.6617C16.5119 19.4664 16.349 18.9868 16.5443 18.5905C17.047 17.5702 17.8446 16.7238 18.8251 16.1829C18.9414 15.7192 19.0036 15.231 19.0036 14.7263C19.0036 11.5699 16.5868 9.08422 13.6932 9.08422C10.8001 9.08422 8.38359 11.5691 8.38277 14.7247ZM20.5544 15.5949C20.5869 15.3099 20.6036 15.02 20.6036 14.7263C20.6036 10.767 17.5491 7.48422 13.6932 7.48422C10.0327 7.48422 7.09433 10.4428 6.806 14.1301C4.13307 14.8511 2.19995 17.3922 2.19995 20.3631C2.19995 23.8777 4.91258 26.8 8.34658 26.8L21.3313 26.7999C24.3434 26.7999 26.7141 24.2382 26.7141 21.1684C26.7141 18.0985 24.3434 15.5368 21.3313 15.5368C21.0671 15.5368 20.8077 15.5567 20.5544 15.5949Z"
      fill={props.color}
    />
  </Svg>
)
