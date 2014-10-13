/* GET home page. */
exports.index = function(req, res){
  var fs     = require('fs');
  var datajs = fs.readFileSync('lang/en.json', 'utf8')
  var datain = { datajs: datajs };
  res.render('review', datain);
};
