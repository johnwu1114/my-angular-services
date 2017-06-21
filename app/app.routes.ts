import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "first",
        pathMatch: "full",
    },
    {
        path: "first",
        loadChildren: "./first/first.module#FirstModule"
    },
    {
        path: "second",
        loadChildren: "./second/second.module#SecondModule"
    }
];

export class AppRoutes {
    public static getRoutes(): Route[] {
        return routes;
    }

    public static getComponents(): any[] {
        return RouteUtil.getComponents(routes);
    }
}