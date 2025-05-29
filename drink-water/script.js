// 喝水提醒 - JavaScript实现
// 功能：追踪用户每日饮水量，提供可视化的进度显示

// 获取DOM元素
const smallCups = document.querySelectorAll('.cup-small')  // 所有小杯子
const liters = document.getElementById('liters')           // 剩余升数显示
const percentage = document.getElementById('percentage')   // 百分比显示
const remained = document.getElementById('remained')       // 剩余区域

// 页面加载时更新大杯子显示
updateBigCup()

/**
 * 为每个小杯子添加点击事件监听器
 * 点击时高亮显示到该杯子为止的所有杯子
 */
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

/**
 * 高亮显示杯子函数
 * @param {number} idx - 点击的杯子索引
 * 
 * 逻辑说明：
 * 1. 如果点击最后一个杯子且已满，则减少一个
 * 2. 如果点击已满的杯子且下一个杯子未满，则减少一个
 * 3. 否则正常填充到点击位置
 */
function highlightCups(idx) {
    // 特殊情况处理：点击最后一个已满的杯子
    if (idx === 7 && smallCups[idx].classList.contains("full")) {
        idx--
    } 
    // 特殊情况处理：点击已满杯子且下一个未满
    else if(smallCups[idx].classList.contains('full') && 
            !smallCups[idx].nextElementSibling?.classList.contains('full')) {
        idx--
    }

    // 更新所有杯子的状态
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')      // 添加已满样式
        } else {
            cup.classList.remove('full')   // 移除已满样式
        }
    })

    // 更新大杯子的显示
    updateBigCup()
}

/**
 * 更新大杯子的显示状态
 * 功能：
 * 1. 计算已喝水量的百分比
 * 2. 更新进度条高度和百分比文字
 * 3. 计算并显示剩余水量
 */
function updateBigCup() {
    // 计算已满的小杯子数量
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // 处理百分比显示
    if(fullCups === 0) {
        // 没有喝水时隐藏百分比
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // 显示百分比和进度条
        percentage.style.visibility = 'visible'
        // 计算进度条高度：(已满杯数 / 总杯数) * 大杯子高度
        percentage.style.height = `${fullCups / totalCups * 330}px`
        // 显示百分比文字
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // 处理剩余水量显示
    if(fullCups === totalCups) {
        // 全部喝完时隐藏剩余显示
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        // 显示剩余水量
        remained.style.visibility = 'visible'
        // 计算剩余升数：2L - (250ml * 已满杯数 / 1000)
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}