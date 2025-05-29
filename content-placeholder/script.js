// 内容占位符 - JavaScript实现
// 功能：模拟内容加载过程，从骨架屏动画过渡到真实内容显示

// 获取DOM元素
const header = document.getElementById('header')           // 头部图片容器
const title = document.getElementById('title')             // 标题容器
const excerpt = document.getElementById('excerpt')         // 摘要容器
const profile_img = document.getElementById('profile_img') // 头像容器
const name = document.getElementById('name')               // 姓名容器
const date = document.getElementById('date')               // 日期容器

// 获取所有动画背景元素
const animated_bgs = document.querySelectorAll('.animated-bg')         // 背景动画元素
const animated_bg_texts = document.querySelectorAll('.animated-bg-text') // 文本动画元素

// 2.5秒后加载真实内容（模拟网络请求延迟）
setTimeout(getData, 2500)

/**
 * 获取数据函数
 * 功能：
 * 1. 模拟从服务器获取数据
 * 2. 用真实内容替换占位符
 * 3. 移除骨架屏动画效果
 */
function getData() {
  // 设置头部图片（风景图片）
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="文章配图" />'
  
  // 设置文章标题
  title.innerHTML = '探索现代前端开发技术'
  
  // 设置文章摘要
  excerpt.innerHTML =
    '深入了解现代前端开发的最新技术和最佳实践，包括响应式设计、性能优化和用户体验提升。'
  
  // 设置作者头像（随机用户头像）
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="作者头像" />'
  
  // 设置作者姓名
  name.innerHTML = '张三'
  
  // 设置发布日期
  date.innerHTML = '2024年1月15日'

  // 移除所有背景动画效果
  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  
  // 移除所有文本动画效果
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}