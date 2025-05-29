# 模糊加载效果 | Blurry Loading

## 📖 项目简介

这是一个创意的模糊加载效果项目，模拟真实的页面加载过程。背景图片从完全模糊逐渐变得清晰，同时显示加载进度百分比，进度文字会随着加载完成而逐渐消失。这种效果常用于应用启动页面或内容加载过程中，提供优雅的视觉反馈。

## 🎯 学习目标

通过这个项目，您将学习到：

- **CSS滤镜效果**: 使用filter属性的blur()函数
- **JavaScript定时器**: 使用setInterval()和clearInterval()
- **数值映射算法**: 将一个数值范围映射到另一个范围
- **DOM样式操作**: 动态修改元素的CSS属性
- **视觉效果设计**: 创建平滑的加载动画
- **性能优化**: 合理使用定时器和清理机制

## 🛠️ 技术栈

- **HTML5**: 简洁的语义化结构
- **CSS3**: 滤镜效果、背景图片、定位布局
- **JavaScript**: 定时器、数值计算、DOM操作

## 🚀 功能特性

- ✨ 平滑的模糊到清晰过渡效果
- 📊 实时显示加载进度百分比
- 🎭 进度文字的淡出效果
- 🖼️ 高质量背景图片展示
- ⚡ 自动停止机制
- 🎨 优雅的视觉设计

## 📁 文件结构

```
blurry-loading/
├── index.html      # 主HTML文件
├── style.css       # 样式文件
├── script.js       # JavaScript逻辑
└── README.md       # 项目说明文档
```

## 🎨 核心CSS技术

### CSS滤镜效果
```css
.bg {
  filter: blur(0px);  /* 初始状态：清晰 */
}

/* JavaScript动态修改 */
bg.style.filter = `blur(30px)`  /* 最大模糊度 */
```

### 背景图片设置
```css
.bg {
  background: url('image.jpg') no-repeat center center/cover;
  /* 扩大尺寸防止模糊时边缘空白 */
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
}
```

## 💻 核心JavaScript逻辑

### 定时器控制
```javascript
let load = 0
let int = setInterval(blurring, 30)  // 每30ms执行一次

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)  // 完成时清除定时器
  }
}
```

### 数值映射算法
```javascript
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// 示例：将0-100映射到30-0
scale(50, 0, 100, 30, 0)  // 结果：15
```

### 同步动画效果
```javascript
// 进度文字透明度：1 → 0
loadText.style.opacity = scale(load, 0, 100, 1, 0)

// 背景模糊度：30px → 0px
bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
```

## 🔧 算法原理解析

### 数值映射公式
```
output = ((input - input_min) * (output_max - output_min)) / (input_max - input_min) + output_min
```

### 实际应用示例
```javascript
// 当加载进度为50%时：
// 透明度 = scale(50, 0, 100, 1, 0) = 0.5
// 模糊度 = scale(50, 0, 100, 30, 0) = 15px
```

## 🔧 本地运行

1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 观察模糊加载效果的完整过程

## 🎓 扩展练习

1. **修改加载速度**: 调整setInterval的时间间隔
2. **改变模糊范围**: 修改最大模糊度数值
3. **添加颜色过渡**: 为背景添加颜色叠加效果
4. **进度条显示**: 添加可视化的进度条
5. **多阶段加载**: 实现分阶段的加载效果
6. **音效反馈**: 为加载过程添加音效
7. **自定义背景**: 允许用户选择不同的背景图片
8. **加载文字动画**: 为百分比数字添加动画效果

## 🐛 常见问题

**Q: 为什么背景图片要扩大60px？**
A: 防止在模糊效果下边缘出现空白区域，确保整个视口都被覆盖。

**Q: 为什么使用30ms的定时器间隔？**
A: 这个间隔提供了流畅的动画效果，同时不会过度消耗性能。

**Q: 数值映射函数的作用是什么？**
A: 将加载进度(0-100)同时映射到透明度(1-0)和模糊度(30-0)，实现同步动画。

## 📚 相关知识点

- [CSS滤镜效果](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
- [JavaScript定时器](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)
- [CSS背景属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)
- [数学映射函数](https://en.wikipedia.org/wiki/Linear_interpolation)

## 🌟 项目亮点

- **视觉冲击**: 从模糊到清晰的渐变效果令人印象深刻
- **算法应用**: 数值映射算法的实际应用
- **性能考虑**: 合理的定时器使用和清理机制
- **用户体验**: 提供加载过程的视觉反馈

## 🎨 设计思考

这个项目展示了如何将数学算法应用到视觉效果中：

1. **线性映射**: 使用数学公式实现平滑的数值转换
2. **同步动画**: 多个属性同时变化但保持协调
3. **视觉反馈**: 为用户提供加载进度的直观显示
4. **性能优化**: 在视觉效果和性能之间找到平衡

这种加载效果在现代Web应用中非常实用，特别适合：
- 应用启动页面
- 图片加载过程
- 内容预加载阶段
- 数据处理等待时间

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
