import React from 'react';
import User from '../../components/User';
import '../../style/index.css';

/* User profile page */
function UserProfile () {
    return (
        <div className='profile-page'>
            <main className='bg-dark'>
                < User />
            </main>
        </div>
    )
}

export default UserProfile