'use strict'; 
module.exports = (sequelize, DataTypes) => {
const skills = sequelize.define('skills', {
baseSkills: DataTypes.STRING
}, {});
skills.associate = function(models){
    skills.belongsTo(models.superheros);
    timestamps: false
}
return skills; 
};