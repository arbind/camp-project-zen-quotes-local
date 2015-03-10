chai = require('chai')
expect = chai.expect

Store = require("stores/quote-storage")

describe "QuoteStorage", ->
  quoteList = null

  beforeEach ->
    Store.key "#{Store.key()}-spec"
    localStorage.removeItem Store.key()

  describe "#push()", ->

    describe "one quote", ->
      quote1 = 'quote1'
      beforeEach ->
        Store.push quote1

      it "saves a quote to local storage", ->
        quotes = JSON.parse localStorage.getItem(Store.key())
        expect(quotes).to.be.ok

    describe "multiple quotes", ->
      quoteList = ['quote1', 'quote2', 'quote3']

      beforeEach ->
        Store.push quote for quote in quoteList

      it "saves all quotes to local storage", ->
        quotes = JSON.parse localStorage.getItem(Store.key())
        expect(quotes.length).to.equal quoteList.length
        expect(quotes).to.have.members quoteList

  describe "#load()", ->

    beforeEach ->
      quoteList = ['quote1', 'quote2', 'quote3']
      Store.push quote for quote in quoteList

    it "returns a list of quotes", ->
      quotes = Store.load()
      expect(quotes.length).to.equal quoteList.length
      expect(quotes).to.have.members quoteList

  describe "#clear()", ->

    beforeEach ->
      quoteList = ['quote1', 'quote2', 'quote3']
      Store.push quote for quote in quoteList
      quotes = Store.load()
      expect(quotes.length).to.equal quoteList.length
      Store.clear()

    it "removes all quotes", ->
      quotes = Store.load()
      expect(quotes.length).to.equal 0
