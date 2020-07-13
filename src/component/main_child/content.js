import breadcrumb from './content_child/breadcrumb'

let content = {
    name: 'content',
    parent: 'main',
    template: `<div id="content"></div>`,
    child: {
        breadcrumb
    }
}

export default content