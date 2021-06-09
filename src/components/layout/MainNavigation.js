import {NavLink} from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
  return(
    <header className={classes.header}>
    <div className={classes.logo}>
      <h1>Great Quotes</h1>
    </div>
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/quotes">
            All Quotes
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/new-quote">
            Add new quotes
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default MainNavigation;