module.exports = (sequelize, DataTypes) => {

	const Link = sequelize.define('Link', {
		title: DataTypes.STRING,
		url: DataTypes.STRING,
		description: DataTypes.STRING,
		modified: DataTypes.DATE,
		created: DataTypes.DATE
	}, {});

	Link.associate = function(models) {
		// associations can be defined here
	};

	return Link;

};