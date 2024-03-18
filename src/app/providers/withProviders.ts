import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withStrictMode } from './withStrictMode';

export const withProviders = compose(withRouter, withStrictMode);
