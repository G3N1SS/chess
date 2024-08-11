import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from 'prop-types';


export default function MainPage({loggedIn}){
  PropTypes
  return(
    <>
      <Header loggedIn={loggedIn}/>
      <Footer/>
    </>
  )
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool
}