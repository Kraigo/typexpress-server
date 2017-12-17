import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as errorHandler from 'errorhandler';

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }

    static bootstrap(): Server {
        return new Server();

    }

    public config() {
        this.app.use(express.static(path.join(__dirname, "public")));

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(errorHandler());
    }

    public routes() {
        this.app.get('/', function (req, res) {
            res.send('work!')
        })

        let router: express.Router;
        router = express.Router();

        //IndexRoute
        // IndexRoute.create(router);

        //use router middleware
        this.app.use(router);
    }

    public api() {

    }
}