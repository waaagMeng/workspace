// 对象 林 gaodeMap
const googleMap = {
    show() {
        console.log('开始渲染GOOGLE地图');
    }
}
const baiduMap = {
    // 为互换做准备
    show() {
        console.log('开始渲染百度地图')
    }
}
const gaodeMap = {
    show() {
        console.log('开始渲染高德地图')
    }
}
const sosoMap = {}
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) => {
    // map 检测
    if (map.show && map.show instanceof Function){
    // if (map.show && typeof map.show === 'function') {
        map.show();
    }
    //分支太多 
    // if(name === 'baidu')
    //     baiduMap.show()
    // else if (name === 'google')
    //     googleMap.show();
    // else if (name === 'gaode')
    //     gaodeMap.show();
}
renderMap(baiduMap);
renderMap(googleMap);
renderMap(sosoMap);