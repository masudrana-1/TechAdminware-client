import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const CheckOut = () => {

    const { user } = useContext(AuthContext);

    // const { displayName, uid, email } = user;

    const handlePurchase = event => {
        event.preventDefault();

        toast.success('Successfully purchase.')
    }

    return (
        <div>
            <form onSubmit={handlePurchase} action="" className='w-2/4 m-auto p-10 rounded-2xl shadow-2xl'>
                <h1>Please give your details to purchase the course</h1>
                <div className="form-control mt-6">
                    <label className="input-group">
                        <span>ID</span>
                        <input type="text" defaultValue={user?.uid} placeholder="Your ID" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control mt-3">
                    <label className="input-group">
                        <span>Email</span>
                        <input type="Email" defaultValue={user?.email} placeholder="info@site.com" className="input input-bordered w-full" required />
                    </label>
                </div>
                <button className='btn mt-4'>Confirm to Purchase</button>
            </form>
        </div>
    );
};

export default CheckOut;