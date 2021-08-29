import React, { useState } from "react";
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';


import { Wrapper, Container, Search, LogoImg, CarouselTitle, Carousel } from "./styles";
import { Card, Restaurant } from "../../components";

import Logo from '../../assets/logo.png'
import FakeRestaurant from '../../assets/restaurante.png';


const Home = () => {

    const [inputValue, setInputValue] = useState('')

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight:true,
      };

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
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>
                        Perto de Você
                    </CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                        <Card photo={FakeRestaurant} title="Nome do Restaurante"/>
                    </Carousel>
                </Search>
                <Restaurant/>
                <Restaurant/>
                <Restaurant/>
                <Restaurant/>

            </Container>
        </Wrapper>

    )
}

export default Home;