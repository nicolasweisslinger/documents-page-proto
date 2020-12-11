module.exports = {
  client: {
    service: {
      name: 'brigad',
      url: 'https://services.brigad.tools/env-514/gateway/graphql',
      includes: [`${__dirname}/packages/**/*.gql`],
      excludes: ['**/node_modules'],
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTlkYTcxNTYtZTQ0YS00Yjg0LWI1OGEtNTk3MDNmMGY1YmI0IiwidHlwZSI6Im1hbmFnZXIiLCJpYXQiOjE2MDEwNDA4OTF9.VCXuptZOiT30t0kcqEhodxuCBeTfeR85WMXOLYeLqvo',
      },
    },
    clientSchemaDirectives: ['client', 'rest'],
  },
};
