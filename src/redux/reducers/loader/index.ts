import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ILoaderState {
  open: boolean
}

// Define the initial state using that type
const initialState: ILoaderState = {
  open: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setVisible: (state) => {
      state.open = true;
    },
    setHidden: (state) => {
      state.open = false;
    },
  },
})

export const { setVisible, setHidden } = loaderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoader = (state: RootState) => state.loader.open

export default loaderSlice.reducer