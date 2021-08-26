import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addPastryToBasketAction } from "../redux/actions";
import { gap } from "../styles/mixins";

const Item = styled.li`
  width: 257px;
  height: 445px;
  padding: 13px;
  display: flex;
  flex-flow: column;
  ${gap("12px")}
  background: var(--main-bg-grey);
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
  object-position: center;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("11px")}
`;
const Name = styled.h3`
  font-size: 18px;
  font-weight: 700;
  white-space: no-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Ingredients = styled.p`
  margin: 0 0 1px;
  font-size: 14px;
`;
const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const Button = styled.button`
  width: 100%;
  height: 30px;
  margin: auto 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-white);
  font-size: 14px;
  font-weight: 700;
  background: var(--main-purple);
  transition: background 0.3s;
  &:hover{
    background: var(--main-dark-purple);
  }
`;


function SweetItem ({id, name, image, ingredients, inStock, cost, addToBasket}) {
  return(
    <Item>
      <Image src={image}/>
      <Content>
        <Name>{name}</Name>
        <Ingredients>{ingredients.join(", ")}</Ingredients>
        <Price>${cost}</Price>
      </Content>
      <Button
        style={
          inStock ? {} : {background: "var(--main-grey)"}
        }
        disabled={!inStock}
        onClick={() => addToBasket(id)}
      >
        {inStock ? "Add to cart" : "Not avaliable"}
      </Button>
    </Item>
  );
}

const mapDispatchToProps = {
  addToBasket: addPastryToBasketAction
}

export default connect(null, mapDispatchToProps)(SweetItem);