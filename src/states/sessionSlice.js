import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nome: '',
  pontuacao: 0,
  data: '',
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setNome: (state, action) => {
      state.nome = action.payload
    },
    setData: (state, action) => {	
      state.data = action.payload
    },
    setPontuacao: (state, action) => {
      state.pontuacao = action.payload
    },
    incrementPontuacao: (state) => {
      state.pontuacao += 1
    },
  }
})

export const { setNome, setData,setPontuacao, incrementPontuacao } = sessionSlice.actions

export default sessionSlice.reducer