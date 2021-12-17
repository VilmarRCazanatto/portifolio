import React from 'react'
import { DrawerButtonSvg } from './style' 

class DrawerButton extends React.Component {

    render() {
        return (
            <DrawerButtonSvg 
                viewBox="0 0 100 100"
                onClick={this.props.onclick}>

                <line x1="30" y1="25" x2="85" y2="25"></line>
                <line x1="45" y1="50" x2="85" y2="50"></line>
                <line x1="15" y1="75" x2="85" y2="75"></line>

            </DrawerButtonSvg>
        )
    }    
}

export default DrawerButton