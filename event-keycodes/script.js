// 事件键码 - JavaScript实现
// 功能：监听键盘事件，显示按键的详细信息（key、keyCode、code）

// 获取显示区域的DOM元素
const insert = document.getElementById('insert')

/**
 * 键盘按下事件监听器
 * 
 * 当用户按下任意键时，显示三种不同的键盘事件属性：
 * 1. event.key - 按键的实际值（如 'a', 'Enter', 'Shift'）
 * 2. event.keyCode - 按键的数字代码（已废弃，但仍广泛使用）
 * 3. event.code - 按键的物理位置代码（如 'KeyA', 'Enter', 'ShiftLeft'）
 * 
 * 特殊处理：
 * - 空格键显示为 'Space' 而不是空白
 * - 动态生成HTML内容展示键盘信息
 */
window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? '空格' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})
