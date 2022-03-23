import React from "react";
import HeadeCardButton from "./HeadeCardButton";

import classes from "./Header.module.css";

const Header = props => {

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeadeCardButton onClick={props.onShowCart}/>
      </header>
      <div  className={classes["main-image"]}>
        <img
       
          src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVhbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="meals"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
