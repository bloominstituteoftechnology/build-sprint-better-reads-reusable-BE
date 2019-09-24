exports.seed = function(knex, Promise)
{
    return knex('users-books')
    .insert(
        [
            {
                user_id: 1,
                book_id: 3
            },
            {
                user_id: 1,
                book_id: 2
            },
            {
                user_id: 2,
                book_id: 1
            },
            {
                user_id: 2,
                book_id: 4
            },
            {
                user_id: 2,
                book_id: 3
            },
        ]
    )
}