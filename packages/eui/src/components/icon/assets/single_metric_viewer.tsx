/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconSingleMetricViewer = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M1.5 1a.5.5 0 0 1 .5.5V14h12.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M12.935 6.652a.6.6 0 0 0-.951-.062L9 10l-2.747-.916a.6.6 0 0 0-.485.047L3 10.69v1.81a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V9.75l-2.065-3.098Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M13.023 2.758a.6.6 0 0 0-.987-.077L8.388 7.203l-2.093-.83a.6.6 0 0 0-.552.058L3.221 8.098a.49.49 0 0 0-.138.683.5.5 0 0 0 .689.136l2.349-1.552 2.582 1.024 3.746-4.643 1.623 2.817c.136.237.44.319.678.184a.49.49 0 0 0 .184-.672l-1.91-3.317Z"
      clipRule="evenodd"
    />
  </svg>
);
export const icon = EuiIconSingleMetricViewer;
