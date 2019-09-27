exports.seed = function(knex, Promise)
{
    return knex('users-books')
    .insert(
        [
            {
                user_id: 1,
                book_id: 3,
                read: false
            },
            {
                user_id: 1,
                book_id: 2,
                read: false
            },
            {
                user_id: 2,
                book_id: 1,
                read: false
            },
            {
                user_id: 2,
                book_id: 4,
                read: false
            },
            {
                user_id: 2,
                book_id: 3,
                read: false
            },
        ]
    )
}