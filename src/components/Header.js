import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className='header'>

            <div className='name-logo'>
                <Link to='/'>// Regina Furness</Link>
            </div>
        </div>
    )
}