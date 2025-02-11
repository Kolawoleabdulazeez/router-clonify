import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom';
import { Loading } from '../Components/atoms/Loading';
import { UserProfile } from '../Components/atoms/UserProfile';


export const SingleUser = () => {
    const{id} = useParams();
    const [user, setUser] = useState([]);
    const [loading, setLoading]= useState(false)
    const GITHUBTOKEN = "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"

    const getUser = async (id) => {
        setLoading(true);
// github api
 try {

    const response = await axios.get(`https://api.github.com/users/${id}`, {
      headers: {
        Authorization: `token ${GITHUBTOKEN}`
      },
    }
      
    );
          if (response.data.id) {
            console.log(response.data.id)
      setUser(response.data);
      setLoading(false);
    }
        console.log(response)
    //  const res= response.data.result
    //  console.log(res[1])
  } catch (error) {
    console.log(`This is my error ${error}`);
  }
  finally{
    setLoading(false)
  }
};
useEffect(()=>{
  if(id){
    getUser(id)
  }
}, [id])
  return(
    <div className='SingleUser flex gap-3'>
    <div className='align-center'>
      <p><strong>User Name</strong> {user.login}</p>
      
      <p>Location: {user.location}</p>
      </div>
      <img src={user.avatar_url} alt="" srcset="" width={200} />
    </div>
  )
    } 
 
  
 

