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
    console.log('a', descriptionList.length)
    for(let i = 0; i < descriptionList.length; i++)
    {
        console.log('b', descPlusB)
        let books = await getBooksByDescriptionID(descriptionList[i].id)
        // console.log({...el, books})
        console.log(books)
        descPlusB.push({...descriptionList[i], books})
    }

    // descriptionList.forEach(async el =>
    // {
    //     let books = await getBooksByDescriptionID(el.id)
    //     console.log({...el, books})
    //     descPlusB.push({...el, books})
    // })
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