import React from "react";
import { CardImage, Title } from './styles';


const  Card = ({ photo, title }) =>{
    return(
        <CardImage photo={ photo }>
            <Title>{ title }</Title>
        </CardImage>
    )
};

export default Card;