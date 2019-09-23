exports.seed = function(knex, Promise)
{
    return knex('users-descriptions')
    .insert(
        [
            {
                user_id: 1,
                description_id: 3
            },
            {
                user_id: 1,
                description_id: 2
            },
            {
                user_id: 2,
                description_id: 1
            },
            {
                user_id: 2,
                description_id: 4
            },
            {
                user_id: 2,
                description_id: 3
            },
        ]
    )
}