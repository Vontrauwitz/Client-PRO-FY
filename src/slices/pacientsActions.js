import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPacients = createAsyncThunk('pacients/getPacients', async () => {
    try {
        const response = await axios.get('https://api-pro-fy-production.up.railway.app/api/users')
        const data = response.data.data.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0
        })
        return data
    } catch (error) {
        return error.message
    }
})

export const getPacient = createAsyncThunk('pacients/getPacient', async (id) => {
    try {
        const response = await axios.get(`https://api-pro-fy-production.up.railway.app/api/users/${id}`)
        return response.data.data
    } catch (error) {
        return error.message
    }
})

export const postPacient = createAsyncThunk('pacients/postPacient', async (newPacient) => {
    try {
        const response = await axios.post('https://api-pro-fy-production.up.railway.app/api/users', newPacient)      //NO SE PORQUÉ SI PONGO AWAIT NO ANDA (EN PROF, ACÁ NO SE)
        return response.data.data
    } catch (error) {
        return error.message
    }
})

export const putPacient = createAsyncThunk('pacients/putPacient', async ({ _id, ...pacient }) => {
    try {
        const response = await axios.put(`https://api-pro-fy-production.up.railway.app/api/users/${_id}`, pacient)      //NO SE PORQUÉ SI PONGO AWAIT NO ANDA (EN PROF, ACÁ NO SE)
        return response.data.data
    } catch (error) {
        return error.message
    }
})

export const deletePacient = createAsyncThunk('pacients/deletePacient', async (id) => {
    try {
        const response = await axios.delete(`https://api-pro-fy-production.up.railway.app/api/users/${id}`)      //NO SE PORQUÉ SI PONGO AWAIT NO ANDA (EN PROF, ACÁ NO SE)
        return response.data.data
    } catch (error) {
        return error.message
    }
})
