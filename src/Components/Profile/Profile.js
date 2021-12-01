import React, { useEffect, useState } from 'react';
import "../scss/app.scss";
// import '../contentloader/loader'
import Loader from '../contentloader/loader';

export default function Profile({ state }) {
  console.log(state);
  const [user, setUser] = useState(null);
  var x = state;


  

  useEffect(() => {

    setTimeout(async() => {
      const response = await fetch('https://reqres.in/api/users?page=' + x);
      const data = await response.json();
      setUser(data.data);
    }, 1000);

  }, [x])

  // getUsers();
  return (
    <>
      <div className="cards">
        {user &&
          user.map((el) => {
            return (

              <div className=" card " key={el.id}>
                <div className="avatar ">
                  <img src={el.avatar} alt="img" />
                </div>
                <div className="username"> {el.first_name} {el.last_name}</div>
                <div className="mailid">{el.email}</div>
              </div>

            )
          })
        }
        {!user && [1,2,3,4,5,6].map((n)=> <Loader key={n}/>  )}
      </div>
      
    </>
  );

}
