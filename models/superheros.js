'use strict'; 
module.exports = (sequelize, DataTypes) => {
const superheros = sequelize.define('superheros', {
name: DataTypes.STRING,
country: DataTypes.STRING,
age : DataTypes.INTEGER
}, {});
    superheros.associate = function(models) {
        superheros.hasMany(models.skills);
        timestamps: false
}
return superheros; 
}