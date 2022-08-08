//非主页加毛玻璃效果，主页不加的原因是太损耗性能
if (window.location.pathname != "/") {
    document.getElementById("page-header").style.setProperty("backdrop-filter", "blur(15px)")
    //文章的header区域抬高
    document.getElementById("page-header").style.setProperty("height", "400px")
}

document.getElementById('nav').classList.add('show')