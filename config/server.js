module.exports = ({ env }) => ({
  host: env('HOST', 'fsstienda.1.us-1.fl0.io'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
