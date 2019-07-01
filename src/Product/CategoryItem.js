import React from 'react';
import {Link} from 'react-router-dom';

const CategoryItem = (props) => {
    let {category} = props;
    let viewCategory = `/category/${category._id}`;

    return (
        <div className='category-item'>
            <li>
                <Link to={viewCategory}>
                    {category.name}
                </Link>
            </li>
        </div>
    );
};

export default CategoryItem;