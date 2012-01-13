/*
 * 各Parserオブジェクトをまとめて処理する
 */
function ParseManager(renderMethod) {
  this.renderMethod = renderMethod;
  this.parseList = [];
}

ParseManager.prototype.addParser = function(parseMethod) {
  this.parseList.push(parseMethod);
};

ParseManager.prototype.size = function() {
  return this.parseList.length;
};

ParseManager.prototype.run = function() {
  for (var cnt = 0; cnt < this.parseList.length; cnt++) {
    this.parseList[cnt](this.renderMethod);
  }
};

exports.ParseManager = ParseManager;
