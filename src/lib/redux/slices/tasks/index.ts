/* Core */
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { redirect } from 'next/navigation'
import { toast } from '~/lib/myToast'

/* Instruments */

const initialState: TasksState = []

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<TaskType, "id">>) => {
      state.push({ id: crypto.randomUUID(), ...action.payload })
      toast({ type: "success", message: "Task added successfully" })

    },
    update: (state, action: PayloadAction<TaskType>) => {
      const taskIndex = state.findIndex(task => task.id === action.payload.id)
      if (taskIndex !== -1) {
        state[taskIndex] = action.payload
        toast({ type: "success", message: "Task updated successfully" })

      } else {
        toast({ type: "error", message: "Task not found" })
      }

    },
    delete: (state, action: PayloadAction<TaskType["id"]>) => {
      const taskIndex = state.findIndex(task => task.id === action.payload)
      if (taskIndex !== -1) {
        state.splice(taskIndex, 1)
        toast({ type: "success", message: "deleted successfully" })

      } else {
        toast({ type: "error", message: "Task not found" })
      }
    },
  },
})

/* Types */
export type TaskType = {
  id: string,
  title: string,
  description: string,
}
export type TasksState = TaskType[]