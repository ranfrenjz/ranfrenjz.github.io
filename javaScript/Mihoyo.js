var userAgent = navigator.userAgent;

if (userAgent.match(/Android/i)) {
    // 用户使用安卓设备
    window.open("https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default")
} else if (userAgent.match(/iPhone|iPad|iPod/i)) {
    // 用户使用iOS设备
    window.open("https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/ios_default")
} else {
    // 用户使用PC或其他设备
    window.open("https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default")
}
window.location.href = "https://ys.mihoyo.com/"