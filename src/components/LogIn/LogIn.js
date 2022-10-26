import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const LogIn = () => {

    const [error, setError] = useState('');

    const { signIn, setLoading } = useContext(AuthContext);

    // redirect 
    // const navigate = useNavigate()

    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';

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

                // user email verify 
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
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

    return (
        <div>
            <form onSubmit={handleLogIn} className='shadow-2xl w-2/4 m-auto mt-20 p-6'>
                <h1 className='text-3xl'>Log In</h1>
                <div className='mt-4'>
                    <p className='text-left'>Email</p>
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3'>
                    <p>Password</p>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-success w-full max-w-xs" required />
                </div>
                <div className='mt-3'>
                    {error}
                </div>
                <button className='btn mt-2'>LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;