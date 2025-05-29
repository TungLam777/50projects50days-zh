// 密码生成器 - JavaScript实现
// 功能：生成安全的随机密码，支持自定义长度和字符类型

// 获取DOM元素
const resultEl = document.getElementById('result')        // 密码结果显示元素
const lengthEl = document.getElementById('length')        // 密码长度输入框
const uppercaseEl = document.getElementById('uppercase')  // 大写字母复选框
const lowercaseEl = document.getElementById('lowercase')  // 小写字母复选框
const numbersEl = document.getElementById('numbers')      // 数字复选框
const symbolsEl = document.getElementById('symbols')      // 符号复选框
const generateEl = document.getElementById('generate')    // 生成按钮
const clipboardEl = document.getElementById('clipboard')  // 复制按钮

/**
 * 随机字符生成函数映射表
 * 将字符类型名称映射到对应的生成函数
 */
const randomFunc = {
    lower: getRandomLower,    // 小写字母生成函数
    upper: getRandomUpper,    // 大写字母生成函数
    number: getRandomNumber,  // 数字生成函数
    symbol: getRandomSymbol   // 符号生成函数
}

/**
 * 复制到剪贴板事件监听器
 * 功能：将生成的密码复制到系统剪贴板
 */
clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    
    if (!password) {
        return;  // 如果没有密码则不执行复制
    }
    
    // 使用现代剪贴板API复制文本
    navigator.clipboard.writeText(password);
    alert('密码已复制到剪贴板！')
})

/**
 * 生成密码事件监听器
 * 功能：根据用户设置生成新密码
 */
generateEl.addEventListener('click', () => {
    // 获取用户设置
    const length = +lengthEl.value          // 密码长度（转换为数字）
    const hasLower = lowercaseEl.checked    // 是否包含小写字母
    const hasUpper = uppercaseEl.checked    // 是否包含大写字母
    const hasNumber = numbersEl.checked     // 是否包含数字
    const hasSymbol = symbolsEl.checked     // 是否包含符号

    // 生成密码并显示
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

/**
 * 密码生成主函数
 * @param {boolean} lower - 是否包含小写字母
 * @param {boolean} upper - 是否包含大写字母
 * @param {boolean} number - 是否包含数字
 * @param {boolean} symbol - 是否包含符号
 * @param {number} length - 密码长度
 * @returns {string} 生成的密码
 * 
 * 算法说明：
 * 1. 统计选中的字符类型数量
 * 2. 创建类型数组，只包含选中的类型
 * 3. 循环生成字符，确保每种类型都有代表
 * 4. 截取到指定长度
 */
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    
    // 计算选中的字符类型数量
    const typesCount = lower + upper + number + symbol
    
    // 创建包含选中类型的数组
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    // 如果没有选择任何类型，返回空字符串
    if(typesCount === 0) {
        return ''
    }

    // 生成密码：循环添加每种类型的字符
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]  // 获取类型名称
            generatedPassword += randomFunc[funcName]()  // 调用对应的生成函数
        })
    }

    // 截取到指定长度（因为可能生成的字符超过需要的长度）
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

/**
 * 生成随机小写字母
 * @returns {string} 随机小写字母 (a-z)
 * 
 * 原理：ASCII码 97-122 对应 a-z
 */
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

/**
 * 生成随机大写字母
 * @returns {string} 随机大写字母 (A-Z)
 * 
 * 原理：ASCII码 65-90 对应 A-Z
 */
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

/**
 * 生成随机数字
 * @returns {string} 随机数字 (0-9)
 * 
 * 原理：ASCII码 48-57 对应 0-9
 */
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

/**
 * 生成随机符号
 * @returns {string} 随机符号
 * 
 * 从预定义的符号字符串中随机选择一个
 */
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}