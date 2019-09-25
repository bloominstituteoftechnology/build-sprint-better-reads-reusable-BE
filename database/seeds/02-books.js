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
            {
                title: "Harry Potter and the Half-Blood Prince",
                authors: "J.K. Rowling"
            },
            {
                title: "Red Planet",
                authors: "Robert Heinlien"
            },
            {
                title: "Calculus",
                authors: "Michael Spivak"
            },
            {
                title: "Quantum Theory",
                authors: "David Bohm"
            },
        ]
    )
}