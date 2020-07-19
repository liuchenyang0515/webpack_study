// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

// 引入第三方模块
import _ from 'lodash' // 第三方库引用一次就抽取出来 71K（gzipped:24.7k）
console.log(_.each)

const sumRes = sum(10, 30)
console.log('sumRes', sumRes)

// 引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)


// 增加，开启热更新之后的代码逻辑
if (module.hot) {
    module.hot.accept(['./math'], () => {
        const sumRes = sum(10, 36)
        console.log('sumRes in hot', sumRes)
    })
}

setTimeout(() => {
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message) // 注意这里的default
    })
}, 1500);