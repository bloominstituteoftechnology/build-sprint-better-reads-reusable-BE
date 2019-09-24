exports.seed = function(knex, Promise)
{
    return knex('descriptions')
    .insert(
        [
            {
                description: "A book to set on a table, and maybe it's self-referential"
            },
            {
                description: "A book to tell you the meanings of words"
            },
            {
                description: "A book about some kind of Javascript structures or methods for problem solving"
            },
            {
                description: "A book about playing games with dragons and such"
            },
        ]
    )
}