import { createSlice } from '@reduxjs/toolkit'


export enum Filters {
    FASTEST_TIME,
    IMPROVEMENT,
    GENDER_MALE,
    GENDER_FEMALE,
    AGREGATED,
  }
  
  export enum FiltersImprovement {
    IMPROVEMENT_SECONDS,
    IMPROVEMENT_PERCENTAGE,
  }

export const clasifficationTableSlice = createSlice({
  name: 'clasifficationTable',
  initialState: {
    tableGenerated: Filters.IMPROVEMENT,
    filterImprovement: FiltersImprovement.IMPROVEMENT_PERCENTAGE,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.tableGenerated = action.payload;
    },
    changeFilterImprovement:(state) => {
        if(state.filterImprovement === FiltersImprovement.IMPROVEMENT_PERCENTAGE){
            state.filterImprovement = FiltersImprovement.IMPROVEMENT_SECONDS;
        }else{
            state.filterImprovement = FiltersImprovement.IMPROVEMENT_PERCENTAGE;
        }
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { changeFilter, changeFilterImprovement } = clasifficationTableSlice.actions

export default clasifficationTableSlice.reducer