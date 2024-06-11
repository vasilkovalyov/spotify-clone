import { useEffect, useState } from 'react';

import { CategoryType } from '@/types/categories';
import { SpotifyService } from '@/services';

import { CategoryCard, CategoryCardSkeleton } from '@/components/category-card';

import { StatusLoadingBuilder } from '@/types/common';

import { colors } from './block-categories.model';

import './block-categories.scss';
import { Pages } from '@/constants/pages';
import { splitText } from '@/utils/common';
import { LoadMoreProvider } from '@/components';

function BlockCategories() {
  const [statusLoading, setStatusLoading] =
    useState<StatusLoadingBuilder>('loading');

  const size = 20;
  const [offset, setOffset] = useState<number>(0);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  async function loadCategories() {
    try {
      setStatusLoading('loading');
      const response = await SpotifyService.getAllCategories({
        offset,
      });
      const { items, total } = response.data.categories;
      setCategories(items);
      setTotalSize(total);
    } catch (e) {
      setStatusLoading('failed');
    } finally {
      setStatusLoading('succeeded');
    }
  }

  async function loadMore() {
    try {
      const tempOffset = offset + size;
      let limit = size;

      if (offset + size >= totalSize) {
        limit = totalSize - offset;
      }

      const response = await SpotifyService.getAllCategories({
        offset: tempOffset,
        limit: limit,
      });
      const { items } = response.data.categories;

      setOffset(tempOffset);
      setCategories([...categories, ...items]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <section className="block-categories">
      <div className="block-categories__container">
        <h2>Browse all</h2>
        <LoadMoreProvider
          callback={() => {
            loadMore();
          }}
          isWork={totalSize !== categories.length}
          deps={[categories]}
        >
          {statusLoading === 'loading' && (
            <div className="categories-grid">
              {Array.from(Array(12).keys()).map((item) => (
                <CategoryCardSkeleton key={item} />
              ))}
            </div>
          )}
          {statusLoading === 'succeeded' && (
            <div className="categories-grid">
              {categories.length &&
                categories.map(({ id, name, icons }) => (
                  <CategoryCard
                    key={id}
                    href={`${Pages.GENRE}/${id}`}
                    name={splitText(name)}
                    image={icons[0].url}
                    backgroundColor={
                      colors[Math.floor(Math.random() * colors.length)]
                    }
                  />
                ))}
            </div>
          )}
        </LoadMoreProvider>
      </div>
    </section>
  );
}

export default BlockCategories;
