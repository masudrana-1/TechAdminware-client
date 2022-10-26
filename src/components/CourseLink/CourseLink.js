import React from 'react';
import { Link } from 'react-router-dom';

const CourseLink = ({ category }) => {

    console.log(category);

    const { title, id } = category;


    return (
        <div>
            <Link to={`/course/${id}`} className="btn btn-outline btn-accent mb-2">{title}</Link>
        </div>
    );
};

export default CourseLink;