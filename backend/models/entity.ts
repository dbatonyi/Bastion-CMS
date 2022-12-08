'use strict';

import { Model } from 'sequelize';

interface EntityAttributes {
  id: number;
  title: string;
  status: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Entity extends Model<EntityAttributes> implements EntityAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    title!: string;
    status!: string;

    static associate(models: any) {
      // define association here
      Entity.belongsToMany(models.User, {
        through: 'EntityAssignments',
      });
    }
  }
  Entity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Entity',
    },
  );
  return Entity;
};
