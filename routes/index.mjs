import { title } from "process";
import { NotesStore } from "../app.mjs";
import { express } from "../imports.mjs";

export const router = express.Router();

// Define routes using the router instance
// This route will correspond to a GET request at the base path


// get the / home page
router.get("/", async (req, res, next) => {
	try {
		const keyList = await NotesStore.keyList();
		console.log(keyList);

		const keyPromises = keyList.map((key) => {
			return NotesStore.read(key);
		});
		console.log(keyPromises);

		const noteList = await Promise.all(keyPromises);
		console.log(noteList);

		res.render("index", {
			title: "Notes",
			noteList: noteList,
		});
		
	} catch (error) {
		next(error);
	}
});
