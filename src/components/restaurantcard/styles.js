import styled from 'styled-components';


export const Restaurant = styled.div`
    margin:10px;
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    margin-top:5px;
    padding:16;
    background-color:${props => props.theme.colors.background1};
    border-left:5px solid transparent;
    color:#fff;
    transition:200ms ease;
    :hover{
        color:${props => props.theme.colors.textcolor_dark};
        background-color:#fff;
        border-left:5px solid ${props => props.theme.colors.success}
    }

    @media screen and (max-width:600px){
        width:90%;
        height:auto;
    }
`;

export const RestaurantInfo = styled.div`
    display:flex;
    flex-direction:column;
    
`;

export const RestaurantTitle = styled.span`
    font-family:${props => props.theme.fonts.regular};
    font-size:24px;
    font-weight:bold;
    line-height:29px;
    margin-bottom:10px;
`;

export const RestaurantAddress = styled.span`
    font-family:${props => props.theme.fonts.regular};
    font-size:16px;
    font-weight:bold;
    line-height:19px;
    margin-bottom:10px;
`;


export const RestaurantPhoto = styled.img `
    display${props=> props.imageLoaded?'block':'none'};
    width:100px;
    height:100px;
    object-fit:cover;
    border-radius:6px;
`;