import { createRouter } from '../core/core'
import Daily from './Daily'
import Weekly from './Weekly'
import Monthly from './Monthly'

export default createRouter([
  { path: '#/', component: Daily },
  { path: '#/weekly', component: Weekly },
  { path: '#/monthly', component: Monthly }
])