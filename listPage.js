/*
 * リストページのデータを表す
 */
function ListPage() {
  this.summaries = [];
  this.csses = [];
}

ListPage.prototype.size = function () {
  return this.summaries.length;
};

// toString 主にデバッグ用
ListPage.prototype.toString = function () {
  var mergeTitle = null;

  for (var cnt = 0; cnt < this.summaries.length; cnt++) {
    mergeTitle = mergeTitle + this.summaries[cnt].toString() + "\n\n";
  }
  return mergeTitle;
};
// ListPageオブジェクトを結合する
ListPage.prototype.concat = function(addListPage) {
  // サマリーを結合
  retListPage = new ListPage();
  retListPage.summaries = this.summaries.concat(addListPage.summaries);
  retListPage.csses = this.csses.concat(addListPage.csses);

  return retListPage;
};

// サマリーを追加する
ListPage.prototype.addSummary = function (summary) {
  if (summary instanceof Summary) {
    this.summaries.push(summary);
  } else {
   throw new TypeError(); 
  }
};

// サマリーを取得する
ListPage.prototype.getSummary = function (cnt) {
  return this.summaries[cnt];
};


/*
 * リストページの各サマリーを表す
 */  
function Summary (title, body, link) {
  this.title = title;
  this.body = body;
  this.link = link;
}

// toString
Summary.prototype.toString = function () {
  return this.title + ' | ' + this.link + ' | ' + this.body;
};

/*
 * エクスポート
 */
exports.ListPage = ListPage;
exports.Summary = Summary;
