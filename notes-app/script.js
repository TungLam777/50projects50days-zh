// 笔记应用 - JavaScript实现
// 功能：创建、编辑、删除笔记，支持Markdown语法，数据本地存储

// 获取DOM元素
const addBtn = document.getElementById('add')  // 添加笔记按钮

// 从本地存储加载已保存的笔记
const notes = JSON.parse(localStorage.getItem('notes'))

// 如果本地存储中有笔记，则加载显示
if(notes) {
    notes.forEach(note => addNewNote(note))
}

// 添加笔记按钮事件监听器
addBtn.addEventListener('click', () => addNewNote())

/**
 * 添加新笔记函数
 * @param {string} text - 笔记内容（可选，默认为空）
 * 
 * 功能：
 * 1. 创建笔记DOM结构
 * 2. 设置编辑和删除功能
 * 3. 支持Markdown渲染
 * 4. 自动保存到本地存储
 */
function addNewNote(text = '') {
    // 创建笔记容器元素
    const note = document.createElement('div')
    note.classList.add('note')

    // 设置笔记HTML结构
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}" placeholder="在这里输入你的笔记...支持Markdown语法"></textarea>
    `

    // 获取笔记内的各个元素
    const editBtn = note.querySelector('.edit')      // 编辑按钮
    const deleteBtn = note.querySelector('.delete')  // 删除按钮
    const main = note.querySelector('.main')         // 显示区域
    const textArea = note.querySelector('textarea')  // 编辑区域

    // 设置初始内容
    textArea.value = text
    main.innerHTML = marked(text)  // 使用marked库解析Markdown

    /**
     * 删除按钮事件监听器
     * 功能：删除当前笔记并更新本地存储
     */
    deleteBtn.addEventListener('click', () => {
        note.remove()        // 从DOM中移除笔记
        updateLS()           // 更新本地存储
    })

    /**
     * 编辑按钮事件监听器
     * 功能：在编辑模式和预览模式之间切换
     */
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')      // 切换显示区域可见性
        textArea.classList.toggle('hidden')  // 切换编辑区域可见性
    })

    /**
     * 文本区域输入事件监听器
     * 功能：实时更新Markdown渲染和本地存储
     */
    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        // 实时渲染Markdown内容
        main.innerHTML = marked(value)

        // 更新本地存储
        updateLS()
    })

    // 将笔记添加到页面中
    document.body.appendChild(note)
}

/**
 * 更新本地存储函数
 * 功能：
 * 1. 收集所有笔记的文本内容
 * 2. 保存到浏览器的localStorage中
 * 3. 实现数据持久化
 */
function updateLS() {
    // 获取所有笔记的文本区域
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    // 收集所有笔记内容
    notesText.forEach(note => notes.push(note.value))

    // 保存到本地存储
    localStorage.setItem('notes', JSON.stringify(notes))
}