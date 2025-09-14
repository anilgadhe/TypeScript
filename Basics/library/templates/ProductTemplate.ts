
/// <reference path="../contracts/ProductContract.ts" />

import ProductContracts = Project.Contracts.ProductContract;


namespace Project {

    export namespace Templates {

        export abstract class ProductTemplates implements ProductContracts {
           
            public Name: string = "";

            public Price: number = 0;

            public Qty: number = 0;

            public abstract Total(): number;

            public abstract Print(): void;
        }
    }

}