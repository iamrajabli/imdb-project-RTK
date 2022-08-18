const useSessionStorage = () => {

    const getSessionStorage = (title) => {
        return JSON.parse(sessionStorage.getItem(title))
    }

    const setSessionStorage = (title, body) => {
        sessionStorage.setItem(title, JSON.stringify(body))
    }


    return { getSessionStorage, setSessionStorage }
}

export default useSessionStorage;