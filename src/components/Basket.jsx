import React from "react";
import styled from "styled-components";
import close from "../assets/svg/close-white.svg";

const BasketElement = styled.div`
  width: 316px;
  height: 100%;
  padding: 35px 0 50px;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  right: 0;
  color: var(--main-white);
  background: var(--main-purple);
  box-shadow: -4px 4px 10px var(--main-shadow-black);
  z-index: 10;
  transform: translateX(100%);
  transition: transform 0.3s;
`;
const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 auto 36px 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;
  &:hover{
    transform: rotate(90deg);
  }
`;
const Navigation = styled.nav`
  height: 100%;
  padding: 0 35px;
  display: flex;
  flex-flow: column;
`;
const ClearBasket = styled.div`
  text-align: center;
`;

function Basket (props) {
  return(
    <BasketElement>
      <CloseButton>
        <img src={close} alt="Close" />
      </CloseButton>
      <Navigation>
        {
          props.basket
          ? ""
          : <ClearBasket>Cart  is  empty</ClearBasket>
        }
      </Navigation>
    </BasketElement>
  );
}

export default Basket;