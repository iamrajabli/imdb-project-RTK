import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        wishlist: []
    },
    reducers: {
        setWishlist: (state, action) => { state.wishlist = action.payload },
        deleteWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(movie => movie.id !== action.payload)
        }
    }
});


const { actions, reducer } = MoviesSlice;

export const { setWishlist, deleteWishlist } = actions;
export default reducer;