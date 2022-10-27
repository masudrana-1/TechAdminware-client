import React from 'react';
import { Link } from 'react-router-dom';

const CourseLink = ({ course }) => {

    // console.log(category);

    const { title, _id } = course;


    return (
        <div>
            <Link to={`/course/${_id}`} className="btn btn-outline btn-accent mb-6 w-full">{title}</Link>
        </div>
    );
};

export default CourseLink;