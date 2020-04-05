import bcrypt from 'bcrypt-nodejs';

const saltInt = 10;

export default (sequelize, DataTypes) => {

	const fields = {
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	};
	
	const options = {
		hooks: {
			beforeCreate: async user => {
				const hash = await bcrypt.hash(user.password, saltInt);
				user.password = hash;
			}
		},
		instanceMethods: {
			validPassword: async function(password) {
				return await bcrypt.compare(password, this.password);
			}
		}
	};

	const User = sequelize.define('User', fields, options);

	User.prototype.validPassword = async function(password) {
		return bcrypt.compareSync(password, this.password);
	};

	User.prototype.toJSON = function() {
		const { email, username, createdAt, updatedAt } = this;
		return { email, username, createdAt, updatedAt };
	};

	return User;

}