// Copyright (c) 2017-2022 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0

import { type TestRunnerConfig } from 'harness/harness';

export default {
  'urlpattern-compare.tentative.any.js': {
    comment: 'URLPattern.compareComponent is not part of the URLPattern spec',
    omittedTests: true,
  },
  'urlpattern-compare.tentative.https.any.js': {
    comment: 'URLPattern.compareComponent is not part of the URLPattern spec',
    omittedTests: true,
  },
  'urlpattern-generate.tentative.any.js': {
    comment: 'URLPattern.generate is not part of the URLPattern spec',
    omittedTests: true,
  },
  'urlpattern-hasregexpgroups.any.js': {},
  'urlpattern.any.js': {},
  'urlpattern.https.any.js': {
    comment: 'Test cases are identical to urlpattern.any.js.',
    omittedTests: true,
  },
} satisfies TestRunnerConfig;
