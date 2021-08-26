import React from "react";
import styled from "styled-components";

const FooterElement = styled.footer`
  width: 100%;
  height: 250px;
  padding: 39px 0;
  margin: 125px 0 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: var(--main-white);
  font-size: 18px;
  background: var(--main-dark-purple);
`;
const Title = styled.h2`
  margin: 0 0 21px;
  font-size: 28px;
  text-transform: uppercase;
`;
const Phone = styled.a`
  margin: 0 0 20px;
  color: var(--main-white);
  &:hover{
    text-decoration: underline;
  }
`;
const Address = styled.address`
  margin: 0 0 39px;
  font-style: normal;
`;
const License = styled.div`
  color: var(--main-grey);
  font-size: 16px;
`;

function Footer () {
  return(
    <FooterElement>
      <Title>SWEET BAKERY inc</Title>
      <Phone href="tel:+11478344778999">+11 4783 4477 8999</Phone>
      <Address>UK Privet  Drive 4, 226 788-11</Address>
      <License>© Sweet Bakery 2021</License>
    </FooterElement>
  );
}

export default Footer;