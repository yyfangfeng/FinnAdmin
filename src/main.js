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
        this.initUI()
    }
    initUI () {
        this.renderComponent()
    }

    // 渲染组件
    renderComponent () {
        for (let comp_name in this.component) {
            this.loopRenderComp(this.component[comp_name])
        }
    }
    loopRenderComp (comp) {
        if (comp.parent === 'FinnAdmin') {
            comp.el = $(comp.template)[0]
            $(this.el).append(comp.el)
        }

        if (comp.child) {
            for (let child_name in comp.child) {
                let child_item = comp.child[child_name]

                child_item.el = $(child_item.template)[0]
                $(comp.el).append(child_item.el)

                this.loopRenderComp(child_item)
            }
        }
    }
}

let finnAdmin = new FinnAdmin({
    id: '#FinnAdmin',
    component,
    directory
})

console.log(finnAdmin)
