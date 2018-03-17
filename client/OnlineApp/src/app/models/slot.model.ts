export class SlotModel {
    id: number;
    number: string;
    availableForSale: boolean;
    address: string;
    price: number;
    isMySlot: boolean;

    constructor(number: string, availableForSale: boolean, address: string, price: number, id: number){
        this.number = number;
        this.availableForSale = availableForSale;
        this.address = address;
        this.price = price;
        this.id = id;
    }
}