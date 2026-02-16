import { getAppRootDir } from "./approotdir.mjs";
import { normalizePort, onError, onListening } from "./appsupport.mjs";
import {
	dotenv,
	express,
	engine,
	path,
	logger,
	bodyParser,
	cookieParser,
	indexRouter,
	handle404,
	basicErrorHandler,
	http,
} from "./imports.mjs";

dotenv.config();
const app = express();

app.engine(
	"hbs",

	engine({
		extname: "hbs",
		defaultLayout: "main",
	}),
);

app.set("view engine", "hbs");
app.set("views", path.join(getAppRootDir(), "views"));	
// hbs.registerPartials(path.join(__dirname, "partials"));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(getAppRootDir(), "public")));

app.use("/", indexRouter);
// app.use("/notes", notesRouter)



app.use(handle404);
app.use(basicErrorHandler);

export const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

export const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

//
// app.listen(3000, () => {
// console.log("server is listening on http://localhost:3000");
// });
