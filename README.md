# Next Admin

Dashboard with mongodb and nextjs 14

![dashboard](images/dashboard-desktop.png)


## Development

### Enviroment

#### Env Defaults

```env
MONGO_URL=mongodb://mongo:27017/db
NEXT_PUBLIC_ITEM_PER_PAGE=2
```

> Defaults of defined environments in `app/lib/settings.js`

#### Env Production

```
AUTH_SECRET=$(openssl rand -base64 32)
AUTH_URL=https://yoursite.com/api/auth
```

> **Tip**: If changes localhost port use: `AUTH_URL=http://localhost:3001/api/auth`
> Port default is **3000**


### Start in development
```sh
# After creating .env file in project root
docker-compose up
```

## References

### Mongodb on production

Use mongodb from https://account.mongodb.com/account/login

### Video tutorial

Watch to more informations: https://youtu.be/cBg6xA5C60s?si=8fsLY0iLb95ALNoo
