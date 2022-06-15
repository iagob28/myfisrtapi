import { express, routes } from "./routes";

var cors = require("cors");
const api = express();
const port = 3333;

api.use(cors());
api.use(express.json());
api.use(routes);

api.listen(port, () => {
  console.log(`API listening to port ${port}`);
});
