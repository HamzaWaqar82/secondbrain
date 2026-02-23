import { NotesStore } from "../app.mjs";
import { express } from "../imports.mjs";

export const router = express.Router();

router.get("/add", (req, res, next) => {
	res.render("noteedit", {
		title: "Add a Note",
		docreate: true,
		notekey: "",
		note: undefined,
	});
});

router.post("/save", async (req, res, next) => {
	try {
		let note;

		if (req.body.docreate === "create") {
			note = await NotesStore.create(
				req.body.notekey,
				req.body.title,
				req.body.body,
			);
		} else {
			note = await NotesStore.update(
				req.body.notekey,
				req.body.title,
				req.body.body,
			);
		}

		res.redirect("/notes/view?key=" + req.body.notekey);
	} catch (error) {
		next(error);
	}
});

// Read Note (read)
router.get("/view", async (req, res, next) => {
	try {
		let note = await NotesStore.read(req.query.key);
		res.render("noteview", {
			title: note ? note.title : "",
			notekey: req.query.key,
			note: note,
		});
	} catch (err) {
		next(err);
	}
});




