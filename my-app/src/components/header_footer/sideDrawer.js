import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const sideDrawer = (props) => {

    const scrollToElement = (element)=>{
        scroller.scrollTo(element, {
          duration: 1000, 
          smooth: true,
          offset: -100
        });
        props.onClose(false)
    };

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=>props.onClose(false)}
        >
           <List  component="nav">

             <ListItem button onClick={()=> scrollToElement('featured')}>
                Event Starts In
             </ListItem> 
             <ListItem button onClick={()=>scrollToElement('venue')}>
               Venue Info   
             </ListItem>
             <ListItem button onClick={()=> scrollToElement('highlight')}>
                Highlights
             </ListItem>
             <ListItem button onClick={()=>scrollToElement('pricing')}>
                Pricing
             </ListItem>

             <ListItem button onClick={()=>scrollToElement('location')}>
               Location
             </ListItem>

           </List>
        </Drawer>
    );
};

export default sideDrawer;