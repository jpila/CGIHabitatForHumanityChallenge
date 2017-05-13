export class Product {
    constructor(
      public $key: string,
      public description: string,
      public location: string,
      public price: string,
      public imgUrl: string
    ){

    }

    static fromJson({$key, description, location, price, imgUrl}){
      return new Product($key, description, location, price, imgUrl)
    }
    static fromJsonArray(json: any[]): Product[]{
        return json.map(Product.fromJson)
    }

}
