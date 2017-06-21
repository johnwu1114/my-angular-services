import { NgModule } from "@angular/core";
import { LocalizationPipe } from "./pipes/localization.pipe";

@NgModule({
    imports: [
    ],
    declarations: [
        LocalizationPipe
    ],
    exports: [
        LocalizationPipe
    ]
})
export class SharedModule { }