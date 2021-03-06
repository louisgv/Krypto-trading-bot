import Models = require("../share/models");


export interface IMarketDataGateway {
}

export interface IOrderEntryGateway {
    sendOrder(order: Models.OrderStatusReport): void;
    cancelOrder(cancel: Models.OrderStatusReport): void;
    replaceOrder(replace: Models.OrderStatusReport): void;

    cancelsByClientOrderId: boolean;
    generateClientOrderId(): string|number;

    supportsCancelAllOpenOrders() : boolean;
    cancelAllOpenOrders() : Promise<number>;
}

export interface IPositionGateway {
}

export class CombinedGateway {
    constructor(public oe: IOrderEntryGateway) { }
}

