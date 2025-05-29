// 电影应用 - JavaScript实现
// 功能：使用TMDB API获取和搜索电影数据，展示电影信息和评分

// API配置常量
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'  // 电影海报图片基础路径
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// 获取DOM元素
const main = document.getElementById('main')      // 主内容区域
const form = document.getElementById('form')      // 搜索表单
const search = document.getElementById('search')  // 搜索输入框

// 页面加载时获取热门电影
getMovies(API_URL)

/**
 * 异步获取电影数据
 * @param {string} url - API请求URL
 * 
 * 功能：
 * 1. 发送异步请求到TMDB API
 * 2. 解析JSON响应数据
 * 3. 调用showMovies函数显示电影列表
 */
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

/**
 * 显示电影列表
 * @param {Array} movies - 电影数据数组
 * 
 * 功能：
 * 1. 清空现有内容
 * 2. 遍历电影数据创建电影卡片
 * 3. 为每个电影添加海报、标题、评分和简介
 */
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        // 创建电影卡片元素
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        // 设置电影卡片HTML内容
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>剧情简介</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieEl)
    })
}

/**
 * 根据评分获取对应的CSS类名
 * @param {number} vote - 电影评分（0-10）
 * @returns {string} CSS类名
 * 
 * 评分颜色规则：
 * - 8分及以上：绿色（优秀）
 * - 5-8分：橙色（良好）
 * - 5分以下：红色（较差）
 */
function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

/**
 * 搜索表单提交事件处理
 * 功能：
 * 1. 阻止表单默认提交行为
 * 2. 获取搜索关键词
 * 3. 如果有搜索词则搜索电影，否则重新加载页面显示热门电影
 */
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        // 搜索电影
        getMovies(SEARCH_API + searchTerm)
        
        // 清空搜索框
        search.value = ''
    } else {
        // 重新加载页面显示热门电影
        window.location.reload()
    }
})