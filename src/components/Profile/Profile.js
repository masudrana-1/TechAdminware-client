import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user.displayName);

    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-center items-center gap-4'>
            <div>
                <img className="min-h-fit w-64" ref={photoURLRef} src={user?.photoURL} alt="" />
            </div>
            <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" onChange={handleNameChange} defaultValue={name} placeholder="Your name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your PhotoURL</span>
                    </label>
                    <label className="input-group">
                        <span>PhotoURL</span>
                        <input type="text" ref={photoURLRef} defaultValue={user?.photoURL} placeholder="https://google.com/rose.jpg" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" defaultValue={user?.email} placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>


                <button className='btn mt-4'>Submit</button>
            </div>
        </form>
    );
};

export default Profile;