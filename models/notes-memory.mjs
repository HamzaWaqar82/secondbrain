import { AbstractNotesStore, Note } from "./notes.mjs";

const notes = [];

export class InMemoryNotesStore extends AbstractNotesStore {
	async close() {}

	async update(newKey, newTitle, newBody) {
		notes[key] = new Note(newKey, newTitle, newBody);
		return notes[key];
	}

	async create(key, title, body) {
		notes[key] = new Note(key, title, body);
		return notes[key];
	}

	async read(key) {
		if (notes[key]) {
			return notes[key];
		} else {
			throw new Error(`Note ${key} not Found`);
		}
	}

    async destroy(key){
        if (notes[key]) {
            delete notes[key]
        }else{
            throw new Error(`Note ${key} does not exist`);
            
        }
    }

    async keyList(){
        return Object.keys(notes)
    }

    async count(){
        return notes.length
    }
}
