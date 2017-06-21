import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: "R" })
export class LocalizationPipe implements PipeTransform {
    transform(key: string, category: string): string {
        category = category ? category : "Text";
        if (!R.hasOwnProperty(category) || !R[category].hasOwnProperty(key)) {
            return key;
        }
        return R[category][key];
    }
}