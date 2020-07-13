import sidebar from './main_child/sidebar'
import content from './main_child/content'

let main = {
    name: 'main',
    parent: 'FinnAdmin',
    template: `<main></main>`,
    child: {
        sidebar, content
    }
}

export default main