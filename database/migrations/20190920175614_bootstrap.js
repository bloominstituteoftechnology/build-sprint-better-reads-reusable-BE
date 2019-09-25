
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl =>
    {
        tbl.increments()
        tbl.string('username', 128).notNullable().unique()
        tbl.string('password', 128).notNullable()
    })
    .createTable('books', tbl =>
    {
        tbl.increments()
        tbl.string('title', 256).notNullable()
        tbl.string('authors', 256).notNullable()
    })
    .createTable('descriptions', tbl =>
    {
        tbl.increments()
        tbl.string('description', 512).notNullable()
    })
    .createTable('users-books', tbl =>
    {
        tbl.boolean('read').notNullable().defaultTo(false)
        tbl
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('book_id')
            .unsigned()
            .references('id')
            .inTable('books')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.primary(['user_id', 'book_id'])
    })

    .createTable('users-descriptions', tbl =>
    {
        tbl
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('description_id')
            .unsigned()
            .references('id')
            .inTable('descriptions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.primary(['user_id', 'description_id'])
    })
    .createTable('descriptions-books', tbl =>
    {
        tbl
            .integer('description_id')
            .unsigned()
            .references('id')
            .inTable('descriptions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('book_id')
            .unsigned()
            .references('id')
            .inTable('books')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.primary(['description_id', 'book_id'])
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('descriptions-books')
        .dropTableIfExists('users-descriptions')
        .dropTableIfExists('users-books')
        .dropTableIfExists('descriptions')
        .dropTableIfExists('books')
        .dropTableIfExists('users')
};
