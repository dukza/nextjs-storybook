import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';

// component
import Button from './../src/component/Button';

export default function Home() {
  return ( 
    <div>
     <Button component="button" color="dark" size="lg" className="rounded-pill">자세히보기</Button>
    </div>
  )
}
