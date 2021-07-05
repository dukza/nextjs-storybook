import React from 'react';
import Navigation from './Navigation';

export default {
    //필수, 프로젝트에 표시되는 텍스트
    title:'Navigation',
    // 권장
    component:Navigation,
}

// 메뉴항목생성
export const Navbar = () => (
    <Navigation/>
)