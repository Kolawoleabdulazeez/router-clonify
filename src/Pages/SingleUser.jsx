import axios from 'axios';
import React, {useState}from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/atoms/Loading';
import { UserProfile } from '../Components/atoms/UserProfile';


export const SingleUser = (
  users,
  loading,
  setLoading
) => {
    const{id} = useParams();
    const [user, setUser] = useState([]);

    const getUser = async () => {
        setLoading(true);
// github api
 try {

    const response = await axios.get(`https://api.github.com/users`);
          if (response.data.length > 0) {
      setUser(response.data);
      setLoading(false);
    }

    //  const res= response.data.result
    //  console.log(res[1])
  } catch (error) {
    console.log(`This is my error ${error}`);
  }
};
  return(
    <div>
      Hello
    </div>
  )
    } 
 
  
 

