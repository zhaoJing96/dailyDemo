let winheight = window.innerHeight; // 获取屏幕可视区域高度
/**
 * 文字动效 上移
 * @param {*} domNode 需要添加动效的节点 [dom] array类型
 */
function setTextTransFormY(domNode) {
    for (let i = 0; i < domNode.length; i++) {
        const item = domNode[i];
        if(item){
            let domTopHei = item && item.getBoundingClientRect().top;
            if (domTopHei <= winheight && domTopHei > 0) {
                if (item && !item.classList.contains('index_text_animate')) {
                    item.classList.add('index_text_animate');
                }
            } else if (domTopHei > winheight) {
                if (item && item.classList.contains('index_text_animate')) {
                    item.classList.remove('index_text_animate');
                }
            }
        }
    }
}