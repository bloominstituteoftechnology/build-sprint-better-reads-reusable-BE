const bcryptjs = require('bcryptjs')

exports.seed = function(knex, Promise)
{
    return knex('users')
    .insert(
        [
            {
                username: "bob",
                password: bcryptjs.hashSync("password", 14)
            },
            {
                username: "amy",
                password: bcryptjs.hashSync("123", 14)
            }
        ]
    )
}