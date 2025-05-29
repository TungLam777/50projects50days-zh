# 分屏着陆页 | Split Landing Page

## 📖 项目简介

这是一个创意的分屏着陆页设计，页面被分为左右两个区域，分别展示不同的产品（PlayStation 5 和 Xbox Series X）。当用户将鼠标悬停在某一侧时，该侧会平滑扩展占据更多空间，而另一侧相应收缩，创造出动态的视觉效果。

## 🎯 学习目标

通过这个项目，您将学习到：

- **CSS自定义属性**: 使用CSS变量管理主题和动画参数
- **CSS伪元素**: 使用::before创建叠加层效果
- **响应式设计**: 使用媒体查询适配移动设备
- **背景图片处理**: 使用background-size: cover实现图片适配
- **鼠标事件处理**: mouseenter和mouseleave事件
- **CSS过渡动画**: 创建平滑的宽度变化效果
- **布局技巧**: 绝对定位和百分比宽度的应用

## 🛠️ 技术栈

- **HTML5**: 简洁的语义化结构
- **CSS3**: 自定义属性、伪元素、过渡动画、响应式设计
- **JavaScript**: 鼠标事件处理、类操作

## 🚀 功能特性

- ✨ 平滑的分屏扩展/收缩动画
- 🎨 美观的背景图片和叠加效果
- 📱 完全响应式设计
- 🎯 直观的交互反馈
- 🔧 可自定义的动画参数
- 💫 现代化的视觉设计

## 📁 文件结构

```
split-landing-page/
├── index.html      # 主HTML文件
├── style.css       # 样式文件
├── script.js       # JavaScript逻辑
├── ps.jpg          # PlayStation背景图片
├── xbox.jpg        # Xbox背景图片
└── README.md       # 项目说明文档
```

## 🎨 核心CSS技术

### CSS自定义属性
```css
:root {
  --hover-width: 75%;     /* 悬停时扩展宽度 */
  --other-width: 25%;     /* 悬停时收缩宽度 */
  --speed: 1000ms;        /* 动画持续时间 */
}
```

### 伪元素叠加层
```css
.split.left::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--left-bg-color);
}
```

### 动态宽度控制
```css
.hover-left .left {
  width: var(--hover-width);  /* 75% */
}

.hover-left .right {
  width: var(--other-width);  /* 25% */
}
```

## 💻 核心JavaScript逻辑

### 鼠标事件处理
```javascript
// 左侧分屏事件
left.addEventListener('mouseenter', () => 
  container.classList.add('hover-left')
)
left.addEventListener('mouseleave', () => 
  container.classList.remove('hover-left')
)

// 右侧分屏事件
right.addEventListener('mouseenter', () => 
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () => 
  container.classList.remove('hover-right')
)
```

## 🔧 设计原理解析

### 1. 布局结构
- 使用绝对定位创建左右分屏
- 默认状态：每侧占50%宽度
- 悬停状态：一侧75%，另一侧25%

### 2. 视觉层次
- 背景图片：产品展示
- 伪元素叠加：颜色滤镜效果
- 前景内容：标题和按钮

### 3. 动画机制
- CSS变量控制动画参数
- transition属性实现平滑过渡
- JavaScript控制状态切换

### 4. 响应式适配
- 移动端调整字体大小和按钮尺寸
- 保持交互功能完整性

## 🔧 本地运行

1. 克隆或下载项目文件
2. 确保ps.jpg和xbox.jpg图片文件存在
3. 在浏览器中打开 `index.html` 文件
4. 将鼠标悬停在左右两侧体验效果

## 🎓 扩展练习

1. **添加更多分屏**: 创建三分屏或四分屏布局
2. **自定义产品**: 替换为其他产品的图片和信息
3. **添加动画效果**: 为标题和按钮添加进入动画
4. **触摸设备优化**: 为移动设备添加点击切换功能
5. **3D效果**: 使用CSS 3D变换增强视觉效果
6. **音效反馈**: 为悬停和点击添加音效
7. **数据驱动**: 使用JavaScript动态生成分屏内容
8. **主题切换**: 添加多种颜色主题选择

## 🐛 常见问题

**Q: 为什么要使用CSS变量？**
A: CSS变量让动画参数集中管理，便于调整和维护，也支持JavaScript动态修改。

**Q: 伪元素的作用是什么？**
A: 伪元素创建颜色叠加层，在不影响背景图片的情况下调整视觉效果。

**Q: 如何确保图片适配不同屏幕？**
A: 使用`background-size: cover`确保图片覆盖整个区域，同时保持比例。

## 📚 相关知识点

- [CSS自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)
- [CSS伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)
- [CSS过渡动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions)
- [鼠标事件](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)

## 🌟 项目亮点

- **视觉冲击**: 大胆的分屏设计和动态效果
- **用户体验**: 直观的交互和即时反馈
- **技术实现**: CSS变量和伪元素的巧妙运用
- **商业价值**: 适合产品对比和营销展示

## 🎨 设计思考

这个项目展示了现代Web设计的几个重要理念：

1. **对比展示**: 通过分屏设计突出产品差异
2. **交互引导**: 悬停效果引导用户探索
3. **视觉层次**: 背景、叠加、前景的清晰层次
4. **响应式思维**: 确保在各种设备上的良好体验

### 商业应用场景

这种设计特别适合：
- 产品对比页面
- 品牌选择界面
- 服务类型展示
- 营销活动页面

### 技术优势

- **性能优化**: 纯CSS动画，性能优异
- **可维护性**: CSS变量便于主题定制
- **可扩展性**: 易于添加更多分屏或功能
- **兼容性**: 现代浏览器广泛支持

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
