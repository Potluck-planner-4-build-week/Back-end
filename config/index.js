module.exports = {
    PORT: process.env.PORT || 9000,
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 6,
    NODE_ENV: process.env.NODE_ENV || 'development',
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'supersecret'
}