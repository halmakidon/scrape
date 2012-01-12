/*
 * リストページのデータを表す
 */

exports.ListPage = ListPage;
function ListPage() {
  this.summaries = [];
  this.csses = null;
}

ListPage.prototype.size = function () {
  return this.summaries.length;
}

// toString 主にデバッグ用
ListPage.prototype.toString = function () {
  var mergeTitle = null;

  for (var cnt = 0; cnt < this.summaries.length; cnt++) {
    mergeTitle = mergeTitle + this.summaries[cnt].toString() + "\n\n";
  }
  return mergeTitle;
}

// サマリーを追加する
ListPage.prototype.addSummary = function (summary) {
  if (summary instanceof Summary) {
    this.summaries.push(summary);
  } else {
   throw new TypeError(); 
  }
}

// サマリーを取得する
ListPage.prototype.getSummary = function (cnt) {
  return this.summaries[cnt];
}


/*
 * リストページの各サマリーを表す
 */  
exports.Summary = Summary;

function Summary (title, body, link) {
  this.title = title;
  this.body = body;
  this.link = link;
}

// toString
Summary.prototype.toString = function () {
  return this.title + ' | ' + this.link + ' | ' + this.body;
}

