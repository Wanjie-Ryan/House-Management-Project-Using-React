import React from "react"
import { useState } from "react";
import '../login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';


export default function Login(){

    const navigate = useNavigate()

    const[data, setdata] = useState({

       
        email: '',
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

    const properties =()=>{
        navigate('/Properties')
    }

    return (
        <>

          
        <div id = 'sec'>

            <div class = 'main'>

                <p class = 'title-register'> Waka Waka Managers </p>

                <p  class = 'cont'>  Welcome to our Login form</p>

            </div>

           <div className = 'sec-main'>

                <FontAwesomeIcon icon={faCircleArrowLeft} onClick = {goBack} class = 'home-arrow' title = 'Go back Home' /> 
                <p> Enjoy a View of <strong> Beautiful and Pocket Friendly  </strong> Houses. Bringing The World To you. </p>



                <form class = 'registration'>

                
                    <div class = 'lname'>

                        <label htmlFor='email'>Email Address</label>
                        <input type = 'Email' placeholder = 'Enter your Email Address' name = 'email' onChange={Keystroke} class = 'input-fname'  value = {data.email} required/>

                    </div>



                    <div class = 'lname'>

                        <label htmlFor='password'> Enter Password </label>
                        <input type = 'password' placeholder = 'Enter Your Password' name = 'password'  onChange={Keystroke} class = 'input-fname'   value = {data.password} required/>

                    </div>

                </form>

           
                <form id = 'submission'>


                    <input type = 'submit' class = 'submit' onClick = {properties}/>

                </form>

            </div>


        </div>
         
        
        </>

    )

}