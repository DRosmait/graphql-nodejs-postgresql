const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.String,
        },
    });

    User.assosiate = models => {
        User.hasMany(models.Message, { onDelete: 'CASCADE' });
    };

    return User;
};

export default user;