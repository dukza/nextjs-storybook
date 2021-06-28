import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import ItemList from '../src/component/ItemList';
import Spinner from '../src/component/Spinner';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const API_URL = 
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  function getData () {
    axios.get(API_URL).then((res)=>{
      // console.log(res.data);
      setList(res.data);
      setLoading(false);
    })
  }
  useEffect(()=>{
      getData();  
  },[])
  return ( 
    <div>
      <Head>
        <title>파스토셀프</title>
      </Head>
      {isLoading ? <Spinner></Spinner> : <ItemList list={list}></ItemList>}
      
    </div>
  )
}
