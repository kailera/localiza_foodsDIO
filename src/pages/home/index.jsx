import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';


import { Wrapper, Container, MapContainer, Search, LogoImg, CarouselTitle, Carousel, ModalTitle, ModalDescription } from "./styles";
import { Card, Restaurant, Modal, Map, Loader, Skeleton } from "../../components";

import Logo from '../../assets/logo.png'
import FakeRestaurant from '../../assets/restaurante.png';
import { useSelector } from "react-redux";


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector((state)=> state.restaurants);


    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight:true,
      };

    function handleKeyPress(e){
        if(e.key==='Enter'){
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
    } 

    return (

        <Wrapper>
            <Container>
                <Search>
                    <LogoImg src={Logo} />
                    <TextField
                        label='Pesquisar'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>
                        Perto de Você
                    </CarouselTitle>
                    {restaurants.length > 0 ? (
                        <Carousel {...settings}>
                            {restaurants.map((restaurant) => (
                                <Card 
                                    photo={restaurant.photos?restaurant.photos[0].getUrl():FakeRestaurant}
                                    title={restaurant.name}
                                />
                            ))}
                        </Carousel>
                    ):(
                        <Loader/>
                    )}
                    
                </Search>
                {restaurants.map((restaurant)=>(
                    <Restaurant 
                        restaurant = {restaurant}
                        onClick={()=>handleOpenModal(restaurant.place_id)}
                    />
                ))}
                
            </Container>
            
            <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}>
                    {restaurantSelected? (
                        <>
                            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                            <ModalDescription>{restaurantSelected?.formatted_phone_number}</ModalDescription>
                            <ModalDescription>{restaurantSelected?.formatted_address}</ModalDescription>
                            <ModalDescription>{restaurantSelected?.opening_hours?.open_now? 'Aberto Agora!' : 'Fechado Agora :-('}</ModalDescription>
                        </>
                    ):(
                        <>
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                            <Skeleton width="10px" height="10px" />
                        </>
                    )}
                    
            </Modal> 
            
            <MapContainer>
                <Map 
                    query={query}
                    placeId={placeId}
                />
            </MapContainer>

            
        </Wrapper>

    )
}

export default Home;