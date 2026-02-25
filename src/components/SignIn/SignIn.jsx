import { HiLockClosed } from "react-icons/hi";
import './SignIn.css'
import { useState } from "react";

export const SignIn = ({ personEP, setPerson }) => {

  const [personInput, setPersonInput] = useState({})

  const [isLocked, setIsLocked] = useState(true)
  const handelisLockToddle = () => {
    setIsLocked(prev => !prev)
  }

  const changeInput = (e) => {
    const { name, value } = e.target
    setPersonInput(prev => ({
      ...prev,
      [name]: value
    }))
  }


  const handelSignin = () => {
    const user = personEP.find(user =>
      user.email === personInput.email &&
      user.pass === personInput.pass
    )
    if (user) {
      setPerson(personInput)
    } else {
      alert('неверный логин пароль')
    }
  }

  
  return (
    <div className="signin__box">
      <h2>войти</h2>
      <input onChange={changeInput} name='email' className='sigin__input' placeholder='email' type="email" />
      <input onChange={changeInput} name='pass' className='sigin__input' placeholder='password' type={isLocked ? 'password' : 'text'} />
      <HiLockClosed className="lock"
        onClick={handelisLockToddle}
        color={isLocked ? "gray" : "green"} />
      <button
        onClick={handelSignin}
      >войти</button>
    </div>
  )
}