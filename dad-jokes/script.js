// 爸爸笑话 - JavaScript实现
// 功能：通过API获取随机笑话，展示异步编程和Fetch API的使用

// 获取DOM元素
const jokeEl = document.getElementById('joke')      // 笑话显示区域
const jokeBtn = document.getElementById('jokeBtn')  // 获取笑话按钮

// 为按钮添加点击事件监听器
jokeBtn.addEventListener('click', generateJoke)

// 页面加载时自动获取一个笑话
generateJoke()

/**
 * 使用 async/await 语法获取笑话
 * 
 * 异步函数的优势：
 * 1. 代码更易读，避免回调地狱
 * 2. 错误处理更简洁
 * 3. 调试更容易
 * 
 * API说明：
 * - 使用 icanhazdadjoke.com 免费笑话API
 * - 需要设置Accept头为application/json获取JSON格式数据
 * - 返回的数据包含joke字段
 */
async function generateJoke() {
  try {
    // 配置请求头，指定接受JSON格式的响应
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    // 发送异步请求到笑话API
    const res = await fetch('https://icanhazdadjoke.com', config)

    // 将响应转换为JSON格式
    const data = await res.json()

    // 将笑话内容显示在页面上
    jokeEl.innerHTML = data.joke

  } catch (error) {
    // 错误处理：如果API请求失败，显示友好的错误信息
    jokeEl.innerHTML = '抱歉，获取笑话失败了。请稍后再试！'
    console.error('获取笑话时出错:', error)
  }
}

/**
 * 使用 .then() 语法的替代实现（注释版本）
 * 
 * 这是传统的Promise处理方式，功能相同但代码稍显复杂
 * 保留此代码作为学习对比，展示两种异步编程风格的差异
 */
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
//     .catch((error) => {
//       jokeEl.innerHTML = '抱歉，获取笑话失败了。请稍后再试！'
//       console.error('获取笑话时出错:', error)
//     })
// }
