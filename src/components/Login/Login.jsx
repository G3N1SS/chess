import EntrancePage from "../EntrancePage/EntrancePage";
import Input from "../Input/Input";

export default function Login({name, onSignIn, setIsError}){
  return(
    <EntrancePage name={name} setIsError={setIsError}>
      <Input
        name='email'
        placeholder={'E-Mail'}
        type={'email'}
      />
      <Input
        name='password'
        placeholder={'Пароль'}
        type={'password'}
      />
    </EntrancePage>
  )
}