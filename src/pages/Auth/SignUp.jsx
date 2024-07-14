import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import icons
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSignup = (e) => {
        e.preventDefault();
        Cookies.set('userToken' , true)
        console.log('Signup');
        navigate('/')
    }

    return (
        <div className='flex justify-center items-center h-screen w-screen bg-purple-200'>
            <section className='max-w-[500px]  px-2 py-10 md:px-10   md:shadow-lg rounded-lg md:bg-slate-50'>
                <div className='grid justify-center text-2xl font-bold'>TELEMEDICINE</div>
                <form autoComplete="off" onSubmit={handleSignup} >
                    <h1 className='text-[44px] font-semibold mt-10'>Sign Up</h1>
                    <p className='text-[#969696] py-2'>Please signup to continue to your account.</p>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className='my-3'
                        style={{ marginBottom: '15px' }}
                        InputProps={{
                            classes: {
                                focused: 'focus:border-green-500',
                            },
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#7360DF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#7360DF',
                                },
                            },
                        }}
                        autoComplete="off"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        edge="end"
                                    >
                                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#7360DF',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#7360DF',
                                },
                            },
                            marginBottom: 3,
                        }}
                        autoComplete="new-password" // Disable autocomplete
                    />

                    {/* <div className='py-4 flex'>
                        <input type="checkbox" className='w-4 h-6 accent-[#000000] cursor-pointer' />
                        <span className='ml-2'>Keep me logged in</span>
                    </div> */}

                    <button className='bg-[#33186B] w-full text-white py-3 rounded'
                        type='submit'
                    >Sign up</button>
                </form>
            </section>
        </div>
    );
};

export default SignUp;
