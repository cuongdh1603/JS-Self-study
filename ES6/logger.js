import {
    TYPE_LOG,
    
} from './constants.js'

function typeLog(log, type = TYPE_LOG){
    console[type](log)
}

export default typeLog