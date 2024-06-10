import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '@/components/ui';
import { menu } from './navigation.model';

import './navigation.scss';

function Navigation() {
  const isCollapsed = false;

  return (
    <nav
      className={cn('navigation', {
        'navigation--collapsed': isCollapsed,
      })}
    >
      <ul className="navigation__list">
        {menu.map((item) => (
          <li key={item.href}>
            <NavLink to={item.href} className="navigation__link">
              <Icon icon={item.icon} size={24} />
              <span className="navigation__link-text">{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
