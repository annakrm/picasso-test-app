import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Main } from '~/pages/main';
import { PostDetails } from '~/pages/post-details';

import { PageNotFound } from '~/shared/ui/PageNotFound';

import * as S from './styled';
import { withProviders } from './providers';

const PicassoTestApp: FC = () => (
  <>
    <S.GlobalStyles />
    <S.Wrapper>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </S.Wrapper>
  </>
);

export const App = withProviders(PicassoTestApp);
