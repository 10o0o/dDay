import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DDay, DDayAddPayload, DDayRemovePayload, DDayUpdatePayload } from '../interfaces';
import { RootState } from './store';

interface DDayState {
  dDays: DDay[];
  count: number;
}

// const initialState: DDayState = {
//   dDays: [],
//   count: 1,
// };

const initialState: DDayState = {
  dDays: [{
    id: 1,
    title: 'test title',
    endDate: new Date(),
    leftDays: 56,
  }],
  count: 2,
};

const dDaySlice = createSlice({
  name: 'dDay',
  initialState,
  reducers: {
    addDDay: (state, action: PayloadAction<DDayAddPayload>) => {
      /**
       * TODO
       * endDate auto calculator
       */

      state.dDays.push({
        id: state.count,
        endDate: new Date(),
        ...action.payload
      });
      state.count += 1;
    },

    removeDDay: (state, action: PayloadAction<DDayRemovePayload>) => {
      return {
        dDays: state.dDays.filter((dDay) => dDay.id !== action.payload.id),
        count: state.count
      }
    },

    updateDDay: (state, action: PayloadAction<DDayUpdatePayload>) => {
      const targetDdayIndex = state.dDays.findIndex(el => el.id === action.payload.id);

      if (targetDdayIndex !== -1) {
        const updatedTargetDday = {
          ...state.dDays[targetDdayIndex],
          ...action.payload,
        };

        const newDdays = [...state.dDays];
        newDdays[targetDdayIndex] = updatedTargetDday;

        if (action.payload.leftDays) {
          /**
           * TODO
           * endDate auto calculator
           */
        }

        return {
          dDays: newDdays,
          count: state.count
        }
      }
    }
  },
});

export const { addDDay, removeDDay, updateDDay } = dDaySlice.actions;

export default dDaySlice.reducer;
