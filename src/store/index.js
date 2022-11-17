import { configureStore} from '@reduxjs/toolkit';
import pacients from '../slices/pacients'
import professionals from '../slices/professionals'
import queries from '../slices/queries'
import reviews from '../slices/reviews'
import filters from '../slices/filters'

export const store = configureStore({
    reducer: {
        pacients,
        professionals,
        queries,
        reviews,
        filters
    }
})