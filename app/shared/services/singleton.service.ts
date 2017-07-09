import { Injectable } from "@angular/core";
import { AbstractBaseService } from "./abstractBase.service";

@Injectable()
export class SingletonService extends AbstractBaseService {
    private static _instance: SingletonService;

    constructor() {
        super();
        return SingletonService._instance = SingletonService._instance || this;
    }
}