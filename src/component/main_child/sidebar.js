let sidebar = {
    name: 'sidebar',
    parent: 'main',
    template: 
    `<div id="side_bar" class="side_bar box_shadow">
        <ul class="navbar-nav font-weight-bold">
            <li class="nav-item" action="a_content" params="user">
                <span class="nav-link">账号管理</span>
            </li>
            <li class="nav-item">
                <span class="nav-link"_info">用户管理</span>
            </li>
            <li class="nav-item">
                <span class="nav-link">文章确认列表</span>
            </li>
            <li class="nav-item">
                <span class="nav-link">文章列表管理</span>
            </li>
            <li class="nav-item">
                <span class="nav-link">分类管理</span>
            </li>
            <li class="nav-item">
                <span class="nav-link">评论管理</span>
            </li>
            <li class="nav-item">
                <span class="nav-link">通知管理</span>
            </li>
        </ul>
    </div>`
}

export default sidebar