const db = require('../database/dbConfig')

module.exports =
{
    getBooksByUserId,
    getDescriptionsByUserId,
    removeBook,
    removeDescription,
}

function getBooksByUserId(id)
{
    return db('users as u')
        .join('users-books as ub', 'ub.user_id', '=', 'u.id')
        .join('books as b', 'ub.book_id', '=', 'b.id')
        .select('b.title', 'b.authors')
        .where({'u.id': id})
            .then(booklist => booklist)
}
