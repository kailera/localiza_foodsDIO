import styled  from 'styled-components';


export const Container = styled.div `
    width:30vw;
    background-color:${(props)=> props.theme.colors.background1};

    @media screen and (max-width:600px){
        width:100vw;
    }
`; 