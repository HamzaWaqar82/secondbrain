import { express } from "../imports.mjs";

export const router = express.Router();

// Define routes using the router instance
// This route will correspond to a GET request at the base path

router.get("/", (req, res) => {
	res.render("home", {
		title: "Home Page",
		name: "Hamzah",
	});
});

router.get("/about", (req, res) => {
	res.render("about", {
		about: "This is the description about the home page",
		para: "this is para",
	});
});


router.get("/error", (req, res) => {
	res.render("error", {
		aboutError: "This is the description about the error page",
		
	});
});