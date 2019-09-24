exports.seed = function(knex, Promise)
{
    return knex('books')
    .insert(
        [
            {
                title: "Coffee Table Book About Coffee Tables",
                authors: "Cosmo Kramer"
            },
            {
                title: "Webster's Dictionary",
                authors: "Webster"
            },
            {
                title: "Javascript Data Structures and Algorithms",
                authors: "Sammie Bae"
            },
            {
                title: "Pathfinder 2nd Edition",
                authors: "Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter"
            },
        ]
    )
}