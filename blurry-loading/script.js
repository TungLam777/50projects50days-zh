// 模糊加载效果 - JavaScript实现
// 功能：模拟加载过程，背景图片从模糊逐渐变清晰，加载文字逐渐消失

// 获取DOM元素
const loadText = document.querySelector('.loading-text')  // 加载进度文字
const bg = document.querySelector('.bg')                  // 背景图片元素

// 加载进度变量（0-100）
let load = 0

// 设置定时器，每30毫秒执行一次模糊效果函数
let int = setInterval(blurring, 30)

/**
 * 模糊效果处理函数
 * 功能：
 * 1. 递增加载进度
 * 2. 更新进度文字显示
 * 3. 调整文字透明度（从1到0）
 * 4. 调整背景模糊度（从30px到0px）
 */
function blurring() {
  load++  // 进度递增

  // 当加载完成时清除定时器
  if (load > 99) {
    clearInterval(int)
  }

  // 更新进度文字显示
  loadText.innerText = `${load}%`
  
  // 使用数值映射函数调整文字透明度
  // 进度0-100 映射到 透明度1-0（逐渐消失）
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  
  // 使用数值映射函数调整背景模糊度
  // 进度0-100 映射到 模糊度30px-0px（逐渐清晰）
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/**
 * 数值范围映射函数
 * 将一个数值从一个范围映射到另一个范围
 * 
 * @param {number} num - 要映射的数值
 * @param {number} in_min - 输入范围的最小值
 * @param {number} in_max - 输入范围的最大值
 * @param {number} out_min - 输出范围的最小值
 * @param {number} out_max - 输出范围的最大值
 * @returns {number} 映射后的数值
 * 
 * 示例：scale(50, 0, 100, 1, 0) = 0.5
 * 将50从0-100范围映射到1-0范围，结果是0.5
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
