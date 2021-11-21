const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require("react-dom");

exports.up = function(knex) {
    return knex.schema
    .createTable("lessons", tbl => {
        tbl.increments();
        tbl.text("name", 128).notNullable();
        tbl.timestamps(true,true);
    })
    .createTable("messages", tbl => {
        tbl.increments();
        tbl
            .string("sender")
            .notNullable()
            .index();
        tbl.text("text").notNullable();
        tbl.timestamps(true,true);

        tbl
            .integer("lessons_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("lessons")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("messages").dropTableIfExists("lessons");
}