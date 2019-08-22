var moment = require('moment');

var parseDuration =  function (duration) {


   const d = moment.duration({milliseconds:moment.duration(duration)._milliseconds});
   return moment().startOf('day').add(d).format('HH:mm:ss').replace(/^(?:00:)?0?/, '');
};

exports.parseDuration = parseDuration;
