module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            contains: ' ',
            len: [1]
        }
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Favorite.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Favorite.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Favorite;
  };
  