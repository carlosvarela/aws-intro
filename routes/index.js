/* GET home page. */
exports.index = function(req, res){
  var fs   = require('fs');
  var data = JSON.parse(fs.readFileSync('lang/en.json', 'utf8'));
  res.render('index', data);
};
