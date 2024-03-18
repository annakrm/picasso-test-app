import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

import { Row } from '~/shared/ui/generics';
import { PostDto } from '~/shared/api';

import * as S from './styled';

type Props = {
  data: PostDto;
};

export const PostsListItem: FC<Props> = ({ data }) => {
  const { id, title, body } = data;

  const navigate = useNavigate();

  const handleViewButtonClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <S.Wrapper noPaddings>
      <Row gap={3}>
        <span>{id}</span>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>

        <Button onClick={handleViewButtonClick} variant="contained" size="small">
          Посмотреть
        </Button>
      </Row>
    </S.Wrapper>
  );
};
