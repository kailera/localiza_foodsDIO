import React from "react";

import Lottie from 'react-lottie';

import animationData from '../../assets/loader02.json';

export default () => {
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData:animationData,
        rendererSettings:{
            preserveAspectRatio:'xMidyMid slice',
        }
    }

    return (
        <Lottie options={defaultOptions}/>
    )
}