import { NgModule } from "@angular/core";
import { SharedModuleService } from "./services/sharedModule.service";
import { SingletonService } from "./services/singleton.service";

@NgModule({
    providers:[
        SharedModuleService,
        SingletonService
    ]
})
export class SharedModule { }