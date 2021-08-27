import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addPastryToBasketAction, getAllPastryAction } from "../redux/actions/actions";
import { gap } from "../styles/mixins";

const Item = styled.li`
  width: 257px;
  height: 445px;
  padding: 13px;
  display: flex;
  flex-flow: column;
  ${gap("12px")}
  background: var(--main-bg-grey);
  @media screen and (max-width: 610px){
    &{
      width: 325px;
      height: 520px;
      ${gap("15px")}
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 610px){
    &{
      height: 290px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("11px")}
  @media screen and (max-width: 610px){
    &{
      ${gap("14px")}
    }
  }
`;
const Name = styled.h3`
  font-size: 18px;
  font-weight: 500;
  white-space: no-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Ingredients = styled.p`
  margin: 0 0 1px;
  font-size: 14px;
  @media screen and (max-width: 610px){
    &{
      margin: 0 0 4px;
    }
  }
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


function SweetItem ({id, name, image, ingredients, inStock, cost, addToBasket, getAllPastry}) {
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
          inStock <= 0 ? {background: "var(--main-grey)"} : {}
        }
        disabled={inStock <= 0 ? true : false}
        onClick={() => addToBasket(id)}
      >
        {inStock <= 0 ? "Not avaliable" : "Add to cart"}
      </Button>
    </Item>
  );
}

const mapDispatchToProps = {
  addToBasket: addPastryToBasketAction,
  getAllPastry: getAllPastryAction
}

export default connect(null, mapDispatchToProps)(SweetItem);