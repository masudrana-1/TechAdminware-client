import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {

    const { _id, img, title } = course;

    return (
        <div className='m-auto rounded-xl shadow-lg shadow-red-500/50'>
            <img className='rounded-t-xl' src={img} alt="" />
            <div className='p-8'>
                <h4 className='text-center my-2'>{title}</h4>
                <Link to={`/course/${_id}`} className="mt-2 btn btn-block bg-orange-800 shadow-lg shadow-blue-500/50">Show details</Link>
            </div>
        </div>
    );
};

export default Course;