import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RouteUtil } from "../shared/utils/route.util";
import { SharedModule } from "../shared/shared.module";
import { OneComponent } from "./components/one.component";
import { TwoComponent } from "./components/two.component";
import { ModuleService } from "../shared/services/module.service";

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
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [
        RouteUtil.getComponents(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ModuleService
    ]
})
export class SecondModule { }