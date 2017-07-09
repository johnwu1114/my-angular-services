import { Route } from "@angular/router";
import { RouteUtil } from "./shared/utils/route.util";
import { FirstModule } from "./first/first.module";
import { SecondModule } from "./second/second.module";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "first",
        pathMatch: "full",
    },
    {
        path: "first",
        loadChildren: () => FirstModule
    },
    {
        path: "second",
        loadChildren: () => SecondModule
    },
    {
        path: "third",
        loadChildren: "./third/third.module#ThirdModule"
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