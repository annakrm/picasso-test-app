import { FC } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@mui/material';

import { usePostDetailsQuery } from '~/shared/api';

import { Column, Row } from '~/shared/ui/generics';
import { Spinner } from '~/shared/ui/Spinner';

import * as S from './styled';

export const PostDetails: FC = () => {
  const { id: postId } = useParams();

  const { data, isLoading, isFetching } = usePostDetailsQuery(postId);

  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  if (!data) {
    return (
      <S.Wrapper>
        <h2>{`Данные по посту с id ${postId} не найдены`}</h2>
        <Button onClick={handleBackButtonClick} variant="contained" size="small">
          Назад
        </Button>
      </S.Wrapper>
    );
  }

  const { id, userId, title, body } = data;

  return (
    <S.Wrapper>
      <h1>Post Details</h1>

      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <S.Content>
          <Column gap={2}>
            <Row gap={2}>
              <span>Post Id: {id}</span>
              <span>User Id: {userId}</span>
            </Row>

            <S.Title>{title}</S.Title>
            <S.Body>{body}</S.Body>

            <S.BackButtonWrapper>
              <Button onClick={handleBackButtonClick} variant="contained" size="small">
                Назад
              </Button>
            </S.BackButtonWrapper>
          </Column>
        </S.Content>
      )}
    </S.Wrapper>
  );
};
