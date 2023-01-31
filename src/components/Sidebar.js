import { Navbar } from '@/pages';
import Link from 'next/link';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Sidebar = (props) => {
  return (
    <Menu {...props}>
      <Navbar />
      <Link className="menu-item" href="/#hero-section">
        Início
      </Link>
      <Link className="menu-item" href="/cimento-queimado">
        Efeito cimento queimado
      </Link>
      <Link className="menu-item" href="/quartzo-mica">
        Quartzo Mica
      </Link>
      <Link className="menu-item" href="/marmorizacao-realista">
        Marmorização Realista
      </Link>
      <Link className="menu-item" href="/">
        Pinturas
      </Link>
      <Link className="menu-item" href="/#nossos-projetos">
        Nossos Projetos
      </Link>
      <Link className="menu-item" href="/sobre">
        Sobre a FRG
      </Link>
    </Menu>
  );
};