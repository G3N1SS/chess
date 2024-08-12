import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from 'prop-types';
import GameSection from "../GameSection/GameSection";


export default function MainPage({loggedIn}){
  PropTypes
  return(
    <>
      <Header loggedIn={loggedIn}/>
      <GameSection/>
      <Footer/>
    </>
  )
}

MainPage.propTypes = {
  loggedIn: PropTypes.bool
}