/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('answers', (table) => {
    table.increments('answers_id').primary()
    table.integer('question_id')
    table.string('choice_1')
    table.string('choice_2')
    table.string('choice_3')
    table.string('choice_4')
    table.string('right_choice')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('answers')
}
