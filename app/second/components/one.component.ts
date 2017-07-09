import { Component } from "@angular/core";
import { ControllerService } from "../../shared/services/controller.service";
import { ModuleService } from "../../shared/services/module.service";
import { SingletonService } from "../../shared/services/singleton.service";

@Component({
    template: require("../../shared/templates/sample.html"),
    providers: [
        ControllerService
    ]
})
export class OneComponent {
    mobule = "Second";
    component = "One";
    controllerServiceId: number;
    moduleServiceId: number;
    singletonServiceId: number;

    constructor(private controllerService: ControllerService,
        private moduleService: ModuleService,
        private singletonService: SingletonService) {
        this.controllerServiceId = controllerService.getId();
        this.moduleServiceId = moduleService.getId();
        this.singletonServiceId = singletonService.getId();
    }
}