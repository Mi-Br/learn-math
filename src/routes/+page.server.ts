import { error } from "console"

const data = [1,2,3,4,5]

export  function load({params}) {
    if (!params) {
        return error('params not found')
    }
    console.log('params:', params)
    return {
       data
    }
}
