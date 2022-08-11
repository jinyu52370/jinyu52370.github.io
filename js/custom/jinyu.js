var $page_header = document.getElementById("page-header");

if (window.location.pathname != "/") {
    //文章的header区域抬高
    $page_header.classList.add("page_header_post");
}

// document.getElementById('nav').classList.add('show')