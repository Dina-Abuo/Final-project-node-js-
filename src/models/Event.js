const { DataTypes } = require( "sequelize" );
const sequelize = require( "./sequelize" );

const Event = sequelize.define( 'Event', {
    title: {
        type: DataTypes.STRING( 50 ),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    ticketPrice: {
        type: DataTypes.DECIMAL
    },
    date: {
        type: DataTypes.DATE,
    },
    image: {
        type: DataTypes.STRING( 50 ),
        allowNull: true
    },
} );

module.exports = Event;