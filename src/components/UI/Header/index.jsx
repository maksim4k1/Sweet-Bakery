import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import burger from "../../../assets/svg/burger.svg";
import basket from "../../../assets/svg/basket.svg";
import SweetBakery from "../../../assets/svg/SweetBakery.svg";
import { openMenuAction, openBasketAction } from "../../../redux/actions"
import Menu from "../../Menu";
import Basket from "../../Basket";
import { Link } from "react-router-dom";

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

function Header ({openMenu, openBasket, count}) {
  return(
    <HeaderElement>
      <Container>
        <MenuButton onClick={openMenu}>
          <img src={burger} alt="Menu" />
        </MenuButton>
        <Menu/>
        <Link to="/">
          <Logo src={SweetBakery} alt="Sweet Bakery" />
        </Link>
        <BasketButton onClick={openBasket}>
          <img src={basket} alt="Basket" />
          <BasketCount>{count}</BasketCount>
        </BasketButton>
        <Basket/>
      </Container>
    </HeaderElement>
  );
}

const mapStateToProps = state => ({
  count: state.basket.count,
});

const mapDispatchToProps = {
  openMenu: openMenuAction,
  openBasket: openBasketAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);