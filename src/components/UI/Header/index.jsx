import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import burger from "../../../assets/svg/burger.svg";
import basket from "../../../assets/svg/basket.svg";
import SweetBakery from "../../../assets/svg/SweetBakery.svg";
import { openMenuAction, openBasketAction } from "../../../redux/actions/appActions"
import Menu from "../../Menu";
import Basket from "../../Basket";
import { Link, withRouter } from "react-router-dom";

const HeaderElement = styled.header`
  width: 100%;
  height: 101px;
  margin: 0 0 105px;
  background: var(--main-purple);
  @media screen and (max-width: 610px){
    &{
      height: 75px;
    }
  }
`;
const Container = styled.div`
  height: 100%;
  padding: 0 45px 0 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 610px){
    &{
      padding: 0 16px 0 18px;
    }
  }
`;
const MenuButton = styled.button`
  @media screen and (max-width: 610px){
    &{
      margin: 0 27px 0 0;
    }
  }
`;
const BasketButton = styled.button`
  width: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 55px;
  @media screen and (max-width: 610px){
    &{
      height: 42px;
    }
  }
`;
const BasketCount = styled.span`
  color: var(--main-white);
  font-size: 18px;
  font-weight: 700;
`;
const Text = styled.div`
  color: var(--main-white);
  font-size: 18px;
  font-weight: 700;
`;

function Header ({openMenu, openBasket, count, location}) {
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
        {
          location.pathname !== "/admin"
          ? <BasketButton onClick={openBasket}>
            <img src={basket} alt="Basket" />
            <BasketCount>{count}</BasketCount>
          </BasketButton>
          : <Text>admin  page</Text>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));