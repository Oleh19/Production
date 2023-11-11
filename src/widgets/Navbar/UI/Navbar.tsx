import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/UI/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/UI/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
          Home
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
