const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Comment cannot be empty",
        },
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: null,
      references: {
        model: "post",
        key: "id",
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        isAlphanumeric: true
      }
    },
    created_at: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "comment",
  }
);
module.exports = Comment;
