import { ProxyState } from "../AppState.js";
import { VendrController } from "../Controllers/VendrController.js";

class VendrService{
    buyItem(name) {
        console.log('buying', name, 'from the service');
        let snack = ProxyState.snacks.find(s => s.name == name)
        console.log(snack);
        ProxyState.snacks.price += ProxyState.money
        console.log(ProxyState.money)
    }

}

export const vendrService = new VendrService()