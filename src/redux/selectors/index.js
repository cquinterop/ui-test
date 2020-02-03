import { get } from 'lodash'

export const selectCelebrities = state => get(state, 'boxes.payload')
