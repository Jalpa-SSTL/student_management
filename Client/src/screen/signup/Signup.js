import React, { useReducer } from 'react'
import './Signup.css'
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import { FaGenderless } from 'react-icons/fa'
import FormInput from '../../components/forminput/FormInput';
import { Service } from '../../service/Service';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate()
    const initialVal = {
        name: '',
        email: '',
        password: '',
        date: '',
        gender: '',
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'textInput':
                return { ...state, [action.payload.key]: action.payload.value };
            case 'reset':
                return initialVal
            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    };
    const [state, dispatch] = useReducer(reducer, initialVal);

    const submit = (event) => {
        event.preventDefault();
        const data = {
            "Name": state.name,
            "Email": state.email,
            "Gender": state.gender,
            "DOB": "1999-09-02",
            "password": state.password
        }
        Service.post('register', data, (res) => {
            if (res.code === "200") {
                navigate('/login')
                dispatch({ type: 'reset' })
            }
            else {
                alert(res.message)
            }
        },
            (err) => {
                console.log(err);
            })
    }
    return (
        <div className='signupCal'>
            <div className='signupSubcal'>
                <h1 className='loginTitle signup-space'>Signup Form</h1>
                <form onSubmit={submit}>
                    <div className='signupEleCal'>
                        <FormInput state={state.name} onDispatch={dispatch} type={"name"} Icon={BsPersonFill} />
                        <FormInput state={state.email} onDispatch={dispatch} type={"email"} Icon={AiOutlineMail} />
                    </div>
                    <div className='signupEleCal'>
                        <FormInput state={state.password} onDispatch={dispatch} type={"password"} Icon={RiLockPasswordFill} />
                        <FormInput state={state.date} onDispatch={dispatch} type={"date"} Icon={CgCalendarDates} />
                    </div>
                    <FormInput state={state.gender} onDispatch={dispatch} type={"gender"} Icon={FaGenderless} />
                    {/* <FormInput state={state.profileImg} onDispatch={dispatch} type={"file"} /> */}
                    <button className='signup-btn'>Signup</button>
                </form>
            </div>
        </div>
    )
}


export default Signup