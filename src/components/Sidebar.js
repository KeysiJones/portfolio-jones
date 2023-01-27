import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Início
      </a>
      <a className="menu-item" href="/salads">
        Sobre a FRG
      </a>
      <a className="menu-item" href="/pizzas">
        Contato
      </a>
      <a className="menu-item" href="/#nossos-projetos">
        Nossos Projetos
      </a>
    </Menu>
  );
};