import React from 'react';
import './App.css';

export default function App() {

  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      consent: false
    }
  )

  React.useEffect( 
    () => console.log(formData), 
    [formData])

  function updateForm(event) {
    setFormData(prevFormData => ({...prevFormData, 
      [event.target.name] : event.target.value
    }))
    }

  function validateFormData() {

  }

  

  return (
    <form className='flex flex-col justify-center gap-4'>
      <div className='flex gap-4'>
        <label className='flex flex-col gap-4'>
          First Name:
          <input className='border-0' name="firstName" value={formData.firstName} onChange={updateForm}/>
        </label>

        <label className='flex flex-col gap-4'>
          Last Name:
          <input className='border-0' name="lastName" value={formData.lastName} onChange={updateForm}/>
        </label>
      </div>
      <div className='flex flex-col gap-4 justify-between'> 
          <label className='flex flex-col gap-4'> 
            Email:
            <input name="email" value={formData.email}/>
          </label>
      </div>
      <div>
        <label>
          Query:
          <input type='radio'/>
        </label>
      </div>
      <div className='flex gap-4 flex-col justify-between'>
          <label className='flex flex-col gap-4'>
            Message:
            <textarea name="message" value={formData.message}></textarea>
          </label>
      </div>
      <div className='flex gap-4'>
        <input type='checkbox' id='consent' name='consent' value={formData.consent}/> <span>I consent to being contacted by the team</span>
      </div>
    </form>)
}

