const MONGO_OPTIONS = {

}

export const environment = {
    server: {
        port: process.env.SERVER_PORT || 3000,
        localesPath: './dist/images/locales/'
    },
    db: { url: process.env.DB_URL || 'mongodb+srv://turistas:turistas@turistas.jpes4.mongodb.net/turistas?retryWrites=true&w=majority' },
    security: {
        saltRounds: process.env.SALT_ROUNDS || 10,
        secret: process.env.SECRET || '3904a66849cee880d8014f7acaafe8d9',
        cors:
        {
            origin: 'http://localhost:4200/',
            optionsSuccessStatus: 200
        }
    }
}