import React from 'react';
import '../../style/main.css';

import LoginForm from '../../components/LoginForm';

/* Login page */
function Login () {
    return (
            <main className='bg-dark'>
                {/* Returns form component */}
                < LoginForm />
            </main>
        
    )
}

export default Login;