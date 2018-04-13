import { combineReducers } from 'redux'
import { reducer as main } from '../view/main/'
import { reducer as category } from '../view/category/'
import { reducer as home } from '../view/home/'
import { reducer as discovery } from '../view/discovery/'
import { reducer as shoppingcar } from '../view/shoppingcar/'
import { reducer as mine } from '../view/mine/'

const reducer = combineReducers({
    main,
    home,
    category,
    discovery,
    shoppingcar,
    mine
})

export default reducer
