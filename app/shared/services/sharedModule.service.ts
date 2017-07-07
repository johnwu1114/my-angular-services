import { Injectable } from "@angular/core";

@Injectable()
export class SharedModuleService {
    private _id: number;

    public getId(): number {
        if (!this._id) {
            this._id = Math.floor((1 + Math.random()) * 0x10000);
        }
        return this._id;
    }
}