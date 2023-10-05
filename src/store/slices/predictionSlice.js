// predictionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'utils/axios';

const initialState = {
    casNumber: '',
    selectedSpecies: '',
    predictedValue: null
};

const predictionSlice = createSlice({
    name: 'prediction',
    initialState,
    reducers: {
        setCasNumber: (state, action) => {
            state.casNumber = action.payload;
        },

        setSelectedSpecies: (state, action) => {
            state.selectedSpecies = action.payload;
        },

        setPredictedValue: (state, action) => {
            state.predictedValue = action.payload;
        },

        resetPredictionData: (state) => {
            state.casNumber = initialState.casNumber;
            state.selectedSpecies = initialState.selectedSpecies;
            state.predictedValue = initialState.predictedValue;
        }
    }
});

export const { setCasNumber, setSelectedSpecies, setPredictedValue, resetPredictionData } = predictionSlice.actions;

export const selectCasNumber = (state) => state.prediction.casNumber;
export const selectSelectedSpecies = (state) => state.prediction.selectedSpecies;

export default predictionSlice.reducer;

//---------------------------------------------------

// Define an asynchronous thunk action for making the API call
export const predictHalfLife = createAsyncThunk('predictHalfLife', async (formData, { dispatch, rejectWithValue }) => {
    try {
        console.log(formData);
        // Make the API call here using formData
        const response = await axios.post('http://localhost:8000/', formData);
        console.log(response.data);
        dispatch(setPredictedValue(response.data));
        return response.data;
    } catch (error) {
        // Handle API call errors here
        return rejectWithValue(error.message);
    }
});
