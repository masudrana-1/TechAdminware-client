import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseLink from '../CourseLink/CourseLink';

const Courses = () => {

    const coursesCategory = useLoaderData();

    // const { id, title, img, details } = courses;
    // console.log(courses);

    return (
        <div className='flex gap-5'>
            <div className=''>
                {
                    coursesCategory.map(courses => <CourseLink key={courses.id} courses={courses}></CourseLink>)
                }
            </div>
            <div className='grid grid-cols-2 m-auto gap-8 border-solid border-2 border-sky-500 '>

                {
                    coursesCategory.map(courses => <Course key={courses.id} courses={courses}></Course>)
                }

            </div>
        </div>
    );
};

export default Courses;