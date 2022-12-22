import React from 'react';
import { Link } from 'react-router-dom';

const CourseLink = ({ course }) => {

    // console.log(category);

    const { title, _id } = course;


    return (
        <div>
            <Link to={`/course/${_id}`} className="btn bg-orange-800 shadow-lg shadow-blue-500/50 mb-6 w-full">{title}</Link>
        </div>
    );
};

export default CourseLink;