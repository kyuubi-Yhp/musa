import { HiLockClosed } from "react-icons/hi";
import './SignIn.css'
import { useState } from "react";

export const SignIn = () => {

const [isLocked, setIsLocked] = useState(true)
  const handelisLockToddle = () => {
    setIsLocked(prev => !prev)
  }

  return (
    <div className="signin__box">
      <h2>войти</h2>
      <input className='sigin__input' placeholder='email' type="email" />
      <input className='sigin__input'  placeholder='password' type={isLocked ? 'password' : 'text'} />
      <HiLockClosed className="lock"
        onClick={handelisLockToddle}
        color={isLocked ? "gray" : "green"} />
      <button>войти</button>
    </div>
  )
}