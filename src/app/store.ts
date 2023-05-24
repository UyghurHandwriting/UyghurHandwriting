import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  EnhancedStore,
  combineReducers,
} from "@reduxjs/toolkit";

import { persistConfig } from "./persistConfig";
import {
  sliceKey as languageSliceKey,
  languageReducer,
} from "../features/language/languageSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//----root reducer
const rootReducer = combineReducers({
  [languageSliceKey]: languageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//-----store
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        //--ignore all action types redux-persist dispatches (those actions are not serializable will cause redux-toolkit warning)
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    // .concat(customerApi.middleware), //use this when there is queryHook
  });
};
export const store: EnhancedStore = setupStore();
export const persistor = persistStore(store);

//----type export
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppStore = ReturnType<typeof setupStore>;
