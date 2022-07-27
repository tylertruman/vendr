

export class Snack {
    constructor(name, price, img, qty) {
        this.name = name,
        this.price = price
        this.img = img
        this.qty = qty
    }

    get Template(){
        return `
            <div id="${this.name}" class="col-4 text-center mt-3">
                <h5>${this.name} | in cart: ${this.qty}</h5>
              <img class="rounded" src="${this.img}">
              <br>
              <button class="btn btn-danger mt-1" onclick="app.vendrController.buyItem('${this.name}')">BUY | $${this.price}</button>
            </div>`
    }
}