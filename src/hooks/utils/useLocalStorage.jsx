import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue) {
    const [storevalue, setStoreValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return (item !== null) ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    function setLocalStorage(value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            setStoreValue(value)
        } catch (e) {
            console.error(e)
        }
    }

    function removeStorage(currentKey) {
        try {
            if (currentKey) {
                localStorage.removeItem(currentKey)
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(function() {
        if(typeof storevalue === Array.isArray) {
            if(Object.keys(storevalue).length === 0) {
                console.log('todos')
                setLocalStorage(initialValue);
            }
        }
        
        if(typeof storevalue === 'string') {
            if(storevalue.length === 0 || storevalue === '') {
                console.log('string')
                setLocalStorage(initialValue);
            }
        }
    }, []);

    return [storevalue, setLocalStorage, removeStorage];
}