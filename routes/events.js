/* GET list page. */
exports.list = function(req, res){
  var data = {page: 'events:list',
              title: 'Amazon Web Services Introduction',
              redirect: getlink(0)
             }
  res.render('events', data);
};

/* GET get page. */
exports.get = function(req, res){
  var data = {page: 'events:get',
              title: 'Amazon Web Services Introduction',
              params: req.params,
              redirect: getlink(req.params.id)
             }
  res.render('events', data);
};

/* Get url for selected event */
function getlink(id) {
  var fs   = require('fs');
  var lang = JSON.parse(fs.readFileSync('lang/en.json', 'utf8'));
  var events = lang.coursedates;
  var eventbrite;

  for (var i = 0; i < events.length; i++) {
    var course = events[i];
    if (course.id === id) {
       eventbrite = course.eventbrite;
       break;
    }
  }

  return eventbrite ? eventbrite : lang.allcourses;
}
