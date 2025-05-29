// 拖拽功能 - JavaScript实现
// 功能：实现HTML5拖拽API，允许用户在不同容器间拖拽移动图片元素

// 获取DOM元素
const fill = document.querySelector('.fill')        // 可拖拽的图片元素
const empties = document.querySelectorAll('.empty') // 所有容器元素
const body = document.body                          // 页面主体

// 为页面主体添加拖拽开始和结束事件监听器
body.addEventListener('dragstart', dragStart)  // 拖拽开始事件
body.addEventListener('dragend', dragEnd)      // 拖拽结束事件

/**
 * 为每个空容器添加拖拽相关事件监听器
 */
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)    // 拖拽经过事件
    empty.addEventListener('dragenter', dragEnter)  // 拖拽进入事件
    empty.addEventListener('dragleave', dragLeave)  // 拖拽离开事件
    empty.addEventListener('drop', dragDrop)        // 放置事件
}

/**
 * 拖拽开始事件处理函数
 * @param {DragEvent} e - 拖拽事件对象
 * 
 * 功能：
 * 1. 检查拖拽的是否为可拖拽元素
 * 2. 为拖拽元素添加视觉反馈样式
 * 3. 延迟隐藏原始元素，创建拖拽效果
 */
function dragStart(e) {
    // 只允许拖拽具有fill类的元素
    if(!e.target.classList.contains("fill")) {
        e.preventDefault()  // 阻止默认拖拽行为
        return
    }
    
    // 添加拖拽状态样式（边框效果）
    fill.className += ' hold' 
    
    // 使用setTimeout确保样式更新后再隐藏元素
    setTimeout(() => fill.className = 'invisible', 0)
}

/**
 * 拖拽结束事件处理函数
 * 功能：恢复拖拽元素的原始样式
 */
function dragEnd() {
    fill.className = 'fill'  // 恢复原始类名
}

/**
 * 拖拽经过事件处理函数
 * @param {DragEvent} e - 拖拽事件对象
 * 功能：阻止默认行为，允许放置操作
 */
function dragOver(e) {
    e.preventDefault()  // 必须阻止默认行为才能触发drop事件
}

/**
 * 拖拽进入事件处理函数
 * @param {DragEvent} e - 拖拽事件对象
 * 功能：当拖拽元素进入容器时，为容器添加悬停样式
 */
function dragEnter(e) {
    e.preventDefault()  // 阻止默认行为
    this.className += ' hovered'  // 添加悬停样式
}

/**
 * 拖拽离开事件处理函数
 * 功能：当拖拽元素离开容器时，移除悬停样式
 */
function dragLeave() {
    this.className = 'empty'  // 恢复原始样式
}

/**
 * 放置事件处理函数
 * 功能：当拖拽元素被放置到容器中时，将元素移动到该容器
 */
function dragDrop() {
    this.className = 'empty'  // 移除悬停样式
    this.append(fill)         // 将拖拽元素添加到当前容器中
}