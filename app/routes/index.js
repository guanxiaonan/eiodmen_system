'use strict';

import Router from 'koa-router';

import Myapp from '../controllers/myapp';

import Myweb from '../controllers/myweb';

import User from '../controllers/user';


const router = new Router();

router
  .get('/', User.index)                 //主页面
  .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作
  
export default router;
