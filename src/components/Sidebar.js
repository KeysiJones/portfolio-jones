import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Link className="menu-item" href="/">
        Início
      </Link>
      <Link className="menu-item" href="/">
        Sobre a FRG
      </Link>
      <Link className="menu-item" href="/">
        Contato
      </Link>
      <Link className="menu-item" href="/#nossos-projetos">
        Nossos Projetos
      </Link>
    </Menu>
  );
};