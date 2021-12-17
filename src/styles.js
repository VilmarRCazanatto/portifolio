import styled from 'styled-components'

export const AppContainer = styled.div`
    position: absolute;
    height: 80vh;
    width: var(--app_width);
    top: 10vh;
    left: calc(50vw - var(--app_width)/2);
    overflow: hidden;
    background-color: rgb(26, 26, 26);
    box-shadow: 0 0 40px 0 rgba(255,255,255,.4);
`