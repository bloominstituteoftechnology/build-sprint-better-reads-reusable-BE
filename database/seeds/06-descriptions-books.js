exports.seed = function(knex, Promise)
{
    return knex('descriptions-books')
    .insert(
        [
            {
                description_id: 1,
                book_id: 1,
            },
            {
                description_id: 1,
                book_id: 2,
            },
            {
                description_id: 2,
                book_id: 2,
            },
            {
                description_id: 2,
                book_id: 4,
            },
            {
                description_id: 3,
                book_id: 3,
            },
            {
                description_id: 4,
                book_id: 4,
            },
        ]
    )
}