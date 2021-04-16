'use strict';
export {};

const bcrypt = require('bcrypt');
// const createGuts = require('../helpers/model-guts');

const name = 'User';
const tableName = 'users';

const selectableProps = ['id', 'username', 'email', 'updated_at', 'created_at'];
const timeout = 1000;
// Bcrypt functions used for hashing password and later verifying it.
const SALT_ROUNDS = 12;
const hashPassword = (password) => bcrypt.hash(password, SALT_ROUNDS);
const verifyPassword = (password, hash) => bcrypt.compare(password, hash);

// Always perform this logic before saving to db. This includes always hashing
// the password field prior to writing so it is never saved in plain text.
const beforeSave = (user) => {
  if (!user.password) return Promise.resolve(user);

  // `password` will always be hashed before being saved.
  return hashPassword(user.password)
    .then((hash) => ({ ...user, password: hash }))
    .catch((err) => `Error hashing password: ${err}`);
};

module.exports = (knex) => {
  // Augment default `create` function to include custom `beforeSave` logic.
  const create = (props) => beforeSave(props).then((user) => knex.create(user));

  const verify = (username, password) => {
    const matchErrorMsg = 'Username or password do not match';

    knex
      .select()
      .from(tableName)
      .where({ username })
      .timeout(timeout)
      .then((user) => {
        if (!user) throw matchErrorMsg;
        return user;
      })
      .then((user) =>
        Promise.all([user, verifyPassword(password, user.password)])
      )
      .then(([user, isMatch]) => {
        if (!isMatch) throw matchErrorMsg;

        return user;
      });
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

  const destroy = (id) =>
    knex.del().from(tableName).where({ id }).timeout(timeout);

  return {
    name,
    tableName,
    selectableProps,
    timeout,
    create,
    verify,
    findAll,
    findById,
    update,
    destroy,
  };
};
