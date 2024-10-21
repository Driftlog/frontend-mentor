import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

export default function Form() {

  const {register, handleSubmit, formState:{isValid}} = useForm(
    { defaultValues:
      {
      firstName: "",
      lastName: "",
      email: "",
      query: '',
      message: "",
      consent: false
    }
})

  // React.useEffect( () => { 
  //   localStorage.setItem("formData", formData)
  
  //   return ()  => {
  //     localStorage.clear()
  //   }}, [formData]
  // )

  // function updateForm(event) {
  //   setFormData(prevFormData => ({...prevFormData, 
  //     [event.target.name] : event.target.value
  //   }))
  //   }


  const submitForm = (formData) => {
    console.log(formData)
  }

  return (
    <form className='flex flex-col justify-center gap-4 font-karla w-3/5' onSubmit={handleSubmit(submitForm)}>
      <h1 className='text-xl'>Contact us</h1>
      <div className='flex gap-4 justify-around'>
        <label className='flex flex-col gap-4 text-base w-1/2'>
          First Name:
          <input className='border-0' {...register("firstName", {required: true}) } placeholder='First Name'/>
          
        </label>

        <label className='flex flex-col gap-4 text-base w-1/2'>
          Last Name:
          <input className='border-0'
            {...register("lastName", {required: true})} placeholder='Last Name'/>
        </label>
      </div>
      <div className='flex flex-col gap-4 justify-between'> 
          <label className='flex flex-col gap-4 text-base'> 
            Email:
            <input {...register('email', {required: true})}/>
          </label>
      </div>
      <div>
        <label className='flex flex-col gap-4'>
          Query Type:
          <div className='flex justify-around'>
            <label className=''><input type='radio' /> General Enquiry</label>
            <label for="" className=''><input type='radio' {...register('query')}/> Support Request</label>
          </div>
        </label>
      </div>
      <div className='flex gap-4 flex-col justify-between'>
          <label className='flex flex-col gap-4 text-base'>
            Message:
            <textarea name="message" {...register('message')}></textarea>
          </label>
      </div>
      <div className='flex gap-4 text-base'>
        <input type='checkbox' id='consent' name='consent' {...register('checkbox')}/> 
        <span>I consent to being contacted by the team</span>
      </div>
      <button type='submit'>Submit</button>
    </form>)
}

