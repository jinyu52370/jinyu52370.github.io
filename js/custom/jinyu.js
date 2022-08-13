var $page_header = document.getElementById("page-header");

if (window.location.pathname == "/") {
    //首页头图部分遮罩层透明
    // document.styleSheets[0].insertRule('#page-header::before { background: transparent !important; }', 0);
}

if (window.location.pathname != "/") {
    //文章头图部分遮罩层恢复
    // document.styleSheets[0].deleteRule('#page-header::before { background: transparent !important; }', 0);
    //文章的header区域抬高
    $page_header.classList.add("page_header_post");
}

// document.getElementById('nav').classList.add('show')