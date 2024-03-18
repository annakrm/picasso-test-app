import type { FC } from 'react';

import * as S from './styled';

export const PageNotFound: FC = () => (
  <S.Wrapper>
    <h1>Страница не найдена</h1>
    <S.Text404>404</S.Text404>
  </S.Wrapper>
);
