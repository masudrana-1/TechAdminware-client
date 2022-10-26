import React from 'react';

const Register = () => {
    return (
        <div>
            <form className='shadow-2xl w-2/4 m-auto mt-20 p-6'>
                <h1 className='text-3xl'>Register</h1>
                <div className='mt-4'>
                    <p className=''>Name</p>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-4'>
                    <p className=''>Photo URL</p>
                    <input type="text" name='photoURL' placeholder="Your PhotoURL" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-4'>
                    <p className=''>Email</p>
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" />
                </div>
                <button className='btn mt-2'>Register</button>
            </form>
        </div>
    );
};

export default Register;