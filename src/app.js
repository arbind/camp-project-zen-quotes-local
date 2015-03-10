var QuotesView = require('ui/quotes-view');

var initialize = function() {
  var el = $('body');
  QuotesView.show(el);
}

var App = {
  initialize: initialize
}

module.exports = App;