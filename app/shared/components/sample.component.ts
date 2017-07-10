import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ControllerService } from "../services/controller.service";
import { ModuleService } from "../services/module.service";
import { SharedModuleService } from "../services/sharedModule.service";
import { AppModuleService } from "../services/appModule.service";
import { SingletonService } from "../services/singleton.service";

@Component({
    template: require("../templates/sample.html"),
    providers: [
        ControllerService
    ]
})
export class SampleComponent {
    module: string;
    component: string;

    controllerServiceId: number;
    moduleServiceId: number;
    sharedModuleServiceId: number;
    appModuleServiceId: number;
    singletonServiceId: number;

    constructor(private router: Router,
        private controllerService: ControllerService,
        private moduleService: ModuleService,
        private sharedModuleService: SharedModuleService,
        private appModuleService: AppModuleService,
        private singletonService: SingletonService) {

        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                var param = event.url.split("/");
                this.module = param[1];
                this.component = param[2];
            }
        });

        this.controllerServiceId = controllerService.getId();
        this.moduleServiceId = moduleService.getId();
        this.sharedModuleServiceId = sharedModuleService.getId();
        this.appModuleServiceId = appModuleService.getId();
        this.singletonServiceId = singletonService.getId();
    }
}