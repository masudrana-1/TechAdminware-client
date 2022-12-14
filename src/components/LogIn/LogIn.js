import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/AuthProvider';

const LogIn = () => {

    const [error, setError] = useState('');

    const { user, signIn, setLoading } = useContext(AuthContext);

    // redirect 
    const navigate = useNavigate()

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError('');

                toast.success('Successfully Login')

                navigate(from, { replace: true });
                // user email verify 
                // if (user.emailVerified) {
                // }
                // else {
                //     toast.error('Your email is not verified. Please verify your email.')
                // }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        if (user?.email) {
            navigate(from, { replace: true });
        }
    }, [user])

    return (
        <div>
            <form onSubmit={handleLogIn} className='w-44 lg:w-2/4 lg:m-auto mt-20 lg:mt-40 p-6 text-center'>
                <h1 className='text-5xl text-success'>LOG-IN</h1>
                <div className='mt-4'>
                    <p className=''>Email</p>
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3 text-red-600'>
                    {error}
                </div>
                <div>
                    <span>You don't have an accout? <Link className='text-emerald-500' to='/register'>Please Register</Link></span>
                </div>
                <button className='btn mt-6 shadow-md shadow-red-500/50 w-44'>LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;