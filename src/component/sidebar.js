let sidebar = {
    className: 'sidebar',
    compType: 'main',
    template: 
    `<div id="side_bar" class="side_bar box_shadow">
        <ul class="navbar-nav font-weight-bold">
            <li class="nav-item">
                <a class="nav-link" href="/manage/user">账号管理</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/user_info">用户管理</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/article_confirm">文章确认列表</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/article">文章列表管理</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/classify">分类管理</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/comment">评论管理</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/manage/msg">通知管理</a>
            </li>
        </ul>
    </div>`
}

export default sidebar