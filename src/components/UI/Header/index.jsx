import React from "react";
import styled from "styled-components";
import burger from "../../../assets/svg/burger.svg";
import basket from "../../../assets/svg/basket.svg";
import SweetBakery from "../../../assets/svg/SweetBakery.svg";
import Menu from "../../Menu";
import Basket from "../../Basket";

const HeaderElement = styled.header`
  width: 100%;
  height: 101px;
  margin: 0 0 105px;
  background: var(--main-purple);
`;
const Container = styled.div`
  height: 100%;
  padding: 0 45px 0 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuButton = styled.button`
  
`;
const BasketButton = styled.button`
  width: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 55px;
`;
const BasketCount = styled.span`
  color: var(--main-white);
  font-size: 18px;
  font-weight: 700;
`;

function Header () {
  return(
    <HeaderElement>
      <Container>
        <MenuButton>
          <img src={burger} alt="Menu" />
        </MenuButton>
        <Menu/>
        <Logo src={SweetBakery} alt="Sweet Bakery" />
        <BasketButton>
          <img src={basket} alt="Basket" />
          <BasketCount>12</BasketCount>
        </BasketButton>
        <Basket/>
      </Container>
    </HeaderElement>
  );
}

export default Header;