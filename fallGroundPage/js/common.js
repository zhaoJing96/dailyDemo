let winheight = window.innerHeight; // 获取屏幕可视区域高度
/**
 * 文字动效 上移
 * @param {*} domNode 需要添加动效的节点 [dom] array类型
 */
function setTextTransFormY(domNode) {
    for (let i = 0; i < domNode.length; i++) {
        const item = domNode[i];
        if (item) {
            let domTopHei = item && item.getBoundingClientRect().top;
            if (domTopHei <= winheight && domTopHei > 0) {
                item.style.transform = 'translateY(0)';
                item.style.opacity = 1;
            } else if (domTopHei > winheight) {
                item.style.transform = 'translateY(90px)';
                item.style.opacity = 0;
            }
        }
    }
}