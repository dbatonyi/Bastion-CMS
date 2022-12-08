'use strict';

import { Model } from 'sequelize';

interface EntityAssignmentAttributes {
  EntityId: number;
  UserId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class EntityAssignment
    extends Model<EntityAssignmentAttributes>
    implements EntityAssignmentAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    EntityId!: number;
    UserId!: string;

    static associate(models: any) {
      // define association here
    }
  }
  EntityAssignment.init(
    {
      EntityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Entitys',
          key: 'id',
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'EntityAssignment',
    },
  );
  return EntityAssignment;
};
