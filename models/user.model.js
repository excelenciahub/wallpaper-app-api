module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return User;
};