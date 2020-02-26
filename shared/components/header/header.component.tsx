import React, { FunctionComponent } from 'react';
import './header.component.css';
import Link from 'next/link';

type Props = {};
const Header: FunctionComponent<Props> = ({}) => {
  return (
    <div className="nav">
      <div className="brand">
        <Link href="/">
          <img className="brand__logo" src="logo.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
