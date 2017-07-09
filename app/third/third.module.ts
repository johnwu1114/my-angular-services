import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RouteUtil } from "../shared/utils/route.util";
import { OneComponent } from "./components/one.component";
import { TwoComponent } from "./components/two.component";
import { ModuleService } from "../shared/services/module.service";
import { SingletonService } from "../shared/services/singleton.service";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "one",
        pathMatch: "full",
    }, {
        path: "one",
        component: OneComponent
    }, {
        path: "two",
        component: TwoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        RouteUtil.getComponents(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ModuleService,
        SingletonService
    ]
})
export class ThirdModule { }