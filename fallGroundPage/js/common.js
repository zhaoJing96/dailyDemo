let winheight = window.innerHeight; // 获取屏幕可视区域高度
let commonWordTitle = $('.ui_common_word .title'); // 介绍文字title
let commonWordTxt = $('.ui_common_word .txt'); // 介绍文字txt
// 滚动事件监听
window.addEventListener('scroll', () => {
    textAnimationDomData(commonWordTitle);
    textAnimationDomData(commonWordTxt);
});
/**
 *  文字动效数据处理
 * 同类型文字添加动效
 * @param {*} domListData dom List 相同类名数据
 */
function textAnimationDomData(domListData) {
    for (let j = 0; j < domListData.length; j++) {
        const item = domListData[j];
        setTextTransFormY(item);
    }
}
/**
 * 文字添加动效 上移
 * 单个文字添加动效
 * @param {*} domNode 需要添加动效的节点dom
 */
function setTextTransFormY(domNode) {
    let domTopHei = domNode.getBoundingClientRect().top;
    if (domTopHei <= winheight && domTopHei > 0) {
        domNode.style.transform = 'translateY(0)';
        domNode.style.opacity = 1;
    } else if (domTopHei > winheight) {
        domNode.style.transform = 'translateY(100px)';
        domNode.style.opacity = 0;
    }
}