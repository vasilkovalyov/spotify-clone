import { useState } from 'react';
import cn from 'classnames';
import { Button, Icon, IconEnum } from '@/components/ui';

import { SearchProps } from './search.type';

import './search.scss';

export default function Search({ onChange, type, ...props }: SearchProps) {
  const [value, setValue] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const modificationCn = cn({
    'search--collapsed': type === 'collapsed',
    'search--collapsed-open': type === 'collapsed' && isCollapsed,
  });

  return (
    <div className={cn('search', modificationCn)}>
      {type === 'collapsed' ? (
        <Button
          className="search__collapsed-toggler"
          icon={IconEnum.SEARCH}
          onClick={() => setIsCollapsed(!isCollapsed)}
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
