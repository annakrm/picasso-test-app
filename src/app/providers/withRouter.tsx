import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const BASE_PATH = '/';

export const withRouter =
  <P,>(WrappedComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <BrowserRouter basename={BASE_PATH}>
        <WrappedComponent {...props} />
      </BrowserRouter>
    );
