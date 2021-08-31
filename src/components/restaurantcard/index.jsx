import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Restaurant, RestaurantInfo, RestaurantTitle, RestaurantAddress, RestaurantPhoto } from "./styles";
import restaurante from '../../assets/restaurante.png';
import { Skeleton } from "..";


const RestaurantCard = ({ restaurant, onClick }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                <ReactStars 
                    count={5}
                    isHalf
                    edit={false}
                    value={restaurant.rating}
                    activeColor="#008000"
                />
                <RestaurantAddress>{restaurant.vicinity||restaurant.formatted_address}</RestaurantAddress>
            </RestaurantInfo>
            <RestaurantPhoto 
                imageLoaded={imageLoaded}
                src={restaurant.photos?restaurant.photos[0].getUrl():restaurante} 
                alt="foto do restaurante"
                onLoad={()=>setImageLoaded(true)}    
            />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    )

}

export default RestaurantCard