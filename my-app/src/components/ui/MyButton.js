import React from 'react';
import Button from '@material-ui/core/Button';
import ticketIcon from '../../resources/images/icons/ticket.png';
// make not static
const MyButton = (props) => {
    return (
        <Button
            href="https://material-ui.com/demos/buttons/"
            variant=" contained"
            size ="smal"
            style={{
                background: props.bck,
                color: props.color
            }}
        >
            <img
              src={ticketIcon}
              className="iconImage"
              alt='iconButton'
            /> 
            {props.text}
        </Button>
    );
};

export default MyButton;