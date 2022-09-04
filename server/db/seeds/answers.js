/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('answers').del()
  await knex('answers').insert([
    {
      answers_id: 101,
      question_id: 1,
      answers: ['Pinot Gris', 'Chardonnay', 'Pinot Noir', 'Riesling'],
      right_choice: 'Pinot Noir',
    },
    {
      answers_id: 102,
      question_id: 2,
      answers: ['Pinot Gris', 'Sauvignon Blanc', 'Pinot Noir', 'Syrah'],
      right_choice: 'Sauvignon Blanc',
    },
    {
      answers_id: 103,
      question_id: 3,
      answers: ['North Canterbury', 'Auckland', 'Nelson', 'Gisbourne'],
      right_choice: 'Gisbourne',
    },
    {
      answers_id: 104,
      question_id: 4,
      answers: ['716', '834', '297', '1022'],
      right_choice: '716',
    },
    {
      answers_id: 105,
      question_id: 5,
      answers: ['Malborough', "Hawke's Bay", 'Central Otago', 'Wairarapa'],
      right_choice: "Hawke's Bay",
    },
    {
      answers_id: 106,
      question_id: 6,
      answers: ['Pinot Noir', 'Chardonnay', 'Sauvignon Blanc', 'Syrah'],
      right_choice: 'Sauvignon Blanc',
    },
    {
      answers_id: 107,
      question_id: 7,
      answers: ['Montana', 'Left Bank', 'Jules Taylor', 'Te Mata'],
      right_choice: 'Montana',
    },
    {
      answers_id: 108,
      question_id: 8,
      answers: ['Pinot Noir', 'Reisling', 'Sauvignon Blanc', 'Pinot Gris'],
      right_choice: 'Pinot Noir',
    },
    {
      answers_id: 109,
      question_id: 9,
      answers: ['Central Otago', 'Wairarapa', 'Northland', 'North Canterbury'],
      right_choice: 'Northland',
    },
    {
      answers_id: 110,
      question_id: 10,
      answers: ['Chardonnay', 'Reisling', 'Sauvignon Blanc', 'Pinot Gris'],
      right_choice: 'Chardonnay',
    },
  ])
}
