import React from "react";
import styled from "styled-components";
import close from "../assets/svg/close.svg";
import { Link } from "react-router-dom";
import { gap, navigation, closeNavigationButton, navigationContent } from "../styles/mixins";
import { connect } from "react-redux";
import { closeMenuAction } from "../redux/actions"

const MenuElement = styled.div`
  ${navigation}
  padding: 29px 0 73px;
  left: 0;
  font-size: 18px;
  background: var(--main-white);
  box-shadow: 4px 4px 10px var(--main-shadow-black);
  transform: translateX(-100%);
`;
const CloseButton = styled.button`
  ${closeNavigationButton}
  margin: 0 29px 60px auto;
`;
const Content = styled.nav`
  ${navigationContent}
  padding: 0 62px;
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

function Menu ({isOpenMenu, closeMenu}) {
  return(
    <MenuElement style={isOpenMenu ? {transform: "translateX(0)"} : {}}>
      <CloseButton onClick={closeMenu}>
        <img src={close} alt="Close" />
      </CloseButton>
      <Content>
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
      </Content>
    </MenuElement>
  );
}

const mapStateToProps = state => ({
  isOpenMenu: state.app.navigation.isOpenMenu,
});

const mapDispatchToProps = {
  closeMenu: closeMenuAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);