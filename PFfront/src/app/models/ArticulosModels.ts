export class ArticulosModels{
    constructor(
        public title: String,
        public text:String,
        public price: Number,
       private category:string,
        public image?:String,
    ){}
}