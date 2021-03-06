/** General Configurations Like PORT, HOST names and etc... */
export default {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8889,
  appUrl: process.env.APP_URL || 'http://localhost:8889',
  apiUrl: process.env.API_URL || 'http://localhost:4000',
  karmaPort: 9876,

  poniverseClientId: process.env.PONIVERSE_CLIENT_ID,
  poniverseClientSecret: process.env.PONIVERSE_CLIENT_SECRET,
  poniverseRedirectUri: process.env.PONIVERSE_REDIRECT_URI || 'http://localhost:8889/auth/oauth',

  // This part goes to React-Helmet for Head of our HTML
  app: {
    head: {
      title: 'Equestria.tv',
      titleTemplate: 'Equestria.tv | %s',
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'React Redux Typescript' },
      ],
    },
  },
};
