import request from '@/utils/request'

// 查询文章列表
export function articleList(query) {
    return request({
        url: '/article/articleList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

//查询最热文章
export function hotArticleList() {
    return request({
        url: '/article/hotArticleList',
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

// 查询最新文章
export function latestArticleList() {
  return request({
    url: '/article/latestArticleList',
    headers: {
      isToken: false
    },
    method: 'get'
  })
}

//获取文章详情
export function getArticle(articleId) {
    return request({
        url: '/article/' + articleId,
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

export function updateViewCount(articleId) {
    return request({
        url: '/article/updateViewCount/' + articleId,
        headers: {
          isToken: false
        },
        method: 'put'
    })
    
}
// 提交文章目录索引
export function postArticleIndex(directoryIndex) {
  return request({
    url: '/index/postArticleIndex',
    method: 'post',
    headers: {
      isToken: false
    },
    data: directoryIndex
  })
}

// 获取文章目录索引
export function getArticleIndex() {
  return request({
    url: '/index/getArticleIndex',
    method: 'get',
    headers: {
      isToken: false
    }
  })
}
