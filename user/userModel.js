const db = require('../database/dbConfig')

module.exports =
{
    getBooksByUserId,
    getDescriptionsByUserId,
    // removeBook,
    // removeDescription,
    getUserWithBooksAndDesc,
    randomBooks,
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

async function getBooksByDescriptionID(id)
{
    return db('books as b')
        .join('descriptions-books as dbooks', 'b.id', '=', 'dbooks.book_id')
        .select('b.title')
        .where({'dbooks.description_id': id})
}

async function getDescriptionsByUserId(id)
{
    let descriptionList = await db('users as u')
        .join('users-descriptions as ud', 'ud.user_id', '=', 'u.id')
        .join('descriptions as d', 'ud.description_id', '=', 'd.id')
        .select('d.description', 'd.id')
        .where({'u.id': id})

    
    let descPlusB = []
    for(let i = 0; i < descriptionList.length; i++)
    {
        let books = await getBooksByDescriptionID(descriptionList[i].id)
        descPlusB.push({...descriptionList[i], books})
    }

    return descPlusB
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

//TODO: replace this with actual DS thing maybe
async function randomBooks()
{
    const books = await db('books')
    const randomBook = arr =>
    {
        let ind = Math.floor(Math.random()*arr.length)
        return arr.splice(ind, 1)[0]
    }
    let bookList = []
    for(let i=0; i<5; i++)
    {
        bookList.push(randomBook(books))
    }
    console.log(bookList)
    return bookList
}