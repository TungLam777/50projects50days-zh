# 展开卡片 | Expanding Cards

## 📖 项目简介

这是一个美观的展开卡片效果项目，用户可以点击不同的卡片来查看不同的背景图片和内容。当点击某个卡片时，该卡片会展开占据更多空间，而其他卡片会收缩。

## 🎯 学习目标

通过这个项目，您将学习到：

- **CSS Flexbox布局**: 如何使用flex属性创建响应式布局
- **CSS过渡动画**: 使用transition属性创建平滑的动画效果
- **JavaScript DOM操作**: 如何选择元素并添加事件监听器
- **CSS类的动态切换**: 使用JavaScript动态添加和移除CSS类
- **响应式设计**: 使用媒体查询适配移动设备

## 🛠️ 技术栈

- **HTML5**: 语义化结构
- **CSS3**: Flexbox、过渡动画、媒体查询
- **JavaScript**: DOM操作、事件处理

## 🚀 功能特性

- ✨ 平滑的展开/收缩动画
- 📱 移动端响应式设计
- 🎨 美观的背景图片展示
- 🖱️ 直观的点击交互
- 🔄 自动重置其他卡片状态

## 📁 文件结构

```
expanding-cards/
├── index.html      # 主HTML文件
├── style.css       # 样式文件
├── script.js       # JavaScript逻辑
└── README.md       # 项目说明文档
```

## 🎨 核心CSS技术

### Flexbox布局
```css
.container {
  display: flex;
}

.panel {
  flex: 0.5;  /* 默认占比 */
}

.panel.active {
  flex: 5;    /* 激活时占比 */
}
```

### 过渡动画
```css
.panel {
  transition: all 700ms ease-in;
}
```

## 💻 核心JavaScript逻辑

### 事件监听
```javascript
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
```

## 📱 响应式设计

项目包含移动端适配，在小屏幕设备上会隐藏部分卡片以确保良好的用户体验。

## 🔧 本地运行

1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 点击不同的卡片查看效果

## 🎓 扩展练习

1. **添加更多卡片**: 尝试添加更多的卡片和背景图片
2. **修改动画效果**: 改变过渡时间和缓动函数
3. **添加文字内容**: 在卡片中添加更多的描述文字
4. **键盘导航**: 添加键盘方向键控制卡片切换
5. **自动播放**: 实现卡片的自动轮播功能

## 🐛 常见问题

**Q: 为什么图片加载很慢？**
A: 项目使用的是Unsplash的在线图片，加载速度取决于网络状况。可以替换为本地图片。

**Q: 在移动设备上显示不正常？**
A: 检查是否包含了viewport meta标签，并确保CSS媒体查询正确。

## 📚 相关知识点

- [CSS Flexbox完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS过渡动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions)
- [JavaScript事件处理](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
