/*
 * @Author: wangya
 * @Date: 2020-12-01 10:42:22 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-12-01 10:54:01
 */
import React from 'react';
import img from './img/404.png';

const NotFound = ()=> {
  return (
    <div
        className="center"
        style={{ height: '100%', background: '#ececec', overflow: 'hidden' }}
    >
        <img
            src={img}
            alt="404"
        />
    </div>
);
}

export default NotFound;