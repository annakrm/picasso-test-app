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

  const isPending = isLoading || isFetching;

  return (
    <S.Wrapper>
      <h1>Post Details</h1>

      {isPending ? (
        <Spinner />
      ) : (
        <S.Content>
          <Column gap={2}>
            {data ? (
              <>
                <Row gap={2}>
                  <span>Post Id: {data.id}</span>
                  <span>User Id: {data.userId}</span>
                </Row>

                <S.Title>{data.title}</S.Title>
                <S.Body>{data.body}</S.Body>
              </>
            ) : (
              <h2>{`Данные по посту с id ${postId} не найдены`}</h2>
            )}

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
