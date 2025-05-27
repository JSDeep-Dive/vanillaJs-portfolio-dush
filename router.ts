import {render} from './utils/render.ts';

type RouteHandler = () => void;

//SECTION - router class
export class Router {
    private routes: Record<string, RouteHandler> = {};
    private currentRoute: string = '';
    private route =  () => {
        const path = window.location.pathname;
        const route = this.routes[path];
        if (route) {
            route();
        } else {
            //TODO - add a 404 page
            this.routes['/page-not-found']();
        }
    }

    //NOTE - add a route
    addRoute(path: string, handler: RouteHandler) {
        this.routes[path] = handler;
    }

    //NOTE - navigate to a route
    
}
