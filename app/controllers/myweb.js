'use strict';

import Model_web from '../models/model_web';

//main
exports.main = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/web_show/main', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
