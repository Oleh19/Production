import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/UI/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar:FC = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
      setCollapsed(prev => !prev);
  }

  return (
      <div
          className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
      >
          <button onClick={onToggle}>Toggle</button>
          <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} />
          </div>
      </div>
  );
};