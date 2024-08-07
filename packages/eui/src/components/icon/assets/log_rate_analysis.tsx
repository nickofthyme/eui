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
const EuiIconLogRateAnalysis = ({
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
    <path d="M9.5 13a.5.5 0 0 1-.5-.5V11H7v1.5a.5.5 0 0 1-1 0V9H4v3.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V10h2V1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-3Zm-8 2a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13Z" />
  </svg>
);
export const icon = EuiIconLogRateAnalysis;
