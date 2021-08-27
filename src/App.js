import './styles/App.scss';
import Header from './components/UI/Header';
import AppRouters from './components/AppRouters';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeMenuAction, closeBasketAction } from './redux/actions/appActions';
import Footer from './components/UI/Footer';
import styled from 'styled-components';
import { container } from "./styles/mixins";

const AppBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;
const Content = styled.div`
  ${container}
  margin-bottom: 150px;
`;

function App({location, closeMenu, closeBasket, bodyOverflowHidden}) {
  useEffect(() => {
    closeMenu();
    closeBasket();
  }, [location, closeMenu, closeBasket]);

  return (
    <AppBody style={bodyOverflowHidden ? {height: "100vh", overflow: "hidden"} : {overflow: "auto"}}>
      <Header/>
      <Content>
        <AppRouters/>
      </Content>
      {
        location.pathname !== "/admin"
        ? <Footer/>
        : ""
      }
    </AppBody>
  );
}

const mapStateToProps = state => ({
  bodyOverflowHidden: state.app.modals.bodyOverflowHidden,
});

const mapDispatchToProps = {
  closeMenu: closeMenuAction,
  closeBasket: closeBasketAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));