let header = {
    class_name: 'header',
    parent: 'FinnAdmin',
    template: 
    `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand font-weight-bold" href="/manage">F博客管理后台</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <div class="ml-auto d-flex align-items-center">
                <span class="font-weight-bold" style="color: #fff;margin-right: 15px;">Admin</span>
                <button class="btn btn-secondary">退出登录</button>
            </div>
        </div>
    </nav>`
}

export default header