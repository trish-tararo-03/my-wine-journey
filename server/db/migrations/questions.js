/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('question_id').primary()
    table.string('question')
    table.boolean('is_active')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  // return knex.schema.dropTable('questions')
}
