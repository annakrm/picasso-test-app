import styled from 'styled-components';

import { Card } from '~/shared/ui/generics';

export const Wrapper = styled.div`
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;
`;

export const Content = styled(Card)`
  padding: 16px;
`;

export const Title = styled.span`
  width: 200px;
  text-align: left;
`;

export const Body = styled.span`
  text-align: left;
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-left: 12px;

  &:hover {
    cursor: pointer;
  }
`;
