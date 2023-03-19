import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DDay,
  DDayAddPayload,
  DDayRemovePayload,
  DDayUpdatePayload,
} from '../interfaces';

interface DDayState {
  dDays: DDay[];
  count: number;
}

// const initialState: DDayState = {
//   dDays: [],
//   count: 1,
// };

const initialState: DDayState = {
  dDays: [
    {
      id: 1,
      title: 'test title',
      endDate: new Date(),
      leftDays: 1,
    },
    {
      id: 2,
      title: 'test title2',
      endDate: new Date(),
      leftDays: 22,
    },
  ],
  count: 3,
};

const dDaySlice = createSlice({
  name: 'dDay',
  initialState,
  reducers: {
    addDDay: (state, action: PayloadAction<DDayAddPayload>) => {
      /**
       * TODO
       * leftDays auto calculator
       */

      state.dDays.push({
        id: state.count,
        leftDays: state.count,
        ...action.payload,
      });
      state.count += 1;
    },

    removeDDay: (state, action: PayloadAction<DDayRemovePayload>) => {
      return {
        dDays: state.dDays.filter((dDay) => dDay.id !== action.payload.id),
        count: state.count,
      };
    },

    updateDDay: (state, action: PayloadAction<DDayUpdatePayload>) => {
      const targetDdayIndex = state.dDays.findIndex(
        (el) => el.id === action.payload.id,
      );

      if (targetDdayIndex !== -1) {
        const updatedTargetDday = {
          ...state.dDays[targetDdayIndex],
          ...action.payload,
        };

        const newDdays = [...state.dDays];
        newDdays[targetDdayIndex] = updatedTargetDday;

        if (action.payload.endDate) {
          /**
           * TODO
           * leftDays auto calculator
           */
        }

        return {
          dDays: newDdays,
          count: state.count,
        };
      }
    },
  },
});

export const { addDDay, removeDDay, updateDDay } = dDaySlice.actions;

export default dDaySlice.reducer;
