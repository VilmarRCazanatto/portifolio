import React from 'react'


import { SocialLinkContainer, SocialLinkItemContainer } from './style'

class SocialLink extends React.Component {
    render() {

        return (
            <SocialLinkContainer>
                {this.props.accs.map((acc, i) => (
                    <SocialLinkItemContainer key={i}>
                        <a href={acc.url} target="_blank">
                            <span>{acc.tag}</span>
                            <acc.icon title={acc.tag} />
                        </a>
                    </SocialLinkItemContainer>
                ))}
            </SocialLinkContainer>
        )
    }
}

export default SocialLink