
/*
 * GET home page.
 */
var util = require('util'),
    ListPage = require('../listPage').ListPage,
    newsokuParser = require('../newsokuParser'),
    ParseManager = require('../parseManager').ParseManager;

exports.index = function(req, res){
  
  // コールバック時動作を定義
  function callback(err, listPage) {
    if (err) {
      throw err;
    }
    // 配列を結合
    allListPage = allListPage.concat(listPage);
    
    if (++cnt == max) { 
      res.render('index', { listPage: allListPage });
    }
  }
  var manager = new ParseManager(callback);
  manager.addParser(newsokuParser.getListPage);
  manager.addParser(newsokuParser.getListPage); 
  // クロージャ用変数
  var cnt = 0;
  var max = manager.size();
  var allListPage = new ListPage();
  // parser実行
  manager.run();
};
