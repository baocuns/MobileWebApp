import { deleteFavouriteTour } from "../tourSlice";

export const deleteTour = (tours = null, tour = null, dispatch = null) => {
    if (tours === null || tour === null || dispatch === null) {
        return;
    }
    dispatch(deleteFavouriteTour(tours.filter(item => item._id !== tour._id)))
}

