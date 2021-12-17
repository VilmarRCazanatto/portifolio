import React from 'react';
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs"

import { HeaderContainer } from './style';
import Components from '..'

const { DrawerButton, WordMenu, SocialLink } = Components

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			social_accs: [
				{
					url: 'https://github.com/VilmarRCazanatto',
					tag: '/VilmarRCazanatto',
					icon: BsGithub
				},
				{
					url: 'https://www.instagram.com/vilmarcazanatto/',
					tag: '@vilmarcazanatto',
					icon: BsInstagram
				},
				{
					url: 'https://www.facebook.com/vilmar.cazanatto.9/',
					tag: '/vilmar.cazanatto.9',
					icon: BsFacebook
				}
					
			],
		}

	}

	render() {
		return (
			<HeaderContainer expanded={this.state.expanded}>
				<DrawerButton onclick={this.toggle.bind(this)} />
				<WordMenu items={["about", "work"]} />
				<SocialLink  accs={this.state.social_accs} />
			</HeaderContainer>
		)
	}
	toggle(ev) {
		this.setState({ expanded: !this.state.expanded })
	}
}

export default Header;