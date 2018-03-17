import { Component, OnInit } from '@angular/core';

import { SlotModel } from '../../models/slot.model';
import { SmartContractService } from '../../services/smart-contract.service';

@Component({
    selector: 'app-selling-slots-component',
    templateUrl: './selling-slots-component.component.html',
    styleUrls: ['./selling-slots-component.component.css']
})
export class SellingSlotsComponentComponent implements OnInit {
    public slots: SlotModel[] = [];

    constructor(private smartContractService: SmartContractService) {
    }

    ngOnInit() {
        this.loadData();
    }

    public sell(id: number, price: number): void {
        this.smartContractService.sell(id, price)
            .then(() => {
                let index = this.slots.findIndex(s => s.id === id);
                this.slots[index].availableForSale = true;
            });
    }

    public cancelSell(id: number): void {
        this.smartContractService.cancelSell(id)
            .then(() => {
                let index = this.slots.findIndex(s => s.id === id);
                this.slots[index].availableForSale = false;
                this.slots[index].price = null;
            });
    }

    public buy(id: number): void {
        this.smartContractService.buy(id)
            .then(() => {
                let index = this.slots.findIndex(s => s.id === id);
                this.slots[index].availableForSale = false;
                this.slots[index].price = null;
                this.slots[index].isMySlot = true;
            });
    }

    private loadData(): void {
        this.slots = [];
        this.smartContractService.getData()
            .then(data => {
                this.slots = data
                    .map(model => {
                        model.isMySlot = model.address === this.smartContractService.getMyAddress();
                        if (model.isMySlot && !model.availableForSale) {
                            model.price = null;
                        }
                        return model;
                    })
                    .sort((a, b) => {
                        if (a.isMySlot < b.isMySlot) {
                            return 1;
                        }
                        if (a.isMySlot > b.isMySlot) {
                            return -1;
                        }
                        return 0;
                    });
            });
    }
}
