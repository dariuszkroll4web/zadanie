import * as PageReducer from './pageReducer'

import configureStore from './store'

const reducers = {
  page: PageReducer.reducer
}

export { reducers, configureStore, PageReducer }
