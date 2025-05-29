// 音效面板 - JavaScript实现
// 功能：动态生成音效按钮，点击播放对应音效，同时停止其他正在播放的音效

// 音效名称数组（对应音频文件名和按钮文本）
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// 音效中文名称映射
const soundNames = {
    'applause': '掌声',
    'boo': '嘘声', 
    'gasp': '惊讶',
    'tada': '庆祝',
    'victory': '胜利',
    'wrong': '错误'
}

/**
 * 为每个音效创建对应的按钮
 * 实现步骤：
 * 1. 遍历音效数组
 * 2. 为每个音效创建按钮元素
 * 3. 设置按钮样式和文本
 * 4. 添加点击事件监听器
 * 5. 将按钮添加到页面中
 */
sounds.forEach(sound => {
    // 创建按钮元素
    const btn = document.createElement('button')
    btn.classList.add('btn')

    // 设置按钮文本为中文名称
    btn.innerText = soundNames[sound]

    /**
     * 按钮点击事件处理
     * 功能：
     * 1. 停止所有正在播放的音效
     * 2. 播放当前点击按钮对应的音效
     */
    btn.addEventListener('click', () => {
        stopSongs()  // 先停止所有音效

        // 播放当前音效
        document.getElementById(sound).play()
    })

    // 将按钮添加到按钮容器中
    document.getElementById('buttons').appendChild(btn)
})

/**
 * 停止所有音效播放
 * 功能：
 * 1. 遍历所有音效
 * 2. 暂停播放
 * 3. 重置播放位置到开头
 * 
 * 这样确保每次点击都从头开始播放，
 * 并且同时只有一个音效在播放
 */
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()        // 暂停播放
        song.currentTime = 0 // 重置播放位置到开头
    })
}
