import React from 'react'


import { SocialLinkContainer, SocialLinkItemContainer } from './style'

class SocialLink extends React.Component {
    render() {
        
        return (
            <SocialLinkContainer>
                {this.props.accs.map((acc, i) => (
                    <SocialLinkItemContainer key={i}>
                        <span>{acc.tag}</span>
                        <acc.icon />
                    </SocialLinkItemContainer>
                ))}
            </SocialLinkContainer>
        )
    }
}

export default SocialLink