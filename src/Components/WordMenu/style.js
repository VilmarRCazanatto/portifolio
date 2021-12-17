import styled from 'styled-components'

export const WordMenuContainer = styled.div`
    position: absolute;
    top: calc(var(--header_width) + 1vh);
    height: var(--header_width);
    width: 35vh;
    right: 0;
`

export const Submenu = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    right: calc(var(--header_width) - 100%);
    padding-top: 1.9vh;
    transform-origin: calc(var(--header_width) /2);
    transform: rotate(90deg);
`

export const WordMenuItemContainer = styled.div`
    display: inline-block;
    margin: 0 2.3vh;
    font-size: 3.8vh;
    color: #eee;

    span { cursor: pointer }
`
