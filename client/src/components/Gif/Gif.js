import React from 'react';
import { CardsContainer, CardWrapper, Card, CardImg, CardTitle } from "./gif.styles"

const Gif = ({ images, Title }) => {
    return (
        <CardsContainer>
            <CardWrapper>
                <Card>
                    <CardTitle>{Title}</CardTitle>
                    <CardImg src={require(`../../images/${images}`)} />
                </Card>
            </CardWrapper>
        </CardsContainer>
    )


}

export default Gif;