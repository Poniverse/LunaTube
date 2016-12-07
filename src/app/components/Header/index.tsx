import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <nav className={s.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    );
  }
}

export { Header }
