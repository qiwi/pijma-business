import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
export const Icon16Loader = (props: SvgProps) => (
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
      d="M8.50032 2.04163C8.50032 1.76548 8.27647 1.54163 8.00032 1.54163C7.72418 1.54163 7.50032 1.76548 7.50032 2.04163V5.32646C7.66317 5.29661 7.83104 5.28101 8.00257 5.28101C8.17253 5.28101 8.33889 5.29632 8.50032 5.32564V2.04163ZM9.54346 5.7497C9.82253 5.9375 10.0651 6.17489 10.2582 6.44914L12.5671 4.14032C12.7623 3.94506 12.7623 3.62848 12.5671 3.43321C12.3718 3.23795 12.0552 3.23795 11.8599 3.43321L9.54346 5.7497ZM10.7053 7.49996C10.7374 7.66698 10.7542 7.83939 10.7542 8.0157C10.7542 8.18095 10.7394 8.34278 10.7112 8.49996H13.9587C14.2348 8.49996 14.4587 8.2761 14.4587 7.99996C14.4587 7.72382 14.2348 7.49996 13.9587 7.49996H10.7053ZM10.2712 9.56372C10.0802 9.83962 9.83963 10.0789 9.56221 10.269L11.8599 12.5667C12.0552 12.762 12.3718 12.762 12.5671 12.5667C12.7623 12.3714 12.7623 12.0549 12.5671 11.8596L10.2712 9.56372ZM8.50032 10.7058C8.33889 10.7351 8.17253 10.7504 8.00257 10.7504C7.83104 10.7504 7.66317 10.7348 7.50032 10.7049V13.9583C7.50032 14.2344 7.72418 14.4583 8.00032 14.4583C8.27647 14.4583 8.50032 14.2344 8.50032 13.9583V10.7058ZM6.44024 10.2671C6.16306 10.0768 5.92275 9.83718 5.73211 9.56105L3.43359 11.8596C3.23833 12.0548 3.23833 12.3714 3.43359 12.5667C3.62885 12.7619 3.94544 12.7619 4.1407 12.5667L6.44024 10.2671ZM5.29398 8.49996C5.26572 8.34278 5.25098 8.18095 5.25098 8.0157C5.25098 7.83939 5.26776 7.66698 5.29984 7.49996H2.04199C1.76585 7.49996 1.54199 7.72382 1.54199 7.99996C1.54199 8.2761 1.76585 8.49996 2.04199 8.49996H5.29398ZM5.74504 6.45179C5.9379 6.17731 6.18015 5.93964 6.45897 5.75152L4.1407 3.43324C3.94544 3.23798 3.62885 3.23798 3.43359 3.43324C3.23833 3.6285 3.23833 3.94508 3.43359 4.14035L5.74504 6.45179Z"
      fill={props.color}
    />
  </Svg>
)
