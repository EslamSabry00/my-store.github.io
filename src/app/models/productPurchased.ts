export class productPurchased
{
    description: string;
    id:number;
    name: string;
    price: number;
    url: string;
    quantity: number;
    totalAmount: number;
    constructor()
    {
        this.description = "",
        this.id = 0,
        this.name = "",
        this.price = 0.0,
        this.url = "",
        this.quantity = 0,
        this.totalAmount = 0.0
        
    }
}