import { InfoAccount } from "./infoAccount";
const fs = require("fs");

export class InfoAccountFactory{

    createInfoAccoutFromCsv() :InfoAccount
    {
        var links = fs.readFileSync("mock_data/creacion_account.csv") 
        .toString() // convert Buffer to string
        .split('\n') // split string to lines
        .map(e => e.trim()) // remove white spaces for each line
        const infoCsv =  links[1].split(',')            

        const infoAccont =  new InfoAccount();
        infoAccont.nomsite  =  infoCsv[0] as string ;
        infoAccont.name = ` ${infoCsv[1]}  ${infoCsv[2]}` ;
        infoAccont.email=  infoCsv[3] , 
        infoAccont.pwd = infoCsv[4]

        return infoAccont ;
        
    }

}