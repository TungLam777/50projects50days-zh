# 喝水提醒 | Drink Water

## 📖 项目简介

这是一个实用的喝水提醒应用，帮助用户追踪每日饮水量。用户可以点击小杯子来记录已喝的水量，大杯子会实时显示进度百分比和剩余水量。这个项目展示了数据可视化、状态管理和用户交互设计的最佳实践。

## 🎯 学习目标

通过这个项目，您将学习到：

- **数据可视化**: 使用CSS创建动态的进度条效果
- **状态管理**: 管理多个UI元素的状态同步
- **CSS变量**: 使用自定义属性管理主题颜色
- **条件逻辑**: 处理复杂的用户交互逻辑
- **DOM操作**: 动态更新元素的样式和内容
- **数学计算**: 百分比和剩余量的实时计算
- **用户体验设计**: 直观的视觉反馈和交互

## 🛠️ 技术栈

- **HTML5**: 语义化的应用结构
- **CSS3**: 自定义属性、过渡动画、Flexbox布局
- **JavaScript**: DOM操作、事件处理、数学计算

## 🚀 功能特性

- 💧 直观的饮水量可视化
- 📊 实时进度百分比显示
- 🎯 2升每日饮水目标
- 🔄 可重置的饮水记录
- 📱 响应式设计
- ✨ 平滑的动画效果
- 🎨 现代化的UI设计

## 📁 文件结构

```
drink-water/
├── index.html      # 主HTML文件
├── style.css       # 样式文件
├── script.js       # JavaScript逻辑
└── README.md       # 项目说明文档
```

## 🎨 核心CSS技术

### CSS自定义属性
```css
:root {
  --border-color: #144fc6;    /* 边框颜色 */
  --fill-color: #6ab3f8;      /* 填充颜色 */
}
```

### 动态高度动画
```css
.percentage {
  height: 0;              /* 初始高度 */
  transition: 0.3s ease;  /* 平滑动画 */
}

/* JavaScript动态设置 */
percentage.style.height = `${fullCups / totalCups * 330}px`
```

### 杯子形状设计
```css
.cup {
  border-radius: 0 0 40px 40px;  /* 底部圆角 */
  overflow: hidden;               /* 隐藏溢出 */
}
```

## 💻 核心JavaScript逻辑

### 状态管理
```javascript
function highlightCups(idx) {
    // 特殊情况处理
    if (idx === 7 && smallCups[idx].classList.contains("full")) {
        idx--
    }
    
    // 更新所有杯子状态
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}
```

### 进度计算
```javascript
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    
    // 计算百分比
    const percentage = fullCups / totalCups * 100
    
    // 计算剩余水量
    const remainingLiters = 2 - (250 * fullCups / 1000)
}
```

## 🔧 应用逻辑解析

### 1. 数据模型
- **目标水量**: 2升（2000毫升）
- **单杯容量**: 250毫升
- **总杯数**: 8杯
- **进度计算**: 已喝杯数 / 总杯数

### 2. 交互逻辑
- 点击小杯子：填充到该位置
- 点击已满杯子：减少一杯
- 特殊处理：最后一杯的点击逻辑

### 3. 视觉反馈
- 进度条高度动态变化
- 百分比实时更新
- 剩余水量显示/隐藏

### 4. 状态同步
- 小杯子状态 → 大杯子显示
- 进度百分比 ↔ 剩余水量
- 完成状态的特殊处理

## 🔧 本地运行

1. 克隆或下载项目文件
2. 在浏览器中打开 `index.html` 文件
3. 点击小杯子记录饮水量
4. 观察大杯子的进度变化

## 🎓 扩展练习

1. **自定义目标**: 允许用户设置不同的每日饮水目标
2. **时间追踪**: 记录每次饮水的时间
3. **数据持久化**: 使用localStorage保存饮水记录
4. **提醒功能**: 添加定时提醒功能
5. **统计图表**: 显示每周/每月的饮水统计
6. **多种容器**: 支持不同容量的杯子
7. **主题切换**: 添加多种颜色主题
8. **社交分享**: 分享每日饮水成就

## 🐛 常见问题

**Q: 为什么要特殊处理最后一杯的点击？**
A: 为了提供更好的用户体验，避免用户误操作时无法减少水量。

**Q: 进度条高度是如何计算的？**
A: 使用公式：(已满杯数 / 总杯数) * 大杯子高度(330px)

**Q: 如何修改每日饮水目标？**
A: 修改JavaScript中的计算逻辑和HTML中的目标显示文字。

## 📚 相关知识点

- [CSS自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)
- [CSS过渡动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions)
- [JavaScript classList API](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)
- [DOM查询选择器](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)

## 🌟 项目亮点

- **实用价值**: 真实的健康管理应用场景
- **视觉设计**: 直观的水杯进度可视化
- **交互体验**: 流畅的点击反馈和状态更新
- **代码质量**: 清晰的逻辑结构和详细注释

## 🎨 设计思考

这个项目展示了如何将抽象的数据（饮水量）转化为直观的视觉表现：

1. **隐喻设计**: 使用杯子形状作为进度容器
2. **即时反馈**: 点击立即看到视觉变化
3. **状态一致性**: 多个UI元素保持同步
4. **渐进式披露**: 根据状态显示/隐藏不同信息

### 健康应用价值

这类应用在现代生活中具有重要意义：
- 帮助用户建立健康习惯
- 提供可视化的目标追踪
- 简单易用的交互方式
- 即时的成就感反馈

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！