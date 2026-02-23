const _key = Symbol("key");
const _title = Symbol("title");
const _body = Symbol("body");

export class Note {
	constructor(key, title, body) {
		this[_key] = key;
		this[title] = title;
		this[_body] = body;
	}

	getKey() {
		return this[_key];
	}

	getTitle() {
		return this[_title];
	}
	setTitle(newTitle) {
		this[_title] = newTitle;
	}

	getBody() {
		return this[_body];
	}
	setBosy(newBody) {
		this[_body] = newBody;
	}
}

export class AbstractNotesStore {
	async close() {}
	async create(key, title, body) {}
	async read(key) {}
	async update(key, title, body) {}
	async destroy(key) {}
	async keyList() {}
	async count() {}
}
