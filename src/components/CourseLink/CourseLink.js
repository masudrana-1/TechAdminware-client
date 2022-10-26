import React from 'react';
import { Link } from 'react-router-dom';

const CourseLink = ({ category }) => {


    return (
        <div>
            <Link to={`/course/${category.category_id}`} className="btn btn-outline btn-accent mb-2">{category.title}</Link>
        </div>
    );
};

export default CourseLink;