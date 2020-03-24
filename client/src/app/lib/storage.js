import { isObject, isString, keys } from './tools.js';

function Store(name) {
	this.store = {};
	this.store[name] = {};
}

Store.prototype.getItem = function(name) {
	return this.store[name];
};

Store.prototype.setItem = function(name, store) {
	this.store[name] = store;
};

export function resetBrowserLocalStorage() {
	localStorage.clear();
}

export class Storage {
	
	constructor(storeName) {
		this.storeName = storeName;

		try {
			const test = 'test';
			localStorage.setItem(test, test);
			localStorage.removeItem(test, test);
			this.store = window.localStorage;
		} catch(e) {
			this.store = new Store(storeName)
		}
	}
 
	get(prop, defaultValue) {
		const store = this.store.getItem(this.storeName);
		const object = isString(store) ? JSON.parse(store) : {};
		if (prop) {
			const value = object[prop];
			if (value === undefined) {
				this.update(prop, defaultValue);
				return defaultValue;
			} else {
				return value;
			}
		} else {
			return object;
		}
	}

	remove(property) {
		const store = this.get();
		if (isString(property)) {
			property.split(' ').forEach(prop => delete store[prop]);
		} else if (isObject(property)) {
			for (var prop in property) {
				delete store[prop];
			}
		}
		this.set(store);
	}

	set(store) {
		if (isObject(store)) store = JSON.stringify(store);
		this.store.setItem(this.storeName, store);
	}

	hasContents() {
		const store = this.get();
		if (isObject(store)) {
			return store && !!keys(store).length;
		}
		return store && store.length;
	}

	update(property, value) {
		const store = this.get();
		if (isObject(property)) {
			for (let prop in property) {
				store[prop] = property[prop];
			}
		} else {
			store[property] = value;
		}
		this.set(store);
	}

}
