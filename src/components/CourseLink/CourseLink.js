import React from 'react';
import { Link } from 'react-router-dom';

const CourseLink = ({ courses }) => {

    // const { id } = course;

    console.log(courses)

    return (
        <div>
            <Link className="btn btn-outline btn-accent mb-2">{courses.title}</Link>
        </div>
    );
};

export default CourseLink;