import { InfoPost } from "./infoPost";

const fs =  require("fs")
import { faker } from '@faker-js/faker';




export class InfoPostFactory{

    
    private _pathFile :string = "mock_data/creacion_post.csv"


    constructor( private _seed :number ){
        faker.seed(_seed);
    }

    createPostFromCsv( index: number = 0) {
        var links = fs.readFileSync(this._pathFile) 
        .toString() // convert Buffer to string
        .split('\n') // split string to lines
        .map(e => e.trim()) // remove white spaces for each line
        const infoCsv =  links[index+1].split(',')            
        const infoPost =  new InfoPost();
        infoPost.postName  =  infoCsv[0] as string ;
        infoPost.postDesc =  infoCsv[1] as string   ;
        return infoPost ;
    }


    createPostFromCsvRandom( ) {
        var links = fs.readFileSync(this._pathFile) 
        .toString() // convert Buffer to string
        .split('\n') // split string to lines
        .map(e => e.trim()) // remove white spaces for each line

        let index =  faker.datatype.number({ min:  1 ,  max: links.length }) 

        const infoCsv =  links[index].split(',')            
        const infoPost =  new InfoPost();
        infoPost.postName  =  infoCsv[0] as string ;
        infoPost.postDesc =  infoCsv[1] as string   ;
        return infoPost ;
    }
}