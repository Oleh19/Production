import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../../shared/UI/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (

      <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
        {t('Мова') as ReactNode}
      </Button>
  );
};

export default LangSwitcher;
