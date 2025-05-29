// 表单波浪效果 - JavaScript实现
// 功能：将标签文字拆分为单个字符，为每个字符添加不同的动画延迟，创造波浪效果

// 获取所有表单控件的标签元素
const labels = document.querySelectorAll('.form-control label')

/**
 * 为每个标签创建波浪动画效果
 * 实现原理：
 * 1. 获取标签的文本内容
 * 2. 将文本拆分为单个字符
 * 3. 为每个字符创建span元素
 * 4. 为每个span设置递增的动画延迟时间
 * 5. 重新组合并替换原标签内容
 */
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')  // 将文本拆分为字符数组
        .map((letter, idx) => 
            // 为每个字符创建span元素，设置50ms递增的延迟时间
            `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join('')  // 将所有span元素连接成完整的HTML字符串
})
