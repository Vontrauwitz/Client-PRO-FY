import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    queries: [],
    todayQueries: [],
    tomorrowQueries: [],
    tomorrowAfterQueries: [],
    query: {},
    motives: [],
    modalities: ["Llamada urgente", "Videollamada", "Email", "Presencial"],
    payments: ["Transferencia", "Tarjeta de crédito"],
    status: "",
    error: ""
}

export const queriesSlice = createSlice({
    name: 'queriesSlice',
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
    builder 
        .addMatcher(
            (action) => action.type.startsWith("queries/") && action.type.endsWith("/pending"),
            (state) => {state.status = 'loading'}
        )
        .addMatcher(
            (action) => action.type.startsWith("queries/getQueries") && action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.status = 'succeeded'
                state.queries = action.payload
                for (const query of action.payload) {
                    if(!state.motives.includes(query['motive'])) state.motives.push(query['motive'])
                }
                const today = new Date().getDate()
                const tomorrow = new Date().getDate() + 1
                const tomorrowAfter = new Date().getDate() + 2
                const month = new Date().getMonth() + 1 
                const year = new Date().getFullYear()
                const fullToday = year + '-' + month + '-' + today
                const fullTomorrow = year + '-' + month + '-' + tomorrow
                const fullTomorrowAfter = year + '-' + month + '-' + tomorrowAfter
                // state.todayQueries = action.payload.filter(q => q.date.slice(0, 10) === fullToday)
                // state.tomorrowQueries = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrow)
                // state.tomorrowAfterQueries = action.payload.filter(q => q.date.slice(0, 10) === fullTomorrowAfter)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("queries/getQueryById") && action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.status = 'succeeded'
                state.query = action.payload
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("queries/postQuery"||"queries/putQuery") && action.type.endsWith("/fulfilled"),
            (state) => {
                state.status = 'succeeded'
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("queries/deleteQuery") && action.type.endsWith("/fulfilled"),
            (state, action) => {
                state.status = 'succeeded'
                state.queries = state.queries.filter(p => p.id !== action.payload)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith("queries/") && action.type.endsWith("/rejected"),
            (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
        )
    }, 
});

export const queries = (state) => state.queries
export const queriesStatus = (state) => state.status
export const queriesError = (state) => state.error
export const querie = (state) => state.query
export const querieStatus = (state) => state.status
export const querieError = (state) => state.error

export default queriesSlice.reducer