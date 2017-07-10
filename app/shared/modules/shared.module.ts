import { NgModule } from "@angular/core";
import { SampleComponent } from "../components/sample.component";
import { SharedModuleService } from "../services/sharedModule.service";

@NgModule({
    declarations: [
        SampleComponent
    ],
    providers: [
        SharedModuleService
    ],
    exports: [
        SampleComponent
    ]
})
export class SharedModule { }