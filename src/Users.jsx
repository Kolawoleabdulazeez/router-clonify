import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Users = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const[gender, setGender] = useState("all")
  const getUser = async () => {
          setLoading(true);
// `https:randomuser.me/api/? results=12`}`
try {

      const response = await axios.get(`https://randomuser.me/api/?results=12${gender==='all'? '':`&gender=${gender}`}`);
            if (response.data.results.length > 0) {
        setUser(response.data.results);
        setLoading(false);
      }

      //  const res= response.data.result
      //  console.log(res[1])
    } catch (error) {
      console.log(`This is my error ${error}`);
    }
  };

  useEffect(() => {
    getUser();
  }, [gender]);
  return (
    <div>
      <Navbar />
      <label htmlFor="select" className="block my-2 mx-2">Select Gender </label>
      <select onChange={(e)=>{
        setGender(e.target.value)
      }} className="w-fit my-2 border p-3 rounded-lg mx-2">
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {loading ? (
        <div className="h-[80vh] w-screen flex items-center justify-content">
          <img src="/lg.gif" alt="loading img" />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div>
            <div className="grid grid-cols-1 pt-20 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {user.map((users, index) => {
                return (
                  <div className="sty ">
                    <div
                      key={index}
                      className="flex justify-between border shadow-md rounded-lg p-4 w-100 items-center font-semibold"
                    >
                      Name: {users.name.first}
                      <br />
                      Gender: {users.gender}
                      <br />
                      Date of Birth: {users.dob.age}
                      <br />
                      <div>
                        <img
                          src={users.picture.large}
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
        </div>
      )}
    </div>
  );
};

export default Users;
