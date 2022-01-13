import styled from 'styled-components'

export const SocialLinkContainer = styled.div`
    position: absolute;
    width: 35vh;
    right: 0;
    bottom: 0;
`

export const SocialLinkItemContainer = styled.div`
    float: right;
    margin-bottom: 2vh;

    svg {
        width: var(--header_width);
        height: 4vh;
        cursor: pointer;
        float:right;        
    }
    svg:hover path{
        fill: white;
    }

    span {
        height: 4vh;
        line-height: 4vh;
        width: calc(35vh - var(--height_width));
        cursor: pointer;
    }
`