import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = ({ courses }) => {

    console.log(courses);


    return (
        <div className='m-auto p-4 border-solid border-2 border-red-500'>
            <img className='' src={courses.img} alt="" />
            <h4>{courses.title}</h4>
            <Link className="mt-2 btn btn-block btn-outline btn-accent">Purchase the course</Link>
        </div>
    );
};

export default Course;