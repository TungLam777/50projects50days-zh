// 滚动动画 - JavaScript实现
// 功能：监听页面滚动，当元素进入视口时触发滑入动画

// 获取所有需要动画的盒子元素
const boxes = document.querySelectorAll('.box')

// 监听窗口滚动事件
window.addEventListener('scroll', checkBoxes)

// 页面加载时执行一次检查，确保初始状态正确
checkBoxes()

/**
 * 检查盒子元素是否应该显示动画
 * 核心逻辑：
 * 1. 计算触发点位置（视口高度的80%处）
 * 2. 获取每个盒子相对于视口的位置
 * 3. 判断盒子是否进入触发区域
 * 4. 添加或移除显示类来控制动画
 */
function checkBoxes() {
    // 计算触发底部位置：视口高度的4/5处
    // 这意味着当元素顶部到达视口80%位置时就开始动画
    const triggerBottom = window.innerHeight / 5 * 4

    // 遍历所有盒子元素
    boxes.forEach(box => {
        // 获取盒子顶部相对于视口的位置
        // getBoundingClientRect()返回元素相对于视口的位置信息
        const boxTop = box.getBoundingClientRect().top

        // 判断盒子是否进入触发区域
        if(boxTop < triggerBottom) {
            // 盒子进入视口，添加show类触发滑入动画
            box.classList.add('show')
        } else {
            // 盒子离开视口，移除show类触发滑出动画
            box.classList.remove('show')
        }
    })
}
