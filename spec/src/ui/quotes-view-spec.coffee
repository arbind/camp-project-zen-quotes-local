chai = require('chai')
expect = chai.expect

$ = require('jquery')

QuotesView = require('ui/quotes-view');

renderQuotesView = ->
  $el = $ '#spec-dom'
  QuotesView.show($el)

unrenderQuotesView = ->
  $('#spec-dom').html ''

Store = require("stores/quote-storage")

describe "Quote UI", ->

  it "Has a quote view", ->
    expect($('ul.quote-list').length).to.equal 1
    expect($('input.new-quote').length).to.equal 1
    expect($('button.add-quote').length).to.equal 1

  beforeEach ->
    Store.key "#{Store.key()}-spec"
    localStorage.removeItem Store.key()
    renderQuotesView()

  afterEach ->
    localStorage.removeItem Store.key()
    unrenderQuotesView()

  describe "button click: add", ->
    describe "given that a valid quote was entered", ->
      beforeEach ->
        $('input.new-quote').val('It aint over till its over!')
        $('button.add-quote').click()

      it "adds a quote to the list of quotes", ->
        $quotesList = $('ul.quote-list li')
        expect($quotesList.length).to.equal 1

      it "clears new quote input box", ->
        $newQuoteInput = $('input.new-quote')
        expect($newQuoteInput.val()).to.equal ''

      it "does not show an alert", ->
        $alert = $('div.alert')
        expect($alert.is(':visible')).to.equal false

    describe "given that nothing was typed", ->
      beforeEach ->
        $('input.new-quote').val('')
        $('button.add-quote').click()

      it "does not add a quote to the list", ->
        $quotesList = $('ul.quote-list li')
        expect($quotesList.length).to.equal 0

      it "shows an alert", ->
        $alert = $('div.alert')
        expect($alert.is(':visible')).to.equal true

      describe "given that an alert is displayed", ->
        beforeEach ->
          $alert = $('div.alert')
          $alert.removeClass('hidden')
          expect($alert.is(':visible')).to.equal true
          $('input.new-quote').trigger('click')

        it "input.new-quote:focus hides the alert", ->
          $alert = $('div.alert')
          expect($alert.is(':visible')).to.equal false

  describe "button click: clear", ->
    beforeEach ->
      quotes = [33,44,55]
      for quote in quotes
        $('input.new-quote').val(quote)
        $('button.add-quote').click()
      $quotesList = $('ul.quote-list li')
      expect($quotesList.length).to.equal quotes.length
      $('button.clear-all-quotes').click()

    it "removes all quotes from the list", ->
      $quotesList = $('ul.quote-list li')
      expect($quotesList.length).to.equal 0
