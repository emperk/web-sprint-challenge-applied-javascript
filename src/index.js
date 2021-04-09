// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
// DO NOT MAKE CHANGES TO THIS FILE
import 'regenerator-runtime'
import { worker } from './mocks/browser'

import { cardAppender } from './components/card'
import { tabsAppender } from './components/tabs'
import { headerAppender } from './components/header'

worker.start()

headerAppender('.header-container')
tabsAppender('.tabs-container')
cardAppender('.cards-container')


// window.onload=function(){
//     const header = document.querySelector('.header')
//     header.addEventListener("click", function() {
//       const temp = document.querySelector('.temp')
//       temp.textContent ="it's hot!"
//     })
//   }