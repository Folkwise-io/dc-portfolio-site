export {};

const name = 'Counter';
const tableName = 'counters';
const selectableProps = ['id', 'counter'];
const timeout = 1000;

module.exports = (knex) => {
  const create = (props) => {
    delete props.id; // not allowed to set `id`

    return knex
      .insert(props)
      .returning(selectableProps)
      .into(tableName)
      .timeout(timeout);
  };

  const findAll = () =>
    knex.select(selectableProps).from(tableName).timeout(timeout);

  const findById = (id) =>
    knex.select(selectableProps).from(tableName).where({ id }).timeout(timeout);

  const update = (id, props) => {
    delete props.id; // not allowed to set `id`

    return knex
      .update(props)
      .from(tableName)
      .where({ id })
      .returning(selectableProps)
      .timeout(timeout);
  };

  return {
    name,
    tableName,
    selectableProps,
    timeout,
    create,
    findAll,
    findById,
    update,
  };
};

