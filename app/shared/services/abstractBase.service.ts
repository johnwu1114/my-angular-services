export abstract class AbstractBaseService {
    protected _id: number;

    constructor() {
        this._id = Math.floor((1 + Math.random()) * 0x10000);
    }

    public getId(): number {
        return this._id;
    }
}