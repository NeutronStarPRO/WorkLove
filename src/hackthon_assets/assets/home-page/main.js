// 第一次打开页面时，内容从左往右滑动，箭头从右往左滑
window.onload = function() {
    let startL = document.querySelector('.headline');
    startL.classList.add("headline-start");
    let startR = document.querySelector('.right-arrow');
    startR.classList.add("arrow-start");
}
// =======================================================

// 点击按钮转换页面
function switchover() {
    let switchoverDisplay = document.querySelector('.headline');
    switchoverDisplay.classList.add("switchoverDisplay");
    let rightArrowDisplay = document.querySelector('.right-arrow');
    rightArrowDisplay.classList.add("rightArrowDisplay");
    setTimeout(function timeOut() {
        // 延迟0.8s消失
        switchoverDisplay.style.display = "none";

        // 延迟搜索页出现，把样式加进去
        let switchoverDisplay2 = document.querySelector('.headline-2');
        switchoverDisplay2.style.display = "block";

        // 再延迟0.1s上滑显示搜索页
        setTimeout(function timeOut2() {
            switchoverDisplay2.classList.add("headline-2-display");
        },77)
    },777);
}
// ========================================================================