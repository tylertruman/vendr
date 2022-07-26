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
    new Snack('Root Dew', 5.75, 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60', 0)
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
