import Input from "../Input/Input";
import EntrancePage from "../EntrancePage/EntrancePage";

export default function Registration({name, onSignUp, setIsError}){
  return(
    <EntrancePage name={name} setIsError={setIsError}>
      <Input
        name={'username'}
        placeholder={'Введите ваше имя'}
        type='text'
      />
      <Input
        name={'email'}
        placeholder={'E-Mail'}
        type='email'
      />
      <Input
        name={'password'}
        placeholder={'Пароль'}
        type={'password'}
      />
    </EntrancePage>
  )
}
