const Mock =  require('mockjs')
const Random = Mock.Random
function getComponentList() {
    return [
        {
            fe_id: 'c1',
            type: 'questionInfo',
            isHidden: false,
            isLocked: false,
            title: '问卷标题',
            props: {
                title: '问卷信息',
                desc: '一个问卷描述'
            }
        },
        {
            fe_id: 'c2',
            type: 'questionTitle',
            title: '标题',
            isHidden: false,
            isLocked: false,
            props: {
                text: '个人信息调研',
                level: 1,
                isCenter: false
            }
        },
        {
            fe_id: 'c3',
            type: 'questionInput',
            isHidden: false,
            isLocked: false,
            title: '输入框',
            props: {
                title: '你的姓名',
                placeholder: '请输入姓名...'
            }
        },
        {
            fe_id: 'c4',
            type: 'questionInput',
            isHidden: false,
            isLocked: false,
            title: '输入框2',
            props: {
                title: '你的电话',
                placeholder: '请输入电话...'
            }
        },
        {
            fe_id: 'c5',
            type: 'questionParagraph',
            isHidden: false,
            isLocked: false,
            title: '段落',
            props: {
                text: '一行段落',
                isCenter: true
            }
        },
        {
            fe_id: 'c6',
            type: 'questionRadio',
            isHidden: false,
            isLocked: false,
            title: '单选',
            props: {
                title: '单选标题',
                isVertical: false,
                options: [
                    {
                        value: 'item1',
                        text: '选项1',
                    },
                    {
                        value: 'item2',
                        text: '选项2',
                    },
                    {
                        value: 'item3',
                        text: '选项3',
                    },
                ],
                value: '',
            }
        },
        {
            fe_id: 'c7',
            type: 'questionCheckbox',
            isHidden: false,
            isLocked: false,
            title: '多选',
            props: {
                title: '多选标题',
                isVertical: false,
                list: [
                    {
                        value: 'item1',
                        text: '选项1',
                        checked: false
                    },
                    {
                        value: 'item2',
                        text: '选项2',
                        checked: false

                    },
                    {
                        value: 'item3',
                        text: '选项3',
                        checked: false
                    },
                ],
                value: '',
            }
        }
    ]
}

module.exports = getComponentList
