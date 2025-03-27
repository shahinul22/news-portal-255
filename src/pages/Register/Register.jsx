import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../Shared/Navbar/Navbar';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name'); 
        const photo = form.get('photo'); 
        const pass = form.get('password');
        console.log(email, pass, name, photo);
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-2xl bg-green-400'>This is Register</h2>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">Create a new account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-6" action="#" method="POST">

                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input type="text" name="name" id="name"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
                            </div>
                        </div>

                        {/* Photo Input */}
                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-900">Profile Photo</label>
                            <div className="mt-2">
                                <input type="file" name="photo" id="photo"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
                            </div>
                        </div>

                        {/* Password Input */}

                        <div className="mt-2">
                            <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
                        </div>


                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?
                        <Link to='/login' className="font-semibold text-indigo-600 hover:text-indigo-500">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
