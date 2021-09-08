import { useState } from 'react';

function CustomHook(arrayList) {
    const [array, setArray] = useState(arrayList)
    const [name, setName] = useState('')
    const changeName = (e) => {
        setName(e.target.value)
    }
    const addName = () => {
        let newArray = [].concat(array)
        newArray = [...newArray, name]
        setArray(newArray)
        setName("")
    }

    return [name, changeName, addName, array]
}

export default CustomHook;