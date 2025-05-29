// 好便宜快 - JavaScript实现
// 功能：演示项目管理三角理论 - 好质量、便宜、快速三者不可兼得

// 获取DOM元素
const toggles = document.querySelectorAll('.toggle')  // 所有开关元素
const good = document.querySelector('#good')          // 好质量开关
const cheap = document.querySelector('#cheap')        // 便宜开关
const fast = document.querySelector('#fast')          // 快速开关

/**
 * 为每个开关添加变化事件监听器
 * 当用户点击任何开关时，触发逻辑控制函数
 */
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

/**
 * 项目管理三角理论逻辑控制函数
 * @param {HTMLElement} theClickedOne - 被点击的开关元素
 * 
 * 核心原理：项目管理三角理论
 * - 好质量 + 便宜 + 快速 = 不可能同时实现
 * - 最多只能同时选择其中两个属性
 * 
 * 逻辑规则：
 * 1. 如果三个开关都被选中，则根据最后点击的开关决定关闭哪一个
 * 2. 点击"好质量"时，自动关闭"快速"（保持质量和价格，牺牲速度）
 * 3. 点击"便宜"时，自动关闭"好质量"（保持价格和速度，牺牲质量）
 * 4. 点击"快速"时，自动关闭"便宜"（保持质量和速度，牺牲价格）
 */
function doTheTrick(theClickedOne) {
    // 检查是否三个开关都被选中
    if(good.checked && cheap.checked && fast.checked) {
        
        if(good === theClickedOne) {
            // 用户选择了好质量，自动关闭快速
            // 理念：高质量的工作需要时间，不能急于求成
            fast.checked = false
        }

        if(cheap === theClickedOne) {
            // 用户选择了便宜，自动关闭好质量
            // 理念：低成本往往意味着质量妥协
            good.checked = false
        }

        if(fast === theClickedOne) {
            // 用户选择了快速，自动关闭便宜
            // 理念：快速交付通常需要更多资源投入
            cheap.checked = false
        }
    }
}