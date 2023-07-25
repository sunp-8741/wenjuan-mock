const Mock =  require('mockjs')
const Random = Mock.Random
const getComponentList = require('./getComponent.js')

function getStatList(len=10) {
    const res = []
    const componentList = getComponentList()
    for (let i = 0; i < len; i++) {
        const stat = {
            _id: Random.id()
        }
        componentList.forEach(c => {
            const {fe_id, type, props} = c
            switch (type) {
                case 'questionInput':
                case 'questionTextarea':
                    stat[fe_id] = Random.ctitle()
                    break
                case 'questionRadio':
                    stat[fe_id] = props.options[0].text
                    break
                case 'questionCheckbox':
                    stat[fe_id] = `${props.list[0].text},${props.list[1].text}`
                    break
            }
        })
        res.push(stat)
    }
    return res
}

module.exports = getStatList
