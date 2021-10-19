# next-mui-auth
Create a NextJS app using Material UI 5 and NextAuth.js

Merge https://github.com/cg2p/mui5-next and https://github.com/cg2p/next-base-app

## Steps
1. Clone mui5-next
2. Add in modules for auth and `npm install`
```
    "next-auth": "^4.0.0-beta.4",
    "nodemailer": "^6.7.0",
    "prop-types": "^15.7.2",
    "sqlite3": "^4.2.0"
```
3. copy in env.local
4. copy in api/auth
5. check _document
6. merge _app
7. refactor out Layout .. for user pages (containers Header, Footer etc)
later we will have AdminLayout


