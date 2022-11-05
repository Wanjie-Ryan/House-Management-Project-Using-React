import React from 'react'
import { useState } from "react";
import '../register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

function Register() {

    const navigate = useNavigate()

    const[data, setdata] = useState({

        firstname: '',
        surname: '',
        email: '',
        countrycode: '',
        telnum: '',
        password: ''
    })

    // const keystroke =(event)=>{

    function Keystroke(event){

        setdata(prevData =>{
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
         
    }

    const goBack = ()=>{

        navigate('/')

    }


  return (
    <>

    <div id = 'sec'>

        <div class = 'main'>

            <p class = 'title-register'> Waka Waka Managers </p>

            <p  class = 'cont'>  &#10004; Reliable Registration <br></br> &#10004; We only work with trusted, vetted companies.<br></br>  &#10004; Our team works globally to eliminate fraud or illegal activity, ensuring the registration you apply is safe and secure.</p>

        </div>

        <div className = 'sec-main'>
    
             <FontAwesomeIcon icon={faCircleArrowLeft} onClick = {goBack} class = 'home-arrow' title = 'Go back Home' /> 
            <p> Becoming Part of <strong> our Global Community </strong> has never been Easier</p>

        

            <form class = 'registration'>

                <div class = 'lname'>
                    <label htmlFor='firstname'>First Name</label>
                    <input type = 'text' placeholder = 'Enter your First Name' name = 'firstname' onChange={Keystroke}  class = 'input-fname' value = {data.firstname} required/>
                </div>


                <div class = 'lname'>

                <label htmlfor = 'surname'>Last Name</label>
                    <input type = 'text' placeholder = 'Enter your Last Name' name = 'surname' onChange={Keystroke} class = 'input-fname'  value = {data.surname} required/>

                </div>

                <div class = 'lname'>

                    <label htmlFor='email'>Email Address</label>
                    <input type = 'Email' placeholder = 'Enter your Email Address' name = 'email' onChange={Keystroke} class = 'input-fname'  value = {data.email} required/>

                </div>


                <div class = 'lname'>
                    <label htmlfor = 'countrycode'>Country Code</label>
                    <input type = 'text' pattern="[A-Za-z]{3}" name = 'countrycode' onChange={Keystroke} class = 'input-fname' placeholder='Enter a 3-Letter country code eg. ken for Kenya' value = {data.countrycode} required/>
                </div>

                <div class = 'lname'>

                    <label htmlFor='telnum'> Telephone number</label>
                    <input type = 'tel' placeholder = 'Telephone number eg. 254-781-678' name = 'telnum'  onChange={Keystroke} class = 'input-fname' pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"  value = {data.telnum} required/>

                </div>

                <div class = 'lname'>

                    <label htmlFor='password'> Enter Password </label>
                    <input type = 'password' placeholder = 'Enter Your Password' name = 'password'  onChange={Keystroke} class = 'input-fname'   value = {data.password} required/>

                </div>

            </form>

            <form id = 'submission'>

            <div class = 'cb'>
                    <input type = 'checkbox' name = 'terms'/>
                    <label htmlFor='terms'>I agree to Waka Waka's Terms & Conditions</label>
            </div>

            <div class = 'cb2'>
            <input type = 'checkbox' name = 'privacy-policy'/>
            <label htmlFor='terms'> I understand that Waka Waka will process my information in accordance with their Privacy Policy.<br></br> I may withdraw my consent through unsubscribe links at any time. </label>

            </div>

            <input type = 'submit' class = 'submit' onClick = {goBack}/>



            </form>

        </div>

       
        
    
    
    </div>
    </>
  )
}

export default Register