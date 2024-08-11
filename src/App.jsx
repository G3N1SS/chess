import { useState } from 'react'
import { Route, Routes } from 'react-router'
import EntrancePage from './components/EntrancePage/EntrancePage'
import MainPage from './components/MainPage/MainPage'
import CurrentUserContext from './contexts/CurrentUserContext';
import SendContext from './contexts/SendContext';
import ErrorContext from './contexts/ErrorContext';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSend, setIsSend] = useState(false);
  const [isError, setIsError] = useState(false);
	//Привет !!!

	return (
		<>
    <CurrentUserContext.Provider value={currentUser}>
      <SendContext.Provider value={isSend}>
        <ErrorContext.Provider value={isError}>
          <Routes>
            <Route path='/' element={<MainPage loggedIn={loggedIn}/>}></Route>
            <Route path='/sign-in' element={<Login name={'sign-in'} setIsError={setIsError}/>}></Route>
            <Route path='/sign-up' element={<Registration name={'sign-up'} setIsError={setIsError}/>}></Route>
            <Route path='/chess'></Route>
          </Routes>
        </ErrorContext.Provider>
      </SendContext.Provider>
    </CurrentUserContext.Provider>
		</>
	)
}

export default App
