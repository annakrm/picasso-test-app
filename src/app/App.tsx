import { FC } from 'react';

import * as S from './styled';
import { withProviders } from './providers';

const PicassoTestApp: FC = () => (
  <S.Wrapper>
    <div />
  </S.Wrapper>
);

export const App = withProviders(PicassoTestApp);
