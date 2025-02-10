import React from 'react'
import { useNavigate } from 'react-router-dom';

export const UserProfile = ({userss}) => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 pt-20 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userss.map((users, index) => {
          return (
            <div className="sty ">
              <div
                key={index}
                className="flex justify-between border shadow-md rounded-lg p-4 w-100 items-center font-semibold"
                onClick={()=>{
                    navigate(`/users/${users.login}`)
                }}
              >
                Name: {users.login}
                <br />
                {/* Gender: {users.gender}
                <br /> */}
                {/* Date of Birth: {users.dob.age} */}
                <br />
                <div>
                  <img
                    src={users.avatar_url}
                    className="rounded-full"
                    alt="ghyt"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
  </div>
  )
}
