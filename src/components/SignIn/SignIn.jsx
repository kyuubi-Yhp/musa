import './SignIn.css'

export const SignIn = () => {

  
  return (
    <div className="signin__box">
      <h2>войти</h2>
      <input className='sigin__input' placeholder='email' type="email" />
      <input className='sigin__input' placeholder='password' type="password" />
      <button>войти</button>
    </div>
  )
}