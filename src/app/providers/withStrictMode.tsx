import { type FC, StrictMode } from 'react';

export const withStrictMode =
  <P,>(WrappedComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <StrictMode>
        <WrappedComponent {...props} />
      </StrictMode>
    );
