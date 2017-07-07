import { Component } from "@angular/core";
import { ControllerService } from "../../shared/services/controller.service";
import { ModuleService } from "../../shared/services/module.service";
import { SharedModuleService } from "../../shared/services/sharedModule.service";
import { SingletonService } from "../../shared/services/singleton.service";

@Component({
    template: require("../../shared/templates/sample.html"),
    providers: [
        ControllerService
    ]
})
export class OneComponent {
    mobule = "First";
    component = "One";
    controllerServiceId: number;
    moduleServiceId: number;
    sharedModuleServiceId: number;
    singletonServiceId: number;

    constructor(private controllerService: ControllerService,
        private moduleService: ModuleService,
        private sharedModuleService: SharedModuleService,
        private singletonService: SingletonService) {
        this.controllerServiceId = controllerService.getId();
        this.moduleServiceId = moduleService.getId();
        this.sharedModuleServiceId = sharedModuleService.getId();
        this.singletonServiceId = singletonService.getId();
    }
}