const Mock =  require('mockjs')
const Random = Mock.Random

function getQuestionData(option) {
    const {len=10, isDeleted, isStar} = option
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(),
            title: Random.title(),
            isPublished: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),
            createdAt: Random.datetime(),
            isDeleted
        })
    }
    return list
}

module.exports = getQuestionData
