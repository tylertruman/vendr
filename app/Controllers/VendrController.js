import { ProxyState } from "../AppState.js";
import { vendrService} from "../Services/VendrService.js"

function _drawSnacks(){
    let snacks = ProxyState.snacks
    console.log('drawing snacks', snacks);
    let template = ''
    snacks.forEach( s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}

function _drawTotal(){
    ProxyState.money = 0
    document.getElementById('total').innerText = ProxyState.money
}

export class VendrController{
    constructor(){
        console.log('Vendr Controller loaded');
        _drawSnacks()
        _drawTotal()
     }

     buyItem(name){
        vendrService.buyItem(name)
        _drawTotal()
        
        
     }
}