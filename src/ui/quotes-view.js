var QuoteStorage = require('../stores/quote-storage');

/* 
 * Shared UI Variables
 */
var $newQuote;
var $addQuoteButton;
var $clearAllQuotesButton;
var $quoteList;
var $alert;

/* show
 * Displays the quotes view component inside the given el.
 *
 * el: the element to render into
 *
 */
var show = function(el) {
  var quotesViewHTML = require('quotes-view');
  $(el).append(quotesViewHTML);
  bindUI();
  registerHandlers();
  renderQuoteList();
};

/* bindUI
 * Sets the shared UI variables to elements on the DOM
 *
 */
var bindUI = function() {
  $newQuote = $('input.new-quote');
  $addQuoteButton = $('button.add-quote');
  $clearAllQuotesButton = $('button.clear-all-quotes');
  $quoteList = $('ul.quote-list');
  $alert = $('div.alert')
};

/* registerHandlers
 * Setup event handlers to respond to human interaction events.
 *
 */
var registerHandlers = function() {
  $addQuoteButton.click(hiSaveUserQuote);
  $clearAllQuotesButton.click(hiClearQuoteList);
  $newQuote.click(hiHideAlert);
};

/* hiClearQuoteList
 * Clears out all the quotes (from QuoteStorage and from the DOM)
 * 
 */
var hiClearQuoteList = function(event){
  clearQuoteList()
};

/* hiHideAlert
 * Event handler to hide the alert
 * 
 */
var hiHideAlert = function(event){
  hideAlert();
};

/* hiSaveUserQuote
 * Event hander to get the user entered quote and save it.
 *
 * Note: 
 * use showAlert() do display an error message if the user's quote is empty 
 *
 */
var hiSaveUserQuote = function(event){
  /* +++ implement me! */
};

/* saveUserQuote
 * Saves a quote by using QuoteStorage.push().
 * Also renders the quote into $quoteList
 *
 */
var saveUserQuote = function(quote){
  /* +++ implement me! */
};

/* clearQuoteList
 * Clears all the quotes from QuoteStorage.
 * Rerenders an emply $quoteList.
 *
 */
var clearQuoteList = function(){
  /* +++ implement me! */
};

/* renderQuoteList
 * Loads the list of quotes from QuoteStorage and renders them
 *
 */
var renderQuoteList = function(){
  /* +++ implement me! */
};

/* renderQuote
 * Renders the given quote into the quote list as <li> elements
 * Adds the <li> element to $quoteList
 *
 */
var renderQuote = function(quote) {
  /* +++ implement me! */
};


/* hideAlert
 * Hides the alert message
 * 
 */
var hideAlert = function(event){
  $alert.removeClass('hidden').addClass('hidden')
};

/* showAlert
 * Shows an alert message
 * 
 */
var showAlert = function(event){
  $alert.removeClass('hidden');
};


QuotesView = {
  show: show
};

module.exports = QuotesView;