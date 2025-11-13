import React, { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import MyContainer from '../components/MyContainer';
// import React, { use, useContext } from 'react';

const MyProfile = () => {
    const { user } =  use(AuthContext);
    // console.log(user);
    // const { user } = useContext(AuthContext);
    return (
      <MyContainer>
        <div className='card-body'>
          <p>Image :<img src={user.photoURL} alt="no" /></p>
          <p> name : {user && user.displayName}</p>
          <p>email: {user && user.email}</p>
          <p>password : {user && user.password}</p>
        </div>
        <button className='btn btn-accent'> update profile</button>
      </MyContainer>
    );
};

export default MyProfile;