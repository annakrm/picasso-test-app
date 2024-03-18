import styled from 'styled-components';

const spacing = (n: number) => n * 4;

type WithGap = {
  gap?: number;
};

export const Column = styled.div<WithGap>`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  gap: ${(p) => (p?.gap ? `${spacing(p.gap)}px` : 'initial')};
`;

export const Row = styled.div<WithGap>`
  display: flex;
  align-items: center;
  gap: ${(p) => (p?.gap ? `${spacing(p.gap)}px` : 'initial')};
`;

export const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => !['noPaddings'].includes(prop),
})<{ noPaddings?: boolean } & WithGap>`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${(p) => (p?.gap ? `${spacing(p.gap)}px` : 'initial')};

  padding: ${(p) => (p.noPaddings ? '' : '20px 8px')};
  overflow: hidden;

  background: #ffffff;
  border-radius: 8px;
  outline: none;
`;
