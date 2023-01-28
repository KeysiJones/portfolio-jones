import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link className="menu-item" href="/#hero-section">
        Início
      </Link>
      <Link className="menu-item" href="/">
        Pinturas
      </Link>
      <Link className="menu-item" href="/">
        Efeitos Decorativos
      </Link>
      <Link className="menu-item" href="/#nossos-projetos">
        Nossos Projetos
      </Link>
      <Link className="menu-item" href="/">
        Sobre a FRG
      </Link>
    </Menu>
  );
};