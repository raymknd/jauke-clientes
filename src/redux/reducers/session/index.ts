import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Session } from './session.types'

interface ISessionState {
  session: Session.Root | null;
}

// Define the initial state using that type
const initialState: ISessionState = {
  session: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session.Root>) => {
      state.session = action.payload;
    },
    setPartial: (state, action: PayloadAction<Partial<Session.Root>>) => {
      if(state !== null) {
        state.session = Object.assign(state, action.payload) as Session.Root;
      }
    },
    destroySession: (state) => {
      state.session = null;
    }
  },
})

export const { setSession, setPartial, destroySession } = sessionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSession = (state: RootState) => state.session.session

export default sessionSlice.reducer