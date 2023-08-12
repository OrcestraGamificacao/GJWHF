import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    nome: '',
    pontuacao: 0,
    data: new Date()
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setNome: (state, action) => {
      state.nome = action.payload
    },
    incrementPontuacao: state => {
        state.pontuacao += 1
    }
  }
})

export const { setNome, incrementPontuacao } = sessionSlice.actions

export default sessionSlice.reducer