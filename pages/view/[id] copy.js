import { useEffect, useState } from 'react';
import axios from 'axios';  
import { useRouter } from 'next/router'
import Item from "./../../src/component/Item"
import Spinner from '../../src/component/Spinner';

const Post = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter()
  const { id } = router.query
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData () {
    axios.get(API_URL).then((res)=>{
      // console.log(res.data);
      setItem(res.data);
      setLoading(false)
    })
  }
  useEffect(()=>{
      if(id && id > 0){
          getData();  
      }
  },[id])
  return (    
    <>
    {
        isLoading ? <Spinner></Spinner>: 
        <>
        <p>Post: {id}</p>
        <div><Item item={item}></Item></div>     
        </>   
    }
    </>
    )
}

export default Post;