import React from "react";
import styled from "styled-components";
import close from "../assets/svg/close.svg";
import { Link } from "react-router-dom";
import { gap } from "../styles/mixins";

const MenuElement = styled.div`
  width: 316px;
  height: 100%;
  padding: 29px 0 73px;
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 18px;
  background: var(--main-white);
  box-shadow: 4px 4px 10px var(--main-shadow-black);
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.3s;
`;
const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0 29px 60px auto;
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
  padding: 0 62px;
  display: flex;
  flex-flow: column;
`;
const Contacts = styled.div`
  margin: 0 0 76px;
  display: flex;
  flex-flow: column;
  ${gap("18px")}
`;
const ContactsPhone = styled.a`
  color: var(--main-black);
  font-weight: 700;
  &:hover{
    text-decoration: underline;
  }
`;
const Info = styled.div`
  width: 170px;
`;
const MenuLink = styled.div`
  margin: auto 0 0;
  text-align: center;
  &>a{
    color: var(--main-blue);
    font-size: 16px;
    font-weight: 700;
    &:hover{
      text-decoration: underline;
    }
  }
`;

function Menu () {
  return(
    <MenuElement>
      <CloseButton>
        <img src={close} alt="Close" />
      </CloseButton>
      <Navigation>
        <Contacts>
          <div>Contact us</div>
          <ContactsPhone href="tel:+11478344778999">+11 4783 4477 8999</ContactsPhone>
        </Contacts>
        <Info>
          Our delivery working from 09:00 to 23:00
        </Info>
        <MenuLink>
          <Link to="/admin">Go to admin page</Link>
        </MenuLink>
      </Navigation>
    </MenuElement>
  );
}

export default Menu;