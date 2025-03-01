export interface Dish {
    id: string;
    name: string;
    price: number;
    description?: string;
}

export interface IDishShort {
    name: string
    description: string
    price: number
}

export interface IDish extends IDishShort {
    id: string
}
export interface IDishesList {
    [id:string]: IDishShort
}