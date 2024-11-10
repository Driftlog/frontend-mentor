import React from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message'
import './App.css';

export default function Form() {

  const {register, handleSubmit, formState: {isValid, errors, isSubmitted}} = useForm(
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
    alert('Form submitted')
  }

  return (
    <form className='flex flex-col justify-center gap-3 font-karla w-2/5 bg-white p-8' onSubmit={handleSubmit(submitForm)}>
      <h1 className='text-xl'>Contact Us</h1>
      <div className='flex gap-5 justify-around'>
        <label className='flex flex-col gap-3 text-base w-1/2 text-gray-900'>
          First Name:
          <input className='border border-grey-900 p-4 rounded-lg' {...register("firstName", {required: 'This field is required'})} 
            placeholder='First Name'/>
          <ErrorMessage 
            errors={errors}
            name='firstName' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
            />
        </label>
        <label className='flex flex-col gap-3 text-base w-1/2'>
          Last Name:
          <input className='border border-grey-900 p-4 rounded-lg'
            {...register("lastName", {required: 'This field is required'})} placeholder='Last Name'/>
          <ErrorMessage 
            errors={errors}
            name='firstName' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
            />
        </label>
      </div>
      <div className='flex flex-col gap-3 justify-between'> 
          <label className='flex flex-col gap-3 text-base'> 
            Email:
            <input className='border border-grey-900 p-4 rounded-lg' 
            {...register('email', {required: 'Please enter your email address', 
            pattern: {value: /\S+@\S+\.\S+/ , message: 'Please enter a valid email address'}})}/>
          </label>
          <ErrorMessage 
            errors={errors}
            name='email' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
          />
      </div>
      <div>
        <label className='flex flex-col gap-3'>
          Query Type:
          <div className='flex justify-between inline-block'>
            <label className='flex items-center gap-3 border-2 border-grey-900 p-4 rounded-lg w-2/5'>
            <input {...register('query', {required: 'Please select a query type'})} type='radio' value='General Enquiry'/> General Enquiry</label>
            <label className='flex items-center gap-3 border border-grey-900 p-4 w-2/5 rounded-lg'>
            <input type='radio' {...register('query')} value='Support Request'/> Support Request</label>
          </div>
          <ErrorMessage 
            errors={errors}
            name='query' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
          />
        </label>
      </div>
      <div className='flex gap-3 flex-col justify-between'>
          <label className='flex flex-col gap-4 text-base'>
            Message:
            <textarea className='border border-grey-900 p-4 rounded-lg' name="message" {...register('message', {required: 'This field is required'})}></textarea>
          </label>
          <ErrorMessage 
            errors={errors}
            name='message' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
          />
      </div>
      <div className='flex-col gap-3 text-base'>
        <div className='flex gap-3'>
        <input className='self-center' type='checkbox' {...register('consent', {required: 'To submit this form, please consent to being contacted'})}/>
        <p>I hereby consent to being contacted by the team</p>
        </div> 
        <ErrorMessage 
            errors={errors}
            name='consent' 
            render={({message}) => (<p className='text-red-500'>{message}</p>)}
        />          
      </div>

      <button className='bg-green-600 min-h-16' type='submit'>Submit</button>
    </form>)
}

