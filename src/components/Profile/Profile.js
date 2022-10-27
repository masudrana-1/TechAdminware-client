import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName);

    const photoURLRef = useRef(user?.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);

        toast.success('Successfully changed')
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-center gap-6 w-4/6 m-auto p-10 mt-10 rounded-2xl shadow-2xl'>
            <div>
                <img className="min-h-fit w-auto rounded-2xl" ref={photoURLRef} src={user?.photoURL} alt="" />
            </div>
            <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" onChange={handleNameChange} defaultValue={name} placeholder="Your name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your PhotoURL</span>
                    </label>
                    <label className="input-group">
                        <span>PhotoURL</span>
                        <input type="text" ref={photoURLRef} defaultValue={user?.photoURL} placeholder="https://google.com/rose.jpg" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" defaultValue={user?.email} placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>


                <button className='btn mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default Profile;