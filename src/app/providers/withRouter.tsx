import type { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter =
  <P,>(WrappedComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <WrappedComponent {...props} />
      </BrowserRouter>
    );
