export class StorageService {
	static saveItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	static removeItem(key) {
		localStorage.removeItem(key)
	}

	static getItem(key) {
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : null
	}
}
