import { ProxyState } from "../AppState.js";
import { VendrController } from "../Controllers/VendrController.js";

class VendrService{
    buyItem(name) {
        console.log('buying', name, 'from the service');
        let snack = ProxyState.snacks.find(s => s.name == name)
        console.log(snack.price);
        ProxyState.money += snack.price
        ProxyState.money = ProxyState.money
        console.log(ProxyState.money)
        snack.qty += 1
        console.log(snack.qty)

    }

}

export const vendrService = new VendrService()