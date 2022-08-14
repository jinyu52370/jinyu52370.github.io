var $page_header = document.getElementById("page-header");

// if (window.location.pathname === "/") {
//首页头图部分遮罩层透明
// document.styleSheets[0].insertRule('#page-header::before { background: transparent !important; }', 0);
// }

if (window.location.pathname !== "/") {
    //文章头图部分遮罩层恢复
    // document.styleSheets[0].deleteRule('#page-header::before { background: transparent !important; }', 0);
    //文章的header区域抬高
    $page_header.classList.add("page_header_post");
}

if (window.location.pathname === "/link/") {
    // 修改背景
    // document.querySelector(
    //     '.cardHover, .layout > div:first-child:not(.recent-posts), #recent-posts > .recent-post-item, #aside-content .card-widget, .layout > .recent-posts .pagination > *:not(.space)'
    // ).style.setProperty('background', "rgba(212, 229, 239, .9)");

    //背景高斯模糊
    // document.getElementById("page").style.setProperty("backdrop-filter", "blur(15px)");

    //取消动画
    // document.getElementById('content-inner').style.setProperty("animation", "initial");

    // 内容宽度
    // document.querySelector('.layout.hide-aside').style.setProperty("max-width", "initial");
    document.querySelector('.layout.hide-aside').style.setProperty("max-width", "1650px");
}