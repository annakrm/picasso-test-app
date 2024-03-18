import compose from 'compose-function';

import { withStore } from './withStore';
import { withRouter } from './withRouter';
import { withStrictMode } from './withStrictMode';

export const withProviders = compose(withRouter, withStore, withStrictMode);
