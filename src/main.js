import directory from './config/directory'
import listForm from './listForm/listForm'
import component from './component/component'


// 生成对象
for (let key in directory) {
    if (directory[key].listForm && directory[key].listForm in listForm) {
        directory[key].listForm = listForm[key]
    }
}

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
        for (let key in this.directory) {
            if (this.directory[key].listForm) {
                let list_form_temp = this.directory[key].listForm.template
                $(this.el).append(list_form_temp)
            }
        }
    }
    renderComponent () {
        for (let key in this.component) {
            $(this.el).append(this.component[key].template)
        }
    }
}

let finnAdmin = new FinnAdmin({
    id: '#FinnAdmin',
    component,
    directory
})

console.log(finnAdmin)
