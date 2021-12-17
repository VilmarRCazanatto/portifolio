import styled from 'styled-components'

export const DrawerButtonSvg = styled.svg`
    position: absolute;
    right: 0;
    cursor: pointer;
    width: var(--drawerBtn_width);
    margin: calc(var(--header_width)/2 - var(--drawerBtn_width)/2);

    line {
        stroke: white;
        stroke-width: 10;
        stroke-linecap: round;
    }
`