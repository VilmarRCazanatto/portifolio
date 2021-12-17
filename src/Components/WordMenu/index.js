import React from "react"

import { WordMenuContainer, Submenu, WordMenuItemContainer } from './style'

class WordMenu extends React.Component {
    render() {
        return (
            <WordMenuContainer>
                <Submenu>
                    {this.props.items.map((item, i) => (
                        <WordMenuItem key={i}>{item}</WordMenuItem>
                    ))}
                </Submenu>
            </WordMenuContainer>
        )
    }
}

class WordMenuItem extends React.Component {
    render() {
        return (
            <WordMenuItemContainer>
                <span>{this.props.children}</span>
            </WordMenuItemContainer>
        )
    }
}


export default WordMenu