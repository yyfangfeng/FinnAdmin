import directory from './config/directory'
import component from './component/component'


class FinnAdmin {
    constructor (params) {
        for (let key in params) {
            this[key] = params[key]
        }
        this.init()
    }
    init () {
        this.el = document.querySelector(this.id)
        // this.initUI()
        this.renderComponent()
    }
    initUI () {
        
    }
    renderComponent () {
        
    }
}

let finnAdmin = new FinnAdmin({
    id: '#FinnAdmin',
    component,
    directory
})

console.log(finnAdmin)


let arr1 = [1, 2, 2, 1]
let arr2 = [2, 2]

function set (arr1, arr2) {
    let arr = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) > -1) {
            arr.push(arr1[i])
            arr1.splice(i, 1)
        }
    }

    return arr
}

console.log(set(arr1, arr2))
