// 背景滑块 - JavaScript实现
// 功能：实现背景图片轮播，支持左右切换，同步更新页面背景

// 获取DOM元素
const body = document.body                              // 页面主体元素
const slides = document.querySelectorAll('.slide')     // 所有幻灯片元素
const leftBtn = document.getElementById('left')         // 左箭头按钮
const rightBtn = document.getElementById('right')       // 右箭头按钮

// 当前激活的幻灯片索引
let activeSlide = 0

/**
 * 右箭头按钮点击事件
 * 功能：切换到下一张幻灯片
 */
rightBtn.addEventListener('click', () => {
  activeSlide++

  // 如果超过最后一张，回到第一张（循环播放）
  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  // 更新背景和激活状态
  setBgToBody()
  setActiveSlide()
})

/**
 * 左箭头按钮点击事件
 * 功能：切换到上一张幻灯片
 */
leftBtn.addEventListener('click', () => {
  activeSlide--

  // 如果小于第一张，跳到最后一张（循环播放）
  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  // 更新背景和激活状态
  setBgToBody()
  setActiveSlide()
})

// 页面加载时设置初始背景
setBgToBody()

/**
 * 设置页面背景图片
 * 功能：将当前激活幻灯片的背景图片应用到页面主体
 * 
 * 实现原理：
 * 1. 获取当前激活幻灯片的背景图片样式
 * 2. 将该样式应用到body元素
 * 3. 创建背景与前景内容的视觉联系
 */
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

/**
 * 设置激活的幻灯片
 * 功能：更新幻灯片的激活状态，控制显示/隐藏
 * 
 * 实现原理：
 * 1. 移除所有幻灯片的active类
 * 2. 为当前幻灯片添加active类
 * 3. 通过CSS控制透明度实现淡入淡出效果
 */
function setActiveSlide() {
  // 移除所有幻灯片的激活状态
  slides.forEach((slide) => slide.classList.remove('active'))

  // 激活当前幻灯片
  slides[activeSlide].classList.add('active')
}