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
const EuiIconAnomalyChart = ({
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
    <path d="M14.5 14H2V1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1Z" />
    <path
      fillRule="evenodd"
      d="M8.42 5a.5.5 0 0 1 .505.43L9.864 12h.873l.957-.87a.5.5 0 0 1 .672 0l1.1 1a.5.5 0 0 1-.672.74l-.764-.694-.764.694a.5.5 0 0 1-.336.13h-1.5a.5.5 0 0 1-.495-.43l-.429-3-.312 2.982a.5.5 0 0 1-.834.318l-.689-.626-.404.552a.5.5 0 0 1-.404.204h-.53a.5.5 0 0 1-.403-.204l-.405-.552-.689.626a.5.5 0 1 1-.672-.74l1.1-1a.5.5 0 0 1 .74.074l.583.796h.023l.583-.796a.5.5 0 0 1 .74-.074l.37.336.63-6.018A.5.5 0 0 1 8.42 5Zm.08-3.01a.5.5 0 1 0 0 1.002.5.5 0 0 0 0-1.002ZM8.5 4A1.503 1.503 0 0 1 7 2.493a1.5 1.5 0 0 1 .44-1.066c.566-.57 1.554-.57 2.121 0 .283.285.439.663.439 1.066A1.502 1.502 0 0 1 8.5 4Z"
      clipRule="evenodd"
    />
  </svg>
);
export const icon = EuiIconAnomalyChart;
