import {DataType , } from 'sequelize'

require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
})

export default (sequelize, DataTypes) => {
    const Prospects  = sequelize.define(
        'Propects',
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            typeDocument: DataTypes.STRING,
            document: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        },
    )
    return Prospects
}
