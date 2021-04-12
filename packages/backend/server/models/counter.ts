
export {}

const name = 'Counter';
const tableName = 'counters';

const selectableProps = ['id', 'counter'];

const createGuts = require('../helpers/model-guts');


module.exports = (knex) => {
  const guts = createGuts({
    knex,
    name,
    tableName,
    selectableProps,
  });

  return {
    ...guts,
  };
};
