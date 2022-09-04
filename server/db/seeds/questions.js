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
      question:
        'What is the name of the grape variety that Central Otago produces the most of?',
      is_active: false,
      //Pinot noir
    },
    {
      question_id: 2,
      question:
        'What type of wine variety is most commonly grown in the Marlborough Region?',
      is_active: false,
      //Sav
    },
    {
      question_id: 3,
      question:
        'What wine region is known for growing the grape variety Gerwurtztraminer?',
      is_active: false,
      //Gisbourne
    },
    {
      question_id: 4,
      question:
        'How many registered wineries are there in New Zealand as of 2020?',
      is_active: false,
      //716
    },
    {
      question_id: 5,
      question:
        'The grape variety Cabernet Sauvignon is most commonly grown in which wine region?',
      is_active: false,
      //Hawke's Bay
    },
    {
      question_id: 6,
      question:
        'What is the most commonly planted grape variety in New Zealand?',
      is_active: false,
      //Sav
    },
    {
      question_id: 7,
      question:
        'What was the first wine brand to set up in Malrlborough in 1973?',
      is_active: false,
      //Montana
    },
    {
      question_id: 8,
      question:
        'What is the main grape variety produced in the Wairarapa Region?',
      is_active: false,
      //Pinot Noir
    },
    {
      question_id: 9,
      question: 'What region was the first vine planted in?',
      is_active: false,
      //Northland
    },
    {
      question_id: 10,
      question: 'What is the main grape variety produced in Northland?',
      is_active: false,
      //Chardonnay
    },
  ])
}
