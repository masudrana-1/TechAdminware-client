import React from 'react';

const LogIn = () => {


    return (
        <div>
            <form className='shadow-2xl w-2/4 m-auto mt-20 p-6'>
                <h1 className='text-3xl'>Log In</h1>
                <div className='mt-4'>
                    <p className='text-left'>Email</p>
                    <input type="text" placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" placeholder="Password" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className='btn mt-2'>LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;