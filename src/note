import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { UserProfile } from "./Components/atoms/UserProfile";
import { Loading } from "./Components/atoms/Loading";
import axios from 'axios'

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
      {loading ?
        <Loading />
     : <UserProfile userss={user} />
       }
    </div>
  );
};

export default Users;
