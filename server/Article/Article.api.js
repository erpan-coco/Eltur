// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./Article.db.js');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/Article',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let request = req.body
    let newArticle = new models.Article({
        title : request.title,
        date : request.date,
        author: request.author,
        detaild: request.detaild
    });
    // 保存数据newAccount数据进mongoDB
    newArticle.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('数据保存成功！');
        }
    });
});
// 获取已有账号接口
router.get('/api/Article/:title',(req,res) => {
    //  通过模型去查找数据库
    let title = req.query.title
    models.Article.findOne({ title: title }, (err,data) => {
        if (err) {
            res.send(err);
        } else {
          res.send(data);
        }
    });
});

module.exports = router;