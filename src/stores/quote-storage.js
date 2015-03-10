
/* key
 *  Returns the key used for local storage.
 *  Optionally sets the key if a newKey is given.
 *  KEY_QUOTE_LIST is the default value for the key.
 *
 *  key: the new key to use for storing quotes in localStorage [optional]
 */
var KEY_QUOTE_LIST = 'quotes-list'
var key = function(newKey) {
  return KEY_QUOTE_LIST = newKey || KEY_QUOTE_LIST;
}

/* load
 *  Returns an array of quotes saved in local storage.
 * 
 *  Note:
 *  use key() to get the item from localStorage:
 *  localStorage.getItem(key())
 *
 */
var load = function() {
  /* implement me */
  return [];
}

/* push
 *  Adds a quote to the list of quotes and saves the new list to localStorage
*
 *  Note:
 *  use key() when saving the item into localStorage:
 *  localStorage.setItem(key(), value);
 */
var push = function(quote) {
  /* implement me */
}

/* clear
 *  Deletes all the saved quotes from localStorage
 *
 */
var clear = function() {
  /* implement me */
}


/* QuoteStorage Public Interface
 *
 * key: get or set the key used for storing quotes in localStorage
 * load: loads the list of quotes from localStorage: using key()
 * push: adds a quote to the list of quotes in localStorage
 * clear: removes all quote from localStorage
 *
 */
QuoteStorage = {
  key: key,
  load: load,
  push: push,
  clear: clear
};

module.exports = QuoteStorage;
