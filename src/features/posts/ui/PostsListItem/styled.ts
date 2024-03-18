import styled from 'styled-components';

import { Card } from '~/shared/ui/generics';

export const Wrapper = styled(Card)`
  display: flex;
  justify-content: center;
  gap: 12px;

  height: 42px;
  padding: 0 12px;
  margin-bottom: 8px;
`;

const TextWithEllipsis = styled.span`
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Title = styled(TextWithEllipsis)`
  width: 200px;
`;

export const Body = styled(TextWithEllipsis)`
  flex: 1;
`;
