

export class Snack {
    constructor(name, price, img) {
        this.name = name,
        this.price = price
        this.img = img
    }

    get Template(){
        return `
            <div id="${this.name}" class="col-6 text-center">
                <h5>${this.name}</h5>
              <img class="rounded" src="${this.img}">
              <button class="btn btn-danger mt-1" onclick="app.vendrController.buyItem('${this.name}')">BUY | $${this.price}</button>
            </div>`
    }
}