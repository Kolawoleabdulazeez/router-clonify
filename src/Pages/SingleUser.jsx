import React, {useState}from 'react'
import { useParams } from 'react-router-dom';

export const SingleUser = () => {
    const{id} = useParams();
    const [user, setUser] = useState([]);

    const getUser = async () => {
        setLoading(true);
// `https:randomuser.me/api/? results=12`}`
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
    }
 
  
 

