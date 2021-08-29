import  styled  from 'styled-components';

export const CardImage = styled.div `
    display:flex;
    justify-content-center;
    padding:5px;
    width:90px;
    height:90px;
    border-radius:6px;
    background-image:url(${props => props.photo});
    background-size:cover;
`;

export const Title = styled.span `
    font-family:${props=>props.theme.fonts.regular};
    font-size:16px;
    color:${props=> props.theme.colors.textcolor_dark};
`;
