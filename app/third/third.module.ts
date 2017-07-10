import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RouteUtil } from "../shared/utils/route.util";
import { SampleComponent } from "../shared/components/sample.component";
import { SharedModule } from "../shared/modules/shared.module";
import { ModuleService } from "../shared/services/module.service";
import { SingletonService } from "../shared/services/singleton.service";

const routes: Route[] = [
    {
        path: "",
        redirectTo: "one",
        pathMatch: "full",
    }, {
        path: "one",
        component: SampleComponent
    }, {
        path: "two",
        component: SampleComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ModuleService
    ]
})
export class ThirdModule { }