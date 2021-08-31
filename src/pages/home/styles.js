import styled  from 'styled-components';
import Slider from 'react-slick';



export const Wrapper = styled.div `
    display:flex;
    width:100%;
    height:auto;

    @media (max-width: 600px){
        
        flex-direction:column;
        align-items:center;
    }

`;


export const Container = styled.div `
    width:30vw;
    background-color:${(props)=> props.theme.colors.background2};
    height:100vh;
    overflow-y:auto;
    overflow-x:hidden;

    @media (max-width:600px){
        width:100%;
        height:60vh;
    }
`; 

export const MapContainer = styled.div `
    width:70vw;
    

    @media screen and (max-width:600px){
        width:100vw;
        height:30vh;
    }
`; 
export const LogoImg = styled.img `
    margin-bottom:16px;
    width:100%;
    height:auto;
`;

export const Search = styled.section `
    padding:16px;
    display:flex;
    flex-direction:column;
    justify-content-center;
    background-color:#fff;

    @media  (max-width:600px){

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
        margin-right:30px;
    }
`;

export const ModalTitle = styled.p `
    margin-bottom:10px;
    letter-spacing:0.11px;
    font-family:${props=>props.theme.fonts.regular};
    color:${props=> props.theme.colors.textcolor_dark};
    text-transform:none;
    line-height:29px;
    font-size:24px;
    font-weight:bold;
`;

export const ModalDescription = styled.p `
    margin-bottom:10px;
    letter-spacing:0.11px;
    font-family:${props=>props.theme.fonts.regular};
    color:${props=> props.theme.colors.textcolor_dark};
    text-transform:none;
    line-height:19px;
    font-size:16px;
    font-weight:normal;   
`;
