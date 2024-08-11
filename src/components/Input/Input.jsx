import { useLocation } from "react-router"
import SendContext from "../../contexts/SendContext"
import { useContext } from "react"

export default function Input({name, type, disabled, placeholder, isInputValid, value, error, pattern}){
  const isSend = useContext(SendContext)
  const { pathname } = useLocation()
  return(
    <>
    {
      pathname === '/sign-in' && 
      <>
        <p className="login__input-name">{name === 'email' ? 'E-Mail' : name === 'password' ? 'Пароль' : 'Имя'}</p>
        <input
          type={type}
          className={`login__input-name ${isInputValid === undefined || isInputValid && 'login__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value}
          name={name}
          disabled={disabled}
          pattern={pattern}
        />
        <span className="login__error error">{error}</span>
      </>
    }
    {
      pathname === '/sign-up' &&
      <>
        <p className="login__input-name">{name === 'email' ? 'E-Mail' : name === 'password' ? 'Пароль' : 'Имя'}</p>
        <input
          type={type}
          className={`login__input-name ${isInputValid === undefined || isInputValid && 'login__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value}
          name={name}
          disabled={disabled}
          pattern={pattern}
        />
        <span className="login__error error">{error}</span>
      </>
    }
    {
      pathname === '/profile' &&
      <>
        <input
          type={type}
          className={`login__input-name ${isInputValid === undefined || isInputValid && 'profile__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value}
          name={name}
          disabled={disabled}
          pattern={pattern}
        />
        <span className="login__error error">{error}</span>
      </>
    }
    </>
  )
}