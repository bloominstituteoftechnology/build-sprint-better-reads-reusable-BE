const db = require('../database/dbConfig')

module.exports =
{
    getBooksByUserId,
    getDescriptionsByUserId,
    getUserWithBooksAndDesc,
    randomBooks,
    addBook,
    addUserDescWithBookResults,
    addBookByUserId,
    removeBookByUserId,
    updateBookByUserId,
    removeDescByUserId
}

function getBooksByUserId(id)
{
    return db('users as u')
        .join('users-books as ub', 'ub.user_id', '=', 'u.id')
        .join('books as b', 'ub.book_id', '=', 'b.id')
        .select('b.title', 'b.authors', 'b.id', 'b.rating', 'b.ISBN', 'ub.read')
        .where({'u.id': id})
            .then(booklist => booklist)
}

async function getBooksByDescriptionID(id)
{
    return db('books as b')
        .join('descriptions-books as dbooks', 'b.id', '=', 'dbooks.book_id')
        .select('b.id', 'b.title', 'b.authors', 'b.rating', 'b.ISBN')
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
    return bookList
}

async function addDescription(description)
{
    let desc_id = await db('descriptions').insert(description, 'id')
    return desc_id
}

async function addBook(book)
{
    //TODO: check that book isn't already in table, via isbn?
    let existantBook = await db('books').where({'title': book.title}).first()
    if(existantBook) return existantBook.id
    else 
    {
        let [book_id] = await db('books').insert(book, 'id')
        return book_id
    }
}

async function addDescriptionBook(desc_id, book_id)
{
    await db('descriptions-books').insert({'description_id': desc_id, 'book_id': book_id})
}

async function addUserDescription(user_id, desc_id)
{
    await db('users-descriptions').insert({'user_id': user_id, 'description_id': desc_id})
}

async function addUserDescWithBookResults(desc, aBooks, userId)
{
    let [descId] = await addDescription({description: desc})
    await addUserDescription(userId, descId)
    for(i = 0; i < aBooks.length; i++)
    {
        let book_id = await addBook(aBooks[i])
        addDescriptionBook(descId, book_id)
    }
    return true
}

async function addBookByUserId(userId, bookId)
{
    let bookInList = await db('users-books').where({'user_id': userId, 'book_id': bookId}).first()
    if (bookInList) return 0
    else 
    {
        await db('users-books').insert({'user_id': userId, 'book_id': bookId})
        return bookId
    }

}

async function removeBookByUserId(userId, bookId)
{
    let bookInList = await db('users-books').where({'user_id': userId, 'book_id': bookId}).first()
    if (!bookInList) return {message: 'Book is not in list', code: 404}
    else 
    {
        await db('users-books').where({'user_id': userId, 'book_id': bookId}).del()
        return {message: `Deleted book ${bookId} from user ${userId}`, code: 200}
    }
}

async function updateBookByUserId(userId, bookId, changes)
{
    let bookInList = await db('users-books').where({'user_id': userId, 'book_id': bookId}).first()
    if (!bookInList) return {message: 'Book is not in list', code: 404}
    else 
    {
        await db('users-books').where({'user_id': userId, 'book_id': bookId}).update(changes)
        return {message: `Updated book ${bookId} for user ${userId}`, code: 200}
    }
}

async function removeDescByUserId(userId, descriptionId)
{
    let descInList = await db('users-descriptions').where({'user_id': userId, 'description_id': descriptionId}).first()
    if (!descInList) return {message: 'Description is not in list', code: 404}
    else 
    {
        await db('users-descriptions').where({'user_id': userId, 'description_id': descriptionId}).del()
        return {message: `Deleted description ${descriptionId} from user ${userId}`, code: 200}
    }
}