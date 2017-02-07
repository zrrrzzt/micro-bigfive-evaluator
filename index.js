'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const calculateScore = require('./lib/calculate-score')

module.exports = async (req, res) => {
  let result = {}
  const {pathname, query} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query

  // result = calculateScore({template: compileQuestions({language: data.lang, items: data.items}), answers: data.answers})
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
