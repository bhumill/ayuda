import React, {useEffect} from 'react';
const Logout = ({history}) => {

    useEffect(()=>{
        localStorage.removeItem('UserId');
        localStorage.removeItem('email');
        history.push('/home');
    },[]);
    return(
        null
    );
}

export default Logout;