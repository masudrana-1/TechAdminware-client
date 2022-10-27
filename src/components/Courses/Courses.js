import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseLink from '../CourseLink/CourseLink';

const Courses = () => {

    const courses = useLoaderData();



    return (
        <div className='flex flex-col lg:flex-row gap-5'>
            <div className='px-6 py-3'>
                {
                    courses.map(course => <CourseLink key={course.id} course={course}></CourseLink>)
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 m-auto gap-8 px-6'>

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }

            </div>
        </div>
    );
};

export default Courses;