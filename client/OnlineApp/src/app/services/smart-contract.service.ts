import { Injectable } from '@angular/core';

import { getContractWrapper } from '../lib/smart-contract-helper';
import { SlotModel } from '../models/slot.model';

@Injectable()
export class SmartContractService {
    contractWrapper: any;

    constructor() {
        this.contractWrapper = getContractWrapper();
    }

    getMyAddress(): string {
        return this.contractWrapper._eth.accounts[0];
    }

    public getData(): Promise<SlotModel[]> {
        let models: SlotModel[] = [];
        let wrapper = this.contractWrapper;
        return new Promise((resolve, reject) => {
            wrapper.getCount(function (error, result) {
                let promises: Promise<SlotModel>[] = [];
                for (let i = 0; i < result.c[0]; i++) {
                    promises[i] = new Promise((resolve, reject) => {
                        wrapper.getBasicData(i, (error, result) => {
                            resolve(new SlotModel(result[1].c[0], result[2], result[0], result[3].c[0], i));
                        });
                    });
                }
                return Promise.all(promises).then(data => {
                    resolve(data);
                });
            })
        });
    }

    public sell(id: number, price: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.contractWrapper.Sell(id, price, (error, result) => {
                resolve();
            });
        });
    }

    public cancelSell(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.contractWrapper.CancelSell(id, (error, result) => {
                resolve();
            });
        });
    }

    public buy(id: number): Promise<any> {
        return new Promise((resolve, reject) => {
            this.contractWrapper.Buy(id, (error, result) => {
                resolve();
            });
        });
    }
}
