/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {
      question_id: 1,
      question: 'Australia',
      is_active: false,
    },
    {
      question_id: 2,
      question: 'Australia',
      is_active: false,
    },
  ])
}
