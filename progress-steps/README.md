# 进度步骤 | Progress Steps

## 📖 项目简介

这是一个美观的进度步骤指示器项目，用于展示多步骤流程的当前进度。用户可以通过"上一步"和"下一步"按钮来控制进度的前进和后退，进度条会动态显示当前完成的百分比。

## 🎯 学习目标

通过这个项目，您将学习到：

- **CSS自定义属性**: 使用CSS变量管理主题颜色
- **CSS伪元素**: 使用::before创建背景线条
- **JavaScript状态管理**: 管理当前激活步骤的状态
- **DOM操作**: 动态添加和移除CSS类
- **条件逻辑**: 根据当前状态控制按钮的可用性
- **数学计算**: 计算进度条的宽度百分比

## 🛠️ 技术栈

- **HTML5**: 语义化结构和按钮元素
- **CSS3**: 自定义属性、伪元素、过渡动画
- **JavaScript**: 事件处理、DOM操作、状态管理

## 🚀 功能特性

- ✨ 平滑的进度过渡动画
- 🎯 直观的步骤可视化
- 🔄 双向导航（前进/后退）
- 🚫 智能按钮状态管理
- 🎨 现代化的UI设计
- 📱 响应式布局

## 📁 文件结构

```
progress-steps/
├── index.html      # 主HTML文件
├── style.css       # 样式文件
├── script.js       # JavaScript逻辑
└── README.md       # 项目说明文档
```

## 🎨 核心CSS技术

### CSS自定义属性
```css
:root {
  --line-border-fill: #3498db;    /* 激活颜色 */
  --line-border-empty: #383838;   /* 未激活颜色 */
}
```

### 伪元素创建背景线
```css
.progress-container::before {
  content: '';
  background-color: var(--line-border-empty);
  /* 定位和样式设置 */
}
```

### 平滑过渡动画
```css
.progress, .circle {
  transition: 0.4s ease;
}
```

## 💻 核心JavaScript逻辑

### 状态管理
```javascript
let currentActive = 1  // 当前激活步骤

// 步骤前进
currentActive++
if(currentActive > circles.length) {
    currentActive = circles.length
}
```

### 进度计算
```javascript
// 计算进度条宽度
const width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
progress.style.width = width
```

### 按钮状态控制
```javascript
if(currentActive === 1) {
    prev.disabled = true        // 禁用上一步
} else if(currentActive === circles.length) {
    next.disabled = true        // 禁用下一步
}
```

## 🔧 本地运行

1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 点击"下一步"和"上一步"按钮测试功能

## 🎓 扩展练习

1. **增加步骤数量**: 修改HTML添加更多步骤圆圈
2. **自定义主题**: 修改CSS变量改变颜色主题
3. **添加步骤标签**: 在圆圈下方添加步骤描述文字
4. **键盘导航**: 添加左右箭头键控制步骤
5. **动画效果**: 为圆圈添加更丰富的动画效果
6. **进度百分比**: 显示具体的进度百分比数字
7. **步骤验证**: 添加步骤完成验证逻辑

## 🐛 常见问题

**Q: 为什么进度条宽度计算使用 (actives.length - 1) / (circles.length - 1)？**
A: 因为进度条连接的是圆圈之间的间隔，4个圆圈之间有3个间隔，所以需要减1。

**Q: 如何修改步骤数量？**
A: 在HTML中添加或删除 `.circle` 元素，JavaScript会自动适配。

**Q: 如何自定义颜色主题？**
A: 修改CSS中的 `--line-border-fill` 和 `--line-border-empty` 变量值。

## 📚 相关知识点

- [CSS自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)
- [CSS伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
- [JavaScript事件处理](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)
- [DOM classList API](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

## 🌟 项目亮点

- **用户体验**: 直观的进度可视化和流畅的交互
- **代码质量**: 清晰的结构和详细的注释
- **可扩展性**: 易于修改步骤数量和样式
- **响应式**: 适配不同屏幕尺寸

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
