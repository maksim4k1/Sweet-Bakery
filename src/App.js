import './styles/App.scss';
import Header from './components/UI/Header';
import AppRouters from './components/AppRouters';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeMenuAction, closeBasketAction } from './redux/actions';
import Footer from './components/UI/Footer';

function App({location, closeMenu, closeBasket}) {
  useEffect(() => {
    closeMenu();
    closeBasket();
  }, [location, closeMenu, closeBasket]);

  return (
    <div className="App">
      <Header/>
      <AppRouters/>
      {
        location.pathname !== "/admin"
        ? <Footer/>
        : ""
      }
    </div>
  );
}

const mapDispatchToProps = {
  closeMenu: closeMenuAction,
  closeBasket: closeBasketAction,
}

export default connect(null, mapDispatchToProps)(withRouter(App));