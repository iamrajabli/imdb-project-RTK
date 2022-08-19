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

    const registerControlLocalStorage = (title, body) => {
        const data = getLocalStorage(title);
        let status = { status: false, mes:'' };


        data.forEach(user => {
            if (user.email === body.email && user.username === body.username) {
                status = { status: true, mes: 'This username and email is registered' };
            } else if (user.username === body.username) {
                status = { status: true, mes: 'This username is registered' };
            } else if (user.email === body.email) {
                status = { status: true, mes: 'This email is registered' };
            }
        })

        return status
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

    const deleteMovieFromWishlistLocalStorage = (title, currentUser, movieID) => {
        const data = getLocalStorage(title)

        data.forEach(user => {
            if (user.username === currentUser) {
                user.wishlist = user.wishlist.filter(movie => movie.id !== movieID)
            }
        })

        localStorage.setItem(title, JSON.stringify(data))
    }


    return {
        setLocalStorage,
        loginControlLocalStorage,
        setWishlistLocalStorage,
        getWishlistLocalStorage,
        deleteMovieFromWishlistLocalStorage,
        registerControlLocalStorage
    }

}

export default useLocalStorage;