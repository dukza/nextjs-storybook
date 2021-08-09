import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Plus from '../src/icon/svg/plus.svg';

// component
import Button from './../src/component/Button';

export default function Home() {
  console.log(Plus)
  return ( 
    <div>
     <img src={Plus.src} />
     <Button component="button" color="dark" size="lg" className="rounded-pill">자세히보기</Button>
    </div>
  )
}
