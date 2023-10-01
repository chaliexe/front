import { Injectable,  } from "@angular/core";
import { ArticulosModels } from "../models/ArticulosModels";
@Injectable()
export class articulosService{
    public articles: Array<ArticulosModels>

    constructor(){
        
    }
}

