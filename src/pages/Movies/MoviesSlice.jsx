import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        wishlist: []
    },
    reducers: {
        setWishlist: (state, action) => { state.wishlist = action.payload }
    }
});


const { actions, reducer } = MoviesSlice;

export const { setWishlist } = actions;
export default reducer;