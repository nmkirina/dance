import { Injectable } from '@angular/core';

@Injectable()
export class DataService{
    private mainPageFlag: boolean;
    constructor(){}
    getMainPageFlag(): boolean {
        return this.mainPageFlag;
    }
    setMainPageFlag(flag:boolean): void {
        this.mainPageFlag = flag;
    }
}

