'use strict';
//Bypass for redeclare block-scope ts error
export {};

import { Knex } from "knex";
const fs = require('fs');
const path = require('path');
const knex = require('../../config/database');


//Function to read all the files within this directory and exports as properties as an object
const getModelFiles = (dir) =>
  fs
    .readdirSync(dir)
    .filter((file) => file.indexOf('.') !== 0 && file !== 'index.ts' && file !== 'index.js')
    .map((file) => path.join(dir, file));

//Grabs all files within this directory
const files = getModelFiles(__dirname)

type Model = (...args: any) => any

interface User {
  name : string;
  tableName : string;
  selectableProps: string[];
  timeout: number;
  create: () => any;
  findAll: () => any;
  find: () => any;
  findOne: () => any;
  findById: () => any;
  update: () => any;
  destroy: () => any;
  verify: () => any;
}

//Creates an object for all models with its associate methods 
const models = files.reduce((modelsObj, fileName) => {
  const initModel  = require(fileName) as (...args: any) => any
  const model  = initModel(knex)

  if(model) modelsObj[model.name] = model

  return modelsObj

}, {})

module.exports = models

