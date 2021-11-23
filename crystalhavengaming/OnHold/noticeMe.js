const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require('../util/database')

const NoticeMe = sequelize.define('notice_me', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
    },
    reply: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    addedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { paranoid: true, })

module.exports = NoticeMe;
