
import { useState } from "react"
import './SignUp.css'

export const SignUp = ({ handleSignUp }) => {

  const [formData, setFormData] = useState({
    email: '',
    pass: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    if (!formData.email || !formData.pass) {
      alert("Заполните все поля")
      return
    }

    handleSignUp(formData)
  }

  return (
    <div className="signup__box">
      <h2>регистрация</h2>
      <input
        name="email"
        placeholder="email"
        type="email"
        onChange={handleChange}
      />

      <input
        name="pass"
        placeholder="password"
        type="password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        задать пароль
      </button>
    </div>
  )
}