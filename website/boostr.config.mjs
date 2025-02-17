export default () => ({
  type: 'application',

  name: 'CodebaseShow',
  description:
    'A collection of codebase examples using various languages, libraries, and frameworks to help you create your next project.',

  services: {
    frontend: './frontend',
    backend: './backend',
    database: './database'
  },

  environment: {
    EMAIL_ADDRESS: 'hello@codebase.show'
  },

  stages: {
    production: {
      environment: {
        NODE_ENV: 'production'
      }
    }
  }
});
