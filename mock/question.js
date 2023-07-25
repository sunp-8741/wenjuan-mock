const Mock =  require('mockjs')
const Random = Mock.Random
const getQuestionData = require('./data/getQuestionData.js')
const getComponentList = require('./data/getComponent.js')
module.exports = [
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isPublished: true,
                    componentList: getComponentList()
                }
            }
        }
    },
    // 创建问卷
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    {
        url: '/api/question',
        method: 'get',
        response(ctx) {
            console.log(ctx.query)
            const {query} = ctx
            const isDeleted = ctx.url.includes('isDeleted=true')
            const isStar = ctx.url.includes('isStar=true')
            const pageSize = parseInt(query.pageSize) || 10
            return {
                errno: 0,
                data: {
                    list: getQuestionData({isDeleted, isStar, len: pageSize}),
                    total: 100
                }
            }
        }
    },
    {
    //     更新问卷
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0,
            }
        }
    },
    {
        //     复制问卷
        url: '/api/question/duplicate/:id',
        method: 'patch',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    // 批量彻底删除
    {
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    },
]
