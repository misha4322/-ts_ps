import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import s from "./Root.module.css";
import trash from '../../assets/trash.svg';
import logo from '../../assets/logo.svg';

export const Root: React.FC = () => {
  return (
    <>
      <header className={s.container}>
        <nav className={s.navDiv}>
          <NavLink
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
              isActive ? s.active : isPending ? s.loading : s.btn
            }
            to={'/'}
          >
            <div className={s.qwerty}>
              <img src={logo} alt="Логотип" />
            </div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
              isActive ? s.active : isPending ? s.loading : s.btn
            }
            to={'/'}
          >
            <div className={s.qwerty}>Главная</div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
              isActive ? s.active : isPending ? s.loading : s.btn
            }
            to={'gather'}
          >
            <div className={s.qwerty}>Конфигуратор</div>
          </NavLink>
          <NavLink
            className={({ isActive, isPending }: { isActive: boolean; isPending: boolean }) =>
              isActive ? s.active : isPending ? s.loading : s.btn
            }
            to={'basket'}
          >
            <div className={s.qwerty}>
              <img src={trash} alt="Корзина" />
            </div>
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};