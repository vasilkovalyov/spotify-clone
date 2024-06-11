import { useState } from 'react';
import cn from 'classnames';
import { Button, Icon, IconEnum } from '@/components/3-ui';

import { SearchProps } from './search.type';

import './search.scss';

export default function Search({ onChange, type, ...props }: SearchProps) {
  const [value, setValue] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const modificationCn = cn({
    'search--expanded': type === 'expanded',
    'search--expanded-open': type === 'expanded' && isExpanded,
  });

  return (
    <div className={cn('search', modificationCn)}>
      {type === 'expanded' ? (
        <Button
          className="search__expanded-toggler"
          icon={IconEnum.SEARCH}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      ) : (
        <div className="search__icon">
          <Icon icon={IconEnum.SEARCH} />
        </div>
      )}
      <input
        type="text"
        autoCorrect="off"
        autoCapitalize="off"
        className="search__field"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        {...props}
      />
      <Button
        icon={IconEnum.CROSS}
        className={cn('search__clear', {
          show: value !== '',
        })}
        onClick={() => setValue('')}
      />
    </div>
  );
}
