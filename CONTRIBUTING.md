# 贡献指南 | Contributing Guide

感谢您对 50projects50days-zh 项目的关注！我们欢迎所有形式的贡献，无论是代码、文档、翻译还是问题反馈。

## 🤝 如何贡献

### 🐛 报告问题

如果您发现了 bug 或有改进建议，请：

1. 在 [Issues](https://github.com/your-username/50projects50days-zh/issues) 页面搜索是否已有相关问题
2. 如果没有，请创建新的 Issue，并提供：
   - 清晰的问题描述
   - 重现步骤（如果是 bug）
   - 期望的行为
   - 实际的行为
   - 浏览器和操作系统信息
   - 相关截图（如果适用）

### 📝 改进文档

文档改进包括但不限于：
- 修正错别字或语法错误
- 改进项目说明的清晰度
- 添加更多示例或用法说明
- 完善技术文档

### 🌐 参与翻译

我们正在翻译剩余的21个项目，您可以：

1. 选择一个未翻译的项目
2. 按照现有项目的翻译标准进行翻译
3. 确保包含完整的中文注释和README文档

#### 翻译标准

- **HTML文件**：
  - 更新 `lang` 属性为 `zh-CN`
  - 翻译所有用户界面文本
  - 添加中文meta信息（描述、关键词）
  - 保持原有的HTML结构和类名

- **JavaScript文件**：
  - 添加详细的中文注释
  - 翻译字符串内容（如提示信息）
  - 保持变量名和函数名为英文
  - 解释复杂逻辑的实现原理

- **CSS文件**：
  - 翻译所有注释为中文
  - 添加中文字体支持
  - 保持原有的类名和选择器
  - 解释重要样式的作用

- **README文档**：
  - 创建完整的中文项目说明
  - 包含学习目标和技术要点
  - 提供扩展练习建议
  - 说明实际应用场景

### ✨ 代码贡献

#### 开发环境设置

```bash
# 1. Fork 仓库到您的 GitHub 账户

# 2. 克隆您的 fork
git clone https://github.com/your-username/50projects50days-zh.git

# 3. 进入项目目录
cd 50projects50days-zh

# 4. 添加上游仓库
git remote add upstream https://github.com/original-username/50projects50days-zh.git

# 5. 创建新分支
git checkout -b feature/your-feature-name
```

#### 代码规范

- **HTML**：
  - 使用语义化标签
  - 保持适当的缩进（2个空格）
  - 添加必要的注释

- **CSS**：
  - 使用有意义的类名
  - 保持样式的模块化
  - 添加浏览器兼容性前缀（如需要）

- **JavaScript**：
  - 使用 ES6+ 语法
  - 保持函数简洁和单一职责
  - 添加详细的注释说明

#### 提交规范

使用清晰的提交信息：

```bash
# 功能添加
git commit -m "feat: 添加新项目 - 项目名称"

# 问题修复
git commit -m "fix: 修复项目X中的样式问题"

# 文档更新
git commit -m "docs: 更新项目Y的README文档"

# 翻译工作
git commit -m "i18n: 完成项目Z的中文翻译"
```

#### Pull Request 流程

1. 确保您的代码符合项目规范
2. 更新相关文档
3. 测试您的更改
4. 提交 Pull Request，包含：
   - 清晰的标题和描述
   - 更改的详细说明
   - 相关的 Issue 链接（如果有）
   - 测试结果截图（如果适用）

## 📋 项目结构

```
50projects50days-zh/
├── README.md                 # 项目主文档
├── CONTRIBUTING.md          # 贡献指南
├── LICENSE                  # 开源协议
├── .gitignore              # Git忽略文件
├── project-name-1/         # 项目1
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── project-name-2/         # 项目2
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
└── ...
```

## 🎯 翻译优先级

当前需要翻译的项目（按优先级排序）：

### 高优先级
1. `image-carousel` - 图片轮播
2. `hoverboard` - 悬停面板
3. `pokedex` - 口袋妖怪图鉴
4. `mobile-tab-navigation` - 移动端标签导航
5. `password-strength-background` - 密码强度背景

### 中优先级
6. `3d-background-boxes` - 3D背景盒子
7. `verify-account-ui` - 账户验证界面
8. `live-user-filter` - 实时用户过滤
9. `feedback-ui-design` - 反馈界面设计
10. `custom-range-slider` - 自定义范围滑块

### 低优先级
11. `netflix-mobile-navigation` - Netflix移动导航
12. `quiz-app` - 测验应用
13. `testimonial-box-switcher` - 推荐语切换器
14. `random-image-feed` - 随机图片流
15. `todo-list` - 待办事项列表

## 🏆 贡献者认可

我们会在以下地方认可所有贡献者：

- README.md 中的贡献者列表
- 项目的 Contributors 页面
- 特别贡献的单独致谢

## 📞 联系方式

如果您有任何问题或建议，可以通过以下方式联系我们：

- 📧 **邮箱**: your-email@example.com
- 💬 **微信群**: 扫描二维码加入
- 🐛 **GitHub Issues**: [问题反馈](https://github.com/your-username/50projects50days-zh/issues)
- 💡 **GitHub Discussions**: [讨论区](https://github.com/your-username/50projects50days-zh/discussions)

## 📜 行为准则

参与本项目即表示您同意遵守我们的行为准则：

- 尊重所有参与者
- 使用友善和包容的语言
- 接受建设性的批评
- 专注于对社区最有利的事情
- 对其他社区成员表现出同理心

## 🙏 感谢

感谢您考虑为 50projects50days-zh 项目做出贡献！每一个贡献，无论大小，都对项目的成功至关重要。

---

**让我们一起为中文开发者社区创造更好的学习资源！** 🚀