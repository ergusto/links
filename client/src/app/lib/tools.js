export function toString(obj) {
	return Object.prototype.toString.call(obj);
}

export function isObject(obj) {
	return toString(obj) === '[object Object]';
}

export function isString(obj) {
	return toString(obj) === '[object String]';
}

export function isNumber(obj) {
	return toString(obj) === '[object Number]';
}

export function isArray(obj) {
	return toString(obj) === '[object Array]';
}

export function isFunction(obj) {
	return obj && typeof obj === 'function';
}

export function isBoolean(obj) {
	return typeof(obj) === typeof(true);
}

export function hasOwnProperty(obj, property) {
	return Object.prototype.hasOwnProperty.call(obj, property);
}

export function keys(obj) {
	return Object.keys(obj);
}

export function values(obj) {
	return keys(obj).map(key => obj[key]);
}

export function makeId() {
	return Math.random().toString(36).substr(2, 9);
}

export function validateUrl(url) {
	const re = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
	const regex = new RegExp(re);
	return regex.test(url);
}

export function validateImageUrl(url) {
    if (isString(url)) {
        return validateUrl(url) && ( url.match(/\.(jpeg|jpg|gif|png)$/) !== null );
    }
    return false;
}

export function prependHttp(str) {
	if (!/^https?:\/\//i.test(str)) {
	    str = 'http://' + str;
	}
	return str;
}

export function validateAlphanumeric(str) {
	if(/[^a-zA-Z0-9]/.test(str)) {
       return false;
    }
    return true;     
}

export function forIn(obj, fn, ctx) {
	ctx = ctx || obj;
	for (let property in obj) {
		if (hasOwnProperty(obj, property)) {
			fn.call(ctx, property, obj[property]);
		}
	}
}

export function objectSize(obj) {
	if (isObject(obj)) {
		let size = 0, key;
		for (key in obj) {
			if (hasOwnProperty(obj, key)) size++;
		}
		return size;
	}
}

export function endsWith(str, suffix) {
    return str.slice(-suffix.length) === suffix;
}

export function includes(str, substring) {
	return str.indexOf(substring) !== -1;
}

export function setParam(url, param, value) {
	const str = encodeURIComponent(param) + '=' + encodeURIComponent(value) + '&';
	return url += str;
}

export function setParams(url, params) {
	let str;
	const isArr = isArray(params);
	const isObj = isObject(params);
	if ((isObj && objectSize(params)) || (isArr &&  params.length)) {
		if (!endsWith(url, '?')){
			url += '?';
		}
		if (isObj) {
			forIn(params, (property, value) => {
				str = encodeURIComponent(property) + '=' + encodeURIComponent(value) + '&';
				url += str;
			});
		} else if (isArr) {
			let param;
			for (let i = 0, l = params.length; i < l; i++) {
				param = params[i];
				// eslint-disable-next-line
				forIn(param, (property, value) => {
					str = encodeURIComponent(property) + '=' + encodeURIComponent(value) + '&';
					url += str;
				});
			}
		}
		if (endsWith(url, '&')) 
			url = url.slice(0, -1);
	}
	return url;
}

export function getUrlDetails(url) {
	const anchor = document.createElement('a');
	anchor.href = url;
	const { hostname, pathname, protocol } = anchor;
	return { hostname, pathname, protocol };
}

export function removeProtocol(url) {
	return url.replace(/^https?:\/\//,'');
}

export function removeWWWSubdomain(url) {
	return url.replace(/^(www\.)/,"");
}

export function formatDomain(url) {
	return removeWWWSubdomain(removeProtocol(url));
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
	// eslint-disable-next-line
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	// eslint-disable-next-line
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function trim(text) {
	if (isString(text)) {
		return text.replace(/^-+/, '').replace(/-+$/, '');
	}
	return text;
}

export function redirect(url) {
	if (window.location) {
		window.location = url;
	}
}

export function splitBySpacesUnlessInQuotePair(text) {
	return text.split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
}

export function removeFalsyValues(obj) {
	const result = {};
	Object.keys(obj).forEach(prop => {
		const value = obj[prop];
		if (isBoolean(value) || isNumber(value) || (isString(value) && value.length)) {
			result[prop] = obj[prop];
		}
	});
	return result;
}

export function objectEquivalence(a, b) {
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);

	if (aProps.length !== bProps.length) {
		return false;
	}

	for (var i = 0; i < aProps.length; i++) {
		var propName = aProps[i];
		if (a[propName] !== b[propName]) {
			return false;
		}
	}

	return true;
}

// Returns true if all properties in object match the same properties in objectb.
// They don't have to be identical
export function objectNaiveEquivalence(object, objectb) {
	var result = true;
	for (var prop in object) {
		if (object[prop] !== objectb[prop]) {
			result = false;
			break;
		}
	}
	return result;
}

// eslint-disable-next-line
export const classnames = (...args) => args.map(arg => {
	if (isString(arg) || isNumber(arg)) return arg;

	if (isArray(arg)) return classnames.apply(null, arg);

	if (isObject(arg)) {
		// eslint-disable-next-line
		return classnames.apply(null, Object.keys(arg).map(key => {
			if (arg[key]) return key;
		}));
	}
}).join(' ').trim();

export function validateEmail(email) {
	// eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function parseServerErrors(server_errors) {
	let error = true;
	const errors = {};

	const non_field_errors = server_errors['non_field_errors'];

	if (non_field_errors) {
		delete server_errors['non_field_errors'];
		error = non_field_errors[0];
	}

	if (Object.keys(server_errors).length) {
		for (var prop in server_errors) {
			errors[prop] = server_errors[prop][0];
		}
	}

	return { error, errors };
}
