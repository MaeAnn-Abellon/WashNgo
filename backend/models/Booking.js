// models/Booking.js
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      serviceId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Services',
          key: 'id',
        },
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      kilo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Booking.associate = (models) => {
      Booking.belongsTo(models.Service, {
        foreignKey: 'serviceId',
      });
    };
  
    return Booking;
  };
  