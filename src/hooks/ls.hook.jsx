const useLocalStorage = () => {

    const getLocalStorage = (title) => {
        let data;

        if (localStorage.getItem(title) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(title))
        }

        return data;
    }

    const setLocalStorage = (title, body) => {
        const data = getLocalStorage(title);

        data.push(body);

        localStorage.setItem(title, JSON.stringify(data))
    }

    const loginControlLocalStorage = (title, body) => {
        const data = getLocalStorage(title);
        let status = false;

        data.forEach(user => {
            if (user.username === body.username) {
                if (user.pass === body.pass) {
                    status = true;
                }
            }
        });

        return status;
    }

    const setWishlistLocalStorage = (title, currentUser, body) => {
        const data = getLocalStorage(title);

        data.forEach(user => {
            if (user.username = currentUser) {
                user.wishlist.push(body)
            }
        });

        localStorage.setItem(title, JSON.stringify(data));
    }

    const getWishlistLocalStorage = (title, currentUser) => {
        const data = getLocalStorage(title);
        let wishlist;

        data.forEach(user => {
            if (user.username === currentUser) {
                wishlist = user.wishlist
            }
        })
        return wishlist
    }


    return { setLocalStorage, loginControlLocalStorage, setWishlistLocalStorage, getWishlistLocalStorage }

}

export default useLocalStorage;