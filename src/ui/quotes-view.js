/* Quotes View
 *
 * This view component has 2 main purposes:
 *  + Render a list of quotes the DOM
 *    The list of quotes are retrieved from the QuoteStorage.
 *    Each quote is rendered as an li element into ul.quote-list
 *  + Respond to Human Interaction events
 *    The user can add a quote by clicking the button.add-quote
 *      input.new-quote is then read to get the user's quote.
 *      The quote that the user entered is pushed onto the QuoteStore
 *      and is added to the ul.quote-list as an li element
 *      (If the user adds an empty quote, an alert message is shown.)
 *    The user can clear all the quotes by clicking button.clear-all-quotes.
 *      The QuoteStore is cleared of all quotes and all the 
 *      ul.quote-list is re-rendered without any li elements
 *
 */

 /*
  * Get the QuoteStorage so we can load, push and clear quotes.
  */
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
  var quote = $newQuote.val();
  if(0 === quote.trim().length) {
    return showAlert();
  }
  saveUserQuote(quote);
  $newQuote.val('');
};

/* saveUserQuote
 * Saves a quote by using QuoteStorage.push().
 * Also renders the quote into $quoteList
 *
 */
var saveUserQuote = function(quote){
  QuoteStorage.push(quote);
  renderQuote(quote);
};

/* clearQuoteList
 * Clears all the quotes from QuoteStorage.
 * Rerenders an emply $quoteList.
 *
 */
var clearQuoteList = function(){
  QuoteStorage.clear();
  renderQuoteList();
};

/* renderQuoteList
 * Loads the list of quotes from QuoteStorage and renders them
 *
 */
var renderQuoteList = function(){
  $quoteList.html('')
  var quotes = QuoteStorage.load();
  for(var i=0; i < quotes.length; i++){
    quote = quotes[i];
    renderQuote(quote);
  }
};

/* renderQuote
 * Renders the given quote into the quote list as <li> elements
 * Adds the <li> element to $quoteList
 *
 */
var renderQuote = function(quote) {
  quoteHTML = $("<li class='list-group-item'>" + quote + "</li>")
  $quoteList.append(quoteHTML)
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