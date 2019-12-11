
exports.up = function(knex) {
  return knex.schema
    .createTable('scheme', tbl => {
      tbl.increments();
      tbl.text('scheme_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('step', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('scheme')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step')
    .dropTableIfExists('scheme');
};
