'use strict'

const {expect} = require('chai')
const {describe, it} = require('mocha')
const logFormatter = require('../log-formatter')

describe('Log formatter', function () {
  it('Brighter log', function () {
    expect(logFormatter.bright).to.equal('\x1b[1m')
  })
  it('Red background', function () {
    expect(logFormatter.bg.red).to.equal('\x1b[41m')
  })
  it('White font color', function () {
    expect(logFormatter.fg.white).to.equal('\x1b[37m')
  })
  it('Reset Formatter', function () {
    expect(logFormatter.reset).to.equal('\x1b[0m')
  })
})
