import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ course }) => {

    const { _id, img, title } = course;

    return (
        <div className='m-auto p-4 '>
            <img className='' src={img} alt="" />
            <h4 className='text-center my-2'>{title}</h4>
            <Link to={`/course/${_id}`} className="mt-2 btn btn-block btn-outline btn-accent">Show details</Link>
        </div>
    );
};

export default Course;