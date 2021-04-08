'use strict';

const fs = require('fs');
const path = require('path');
const knex = require('../../config/database');

//read all the files within this directory and exports as properties as an object
const getModelFiles = (dir) =>
  fs
    .readdirSync(dir)
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
    .map((file) => path.join(dir, file));

const files = getModelFiles(__dirname)

const models = files.reduce((modelsObj, fileName) => {
  const initModel = require(fileName)
  const model = initModel(knexgit)

  if(model) modelsObj[model.name] = model

  return modelsObj

}, {})

module.exports = models

