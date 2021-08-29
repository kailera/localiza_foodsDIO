import styled  from 'styled-components';
import Slider from 'react-slick';



export const Wrapper = styled.div `
    display:flex;

    @media screen and(max-width:600px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }

`;


export const Container = styled.aside `
    width:300px;
    background-color:${(props)=> props.theme.colors.background2};
    height:100vh;
    overflow-y:auto;
    overflow-x:hidden;

    @media screen and (max-width:600px){
        width:100vw;
        height:60vh;
    }
`; 

export const LogoImg = styled.img `
    margin-bottom:16px;
    width:40px;
    height:auto;
`;

export const Search = styled.section `
    padding:16px;
    display:flex;
    flex-direction:column;
    justify-content-center;
    background-color:#fff;

    @media screen and (max-width:600px){

    }
`; 

export const CarouselTitle = styled.h1 `
    margin 16px 0px; 
    font-family:${props=>props.theme.fonts.regular};
    color:${props=>props.theme.colors.textcolor_dark};
    font-size:24px;
    font-weight:bold;
    line-height:24px;
`;

export const Carousel = styled(Slider) `
    .slick-slide{
    }
`;
