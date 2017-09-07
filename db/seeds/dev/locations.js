
exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(() => {
      return Promise.all([
        knex('locations').insert([
          {
            name: 'Denver',
            lat: 39.742043,
            long: -104.991531
          },
          {
            name: 'Boston',
            lat: 42.364506,
            long: -71.038887
          }
        ])
      ]);
    });
};
