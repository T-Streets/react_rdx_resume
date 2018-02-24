import { combineReducers } from 'redux'
import GithubReducer from './reducer_github'

const rootReducer = combineReducers({
    githubInfo: GithubReducer
}) 

export default rootReducer

