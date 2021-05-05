import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // Providers.Auth0({
    //   domain: process.env.AUTH0_DOMAIN,
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    // }),
  ],
  // pages: {
  //   signIn: '/signin',
  // },
  database: process.env.DATABASE_URL,
  // database: {
  //   type: "mongodb",
  //   port: process.env.DATABASE_PORT,
  //   host: process.env.DATABASE_HOST,
  //   database: process.env.DATABASE_NAME,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   // ssl: {
  //   //   rejectUnauthorized: false,
  //   //   ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString()
  //   // },
  // }
};

export default (req, res) => NextAuth(req, res, options);