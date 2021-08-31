import React, { useEffect, useState } from "react";
import { CardImage, Title } from './styles';
import { Skeleton } from "..";

const  Card = ({ photo, title }) =>{

    const [imageLoaded, setImageLoaded] = useState(false);
    
    useEffect(()=>{
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo])

    return(
        <>
        {imageLoaded? (
            <CardImage photo={photo}>
                <Title>{title}</Title>
            </CardImage>
        ):(
            <Skeleton width="90px" height="90px" />
        )}
        </> 
    )
};

export default Card;