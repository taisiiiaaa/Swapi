import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getData = createAsyncThunk('getRelevantData', async ({ entity, num }) => {
    const response = await axios.get(`https://www.swapi.tech/api/${entity}/${num}`);
    return {
        entity,
        data: {
            uid: response.data.result.uid,
            properties: response.data.result.properties
        }
    };
});

const initialState = {
    people: {},
    planets: {},
    starships: {},
};

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getData.fulfilled, (state, action) => {
            const { entity, data } = action.payload;

            if (!state[entity]) {
                return;
            }
            const { uid, properties } = data;

            state[entity][uid] = {
                uid,
                properties
            };
        })
    }
});

export default swapiSlice.reducer;