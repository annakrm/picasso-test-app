import { FC } from 'react';
import { AutoSizer, InfiniteLoader, List, ListRowProps, WindowScroller } from 'react-virtualized';
import { debounce } from 'lodash';

import { usePostsListQuery } from '~/shared/api';
import { Spinner } from '~/shared/ui/Spinner';
import { useTypedDispatch, useTypedSelector } from '~/shared/lib/hooks';

import { POST_ROW_HEIGHT } from '../constants';

import { increasePage } from '../model';

import * as S from './styled';
import { PostsListItem } from './PostsListItem';

export const Posts: FC = () => {
  const dispatch = useTypedDispatch();

  const page = useTypedSelector((state: RootState) => state.posts.page);

  const { data: posts, isLoading, isFetching, isError } = usePostsListQuery(page);

  const handleNewPageLoad = debounce(() => {
    if (page < 5) {
      dispatch(increasePage()); // Перестает выполнять запросы если загрузили максимальное кол-во с сервера 100 постов
    }
  }, 500);

  const loadMoreRows = isFetching ? () => null : handleNewPageLoad;

  const rowRenderer = ({ key, index, style }: ListRowProps) => {
    return (
      <div style={style} key={key}>
        <PostsListItem data={posts[index]} />
      </div>
    );
  };

  const isRowLoaded = ({ index }: { index: number }) => {
    return !!posts[index];
  };

  if (isError) {
    return (
      <span>
        В процессе загрузки списка постов произшла ошибка. Попробуйте перезагрузить страницу
      </span>
    );
  }

  const hasNoPosts = !posts || posts?.length === 0;

  return (
    <S.Wrapper>
      <AutoSizer disableHeight>
        {({ width }) => (
          <WindowScroller>
            {({ height, isScrolling, onChildScroll, scrollTop }) => (
              <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                rowCount={1000}
                threshold={1}
              >
                {({ onRowsRendered, registerChild }) => (
                  <List
                    autoHeight
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    rowCount={posts?.length || 0}
                    rowHeight={POST_ROW_HEIGHT}
                    rowRenderer={rowRenderer}
                    scrollTop={scrollTop}
                    width={width}
                  />
                )}
              </InfiniteLoader>
            )}
          </WindowScroller>
        )}
      </AutoSizer>

      {(isLoading || isFetching) && <Spinner />}
      {hasNoPosts && <span>Список постов пуст</span>}
    </S.Wrapper>
  );
};
