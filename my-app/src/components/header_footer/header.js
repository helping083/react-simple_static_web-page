import React, { Component } from 'react'
import AppBar from     '@material-ui/core/AppBar';
import ToolBar from    '@material-ui/core/Toolbar';
import MenuIcon from   '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './sideDrawer';



class Header extends Component {

  state={
    isDrawerOpen: false,
    headerShow:   false,
    headerScrol: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () =>{
    this.setState({headerScrol: window.scrollY})
    if(window.scrollY>0) {
      this.setState({headerShow: true})
    }else {
      this.setState({headerShow: false})
    }
  }

  toggleDrawer=(value)=>{
    this.setState({isDrawerOpen: value});
  }

  render() {
    return (
      <div>
      <AppBar
        position='fixed'
        classes={{root: this.state.headerScrol>200 ? 'fadeInDown animated':'HE'}}
        style={{
          backgroundColor: this.state.headerShow ?'#2f2f2f': 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        }}
      >
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">
              <p style={{paddingLeft:'10px'}}>musical events</p>
            </div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={()=> this.toggleDrawer(true)}
            style={{position: 'fixed', right: '15px'}}
          >
            <MenuIcon/>
          </IconButton>
          <SideDrawer
            open={this.state.isDrawerOpen}
            onClose={(value)=>this.toggleDrawer(value)}
          />
        </ToolBar>
      </AppBar>
      </div>
    )
  };
};


export default Header;