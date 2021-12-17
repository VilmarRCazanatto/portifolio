import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: absolute;
    width: ${props => props.expanded ? '35vh' : 'var(--header_width)'};
    height: 100%;
    right: 0;
    overflow: hidden;

    background-color: black;
    box-shadow: 0 0 15px 0 rgba(255,255,255,.3);
    transition: all .25s;
`