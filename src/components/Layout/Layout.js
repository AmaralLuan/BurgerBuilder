import React, { Component } from 'react';
import Aux from '../../hoc/Auxilar';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSidedrawer: true
    }

    closeSideDrawer = () => {
        this.setState({showSidedrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidedrawer: !prevState.showSidedrawer}
        });
    }

  render() {
      return (
          <Aux>
              <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
              <SideDrawer
                  open={this.state.showSidedrawer}
                  closed={this.closeSideDrawer}/>

              <main className={classes.Content}>
                  {this.props.children}
              </main>
          </Aux>
      )
  }
};

export default Layout;