import { FC } from 'react';

import { Posts } from '~/features/posts';

import * as S from './styled';

export const Main: FC = () => {
  return (
    <S.Wrapper>
      <h1>Posts</h1>
      <Posts />
    </S.Wrapper>
  );
};
