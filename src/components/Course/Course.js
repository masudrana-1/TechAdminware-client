import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ courses }) => {

    const { img, title } = courses

    return (
        <div className='m-auto p-4 border-solid border-2 border-red-500'>
            <img className='' src={img} alt="" />
            <h4>{title}</h4>
            <Link className="mt-2 btn btn-block btn-outline btn-accent">Purchase the course</Link>
        </div>
    );
};

export default Course;