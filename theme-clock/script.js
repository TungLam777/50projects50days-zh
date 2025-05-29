// 主题时钟 - JavaScript实现
// 功能：显示实时时钟，支持明暗主题切换，包含模拟时钟和数字时间显示

// 获取DOM元素
const hourEl = document.querySelector('.hour')      // 时针元素
const minuteEl = document.querySelector('.minute')  // 分针元素
const secondEl = document.querySelector('.second')  // 秒针元素
const timeEl = document.querySelector('.time')      // 数字时间显示元素
const dateEl = document.querySelector('.date')      // 日期显示元素
const toggle = document.querySelector('.toggle')    // 主题切换按钮

// 星期数组（中文）
const days = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

// 月份数组（中文简写）
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

/**
 * 主题切换事件监听器
 * 功能：在明暗主题之间切换
 */
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    
    if (html.classList.contains('dark')) {
        // 当前是深色模式，切换到浅色模式
        html.classList.remove('dark')
        e.target.innerHTML = '深色模式'
    } else {
        // 当前是浅色模式，切换到深色模式
        html.classList.add('dark')
        e.target.innerHTML = '浅色模式'
    }
})

/**
 * 设置时钟时间函数
 * 功能：
 * 1. 获取当前时间
 * 2. 计算时针、分针、秒针的旋转角度
 * 3. 更新数字时间和日期显示
 */
function setTime() {
    const time = new Date();
    
    // 获取时间组件
    const month = time.getMonth()        // 月份 (0-11)
    const day = time.getDay()           // 星期 (0-6)
    const date = time.getDate()         // 日期 (1-31)
    const hours = time.getHours()       // 小时 (0-23)
    const hoursForClock = hours >= 13 ? hours % 12 : hours;  // 12小时制转换
    const minutes = time.getMinutes()   // 分钟 (0-59)
    const seconds = time.getSeconds()   // 秒钟 (0-59)
    const ampm = hours >= 12 ? '下午' : '上午'  // 上午/下午

    // 计算并设置指针旋转角度
    // 时针：12小时对应360度，每小时30度
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    
    // 分针：60分钟对应360度，每分钟6度
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    
    // 秒针：60秒对应360度，每秒6度
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    // 更新数字时间显示（12小时制）
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    
    // 更新日期显示
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

/**
 * 数值范围映射函数
 * @param {number} num - 输入数值
 * @param {number} in_min - 输入范围最小值
 * @param {number} in_max - 输入范围最大值
 * @param {number} out_min - 输出范围最小值
 * @param {number} out_max - 输出范围最大值
 * @returns {number} 映射后的数值
 * 
 * 功能：将一个范围的数值映射到另一个范围
 * 例如：将0-60的分钟数映射到0-360的角度
 * 
 * 来源：StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// 初始化时钟显示
setTime()

// 每秒更新一次时钟
setInterval(setTime, 1000)