import { Box, CircularProgress, circularProgressClasses } from '@mui/material';

import * as S from './styled';

export const Spinner = () => {
  return (
    <S.Wrapper>
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: '#d2d2d2',
          }}
          size={28}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: '#1a90ff',
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={28}
          thickness={4}
        />
      </Box>
    </S.Wrapper>
  );
};
