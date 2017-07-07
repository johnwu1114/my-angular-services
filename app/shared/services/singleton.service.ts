import { Injectable } from "@angular/core";

@Injectable()
export class SingletonService {
    private static instance: SingletonService;
    private _id: number;

    constructor() {
        return SingletonService.instance = SingletonService.instance || this;
    }

    public getId(): number {
        if (!this._id) {
            this._id = Math.floor((1 + Math.random()) * 0x10000);
        }
        return this._id;
    }
}