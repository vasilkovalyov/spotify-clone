import { Outlet } from 'react-router-dom';
import cn from 'classnames';

import { AuthService } from '@/services';
import { useAppSelector } from '@/redux/hooks';
import { Button, IconEnum } from '@/components/ui';

import './header.scss';
import { useEffect } from 'react';

function Header() {
  const userAuthSlice = useAppSelector((state) => state.userAuthSlice);
  const settingsSlice = useAppSelector((state) => state.settingsSlice);

  useEffect(() => {
    console.log('userAuthSlice', userAuthSlice);
  }, [userAuthSlice.user]);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__page-navigation">
          <Button
            icon={IconEnum.CHEVRON_LEFT}
            className="header__page-navigation-button"
          />
          <Button
            icon={IconEnum.CHEVRON_RIGHT}
            className="header__page-navigation-button"
          />
        </div>
        <div className="header__main"></div>
        <div className="header__tools">
          {userAuthSlice.status === 'succeeded' && (
            <>
              {userAuthSlice.isAuth ? (
                <Button className="user-btn">
                  {userAuthSlice.user.display_name.charAt(0)}
                </Button>
              ) : (
                <>
                  <Button className="btn-auth btn-signup">Sign up</Button>
                  <Button
                    href={AuthService.getLoginUrl()}
                    className="btn-auth btn-login"
                  >
                    Log in
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
