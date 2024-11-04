// navbar.js
const navbarHTML = `
<!-- navbar.html -->
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="index.html">JS 套件介紹</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="aos/aos.html">AOS 動畫</a></li>
                <li class="nav-item"><a class="nav-link" href="speech/speech.html">文字轉語音</a></li>
                <li class="nav-item"><a class="nav-link" href="lottie/lottie.html">Lottie 動畫</a></li>
                <li class="nav-item"><a class="nav-link" href="chart/chart.html">Chart.js 圖表</a></li>
                <li class="nav-item"><a class="nav-link" href="lzload/lzload.html">圖片懶加載</a></li>
                <li class="nav-item"><a class="nav-link" href="swiper/swiper.html">滑動效果</a></li>
                <li class="nav-item"><a class="nav-link" href="moment/moment.html">日期和時間</a></li>
                <li class="nav-item"><a class="nav-link" href="day/day.html">輕量化日期和時間</a></li>
                <li class="nav-item"><a class="nav-link" href="sa2/sa2.html">更美觀的提示框</a></li>
                <li class="nav-item"><a class="nav-link" href="numeral/numeral.html">格式化數字</a></li>
            </ul>
        </div>
    </div>
</nav>

`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
