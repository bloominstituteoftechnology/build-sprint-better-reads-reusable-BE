exports.seed = function(knex, Promise)
{
    return knex('books')
    .insert(
        [
            {
                title: "Coffee Table Book About Coffee Tables",
                authors: "Cosmo Kramer",
                rating: 5,
                ISBN: "658716874168"
            },
            {
                title: "Webster's Dictionary",
                authors: "Webster",
                rating: 2.5,
                ISBN: "5758646574647"
            },
            {
                title: "Javascript Data Structures and Algorithms",
                authors: "Sammie Bae",
                rating: 1.5,
                ISBN: "574554681541"
            },
            {
                title: "Pathfinder 2nd Edition",
                authors: "Logan Bonner, Jason Buhlmahn, Stephen Radney-MacFarland, and Mark Seifter",
                rating: 4,
                ISBN: "546587465478484"
            },
            {
                title: "Harry Potter and the Half-Blood Prince",
                authors: "J.K. Rowling",
                rating: 5,
                ISBN: "4505406540650"
            },
            {
                title: "Red Planet",
                authors: "Robert Heinlien",
                rating: 4.5,
                ISBN: "354056405640351"
            },
            {
                title: "Calculus",
                authors: "Michael Spivak",
                rating: 3.5,
                ISBN: "565156416515648"
            },
            {
                title: "Quantum Theory",
                authors: "David Bohm",
                rating: 3,
                ISBN: "6546878498468784"
            },
        ]
    )
}