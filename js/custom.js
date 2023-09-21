// 鼠标移动星星特效
(function () {
    function t() {
        i(), a()
    }

    function i() {
        document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener(
            "touchstart", e), window.addEventListener("resize", n)
    }

    function n(t) {
        d = window.innerWidth, window.innerHeight
    }

    function e(t) {
        if (t.touches.length > 0)
            for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() *
                r.length)])
    }

    function o(t) {
        u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)])
    }

    function s(t, i, n) {
        var e = new l;
        e.init(t, i, n), f.push(e)
    }

    function h() {
        for (var t = 0; t < f.length; t++) f[t].update();
        for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1))
    }

    function a() {
        requestAnimationFrame(a), h()
    }

    function l() {
        this.character = "*", this.lifeSpan = 120, this.initialStyles = {
            "-webkit-user-select": "none",
            "-moz-user-select": "none",
            "-o-user-select": "none",
            "user-select": "none",
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            "z-index": "10000000",
            fontSize: "20px",
            "will-change": "transform"
        }, this.init = function (t, i, n) {
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            }, this.position = {
                x: t - 10,
                y: i - 20
            }, this.initialStyles.color = n /*, console.log(n)*/, this.element = document.createElement("span"), this.element
                .innerHTML =
                this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element)
        }, this.update = function () {
            this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform =
                "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")"
        }, this.die = function () {
            this.element.parentNode.removeChild(this.element)
        }
    }

    function c(t, i) {
        for (var n in i) t.style[n] = i[n]
    }
    var r = ["#D61C59", "#E7D84B", "#1B8798", "#ffaaff", "#aaaaff"],
        d = window.innerWidth,
        u = (window.innerHeight, {
            x: d / 2,
            y: d / 2
        }),
        f = [];
    t()
})();

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/none.png");
        document.title = 'Warning : Under Attack!';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/newtubiao.png");
        document.title = '(ฅ>ω<*ฅ)你信吗 ~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
// 添加八毛卡通人物
/*右下角添加卡通人物*/
var bamao = '<i class="fas fa-arrow-up" style ="padding:8px" ></i><img style="max-width: 234%;transform: translate(-65px,-65px);" src="https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200629182853.gif" title="回到顶部" data-ll-status="loaded" class="loaded">';

//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素

//2022.9.11 已修复，需要jq，请自行引入
document.getElementById("name-container").setAttribute("style", "display:none");

var position = $(window).scrollTop();

$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll > position) {


        document.getElementById("name-container").setAttribute("style", "");
        document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

    } else {


        document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
        document.getElementById("name-container").setAttribute("style", "display:none");

    }

    position = scroll;

});
function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
}
//修复没有弄右键菜单的童鞋无法回顶部的问题
document.getElementById("page-name").innerText = document.title.split(" | Ariasakaの小窝")[0];
/*这里是去掉你的网站全局名称的设置，如果你不需要去掉，你可以写成：
document.getElementById("page-name").innerText=document.title

或者把你的网站的分隔符和全局网站名称加上去*/



