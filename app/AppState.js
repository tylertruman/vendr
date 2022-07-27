import { Snack } from "./Models/Vendr.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0

  /** @type {import('./Models/Vendr').Vendr[]} */
  snacks = [
    new Snack('Mountain Sprite', 2.50, 'https://images.unsplash.com/photo-1581927692308-be9e43b4d860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60', 0),
    new Snack('Root Dew', 5.75, 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 0),
    new Snack('Chocolate Krispy', 10, 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZha2UlMjBzbmFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60', 0),
    new Snack('Sugar Worms', 7.50, 'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 0),
    new Snack('Sugar Beans', 4.50, 'https://images.unsplash.com/photo-1581798269145-7512508289b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 0),
    new Snack('Potato Crisps', 2.75, 'https://images.unsplash.com/photo-1615485290836-4ebcebf44aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHNuYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60', 0)
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
