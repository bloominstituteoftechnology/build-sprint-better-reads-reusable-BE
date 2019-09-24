const db = require('../database/dbConfig')

module.exports =
{
    getBooksByUserId,
    getDescriptionsByUserId,
    // removeBook,
    // removeDescription,
    getUserWithBooksAndDesc,
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

function getDescriptionsByUserId(id)
{
    return db('users as u')
        .join('users-descriptions as ud', 'ud.user_id', '=', 'u.id')
        .join('descriptions as d', 'ud.description_id', '=', 'd.id')
        .select('d.description')
        .where({'u.id': id})
            .then(descriptionList => descriptionList)
}

async function getUserWithBooksAndDesc(id)
{
    const user = await db('users').where({id}).first()
    const booklist = await getBooksByUserId(id)
    const descriptionList = await getDescriptionsByUserId(id)

    return {
        username: user.username,
        id: user.id,
        books: booklist,
        descriptions: descriptionList
    }
}

// return db('users')
// .where({id})
// .first()
// .then(user =>
//     {
//         return getBooksByUserId(id)
//             .then(booklist =>
//                 {
//                     return getDescriptionsByUserId(id)
//                         .then(descriptionList =>
//                             {
//                                 return {
//                                     username: user.username, 
//                                     id: user.id,
//                                     books: booklist,
//                                     descriptions: descriptionList
//                                 }
//                             })
//                 })
//     })
