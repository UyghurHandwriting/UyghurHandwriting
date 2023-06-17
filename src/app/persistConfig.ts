import { PersistConfig } from "redux-persist";
import { RootState } from "./store";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { sliceKey as languageSliceKey } from "../features/language/languageSlice";
import { sliceKey as pdfSliceKey } from "../features/pdf/pdfSlice";

export const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [languageSliceKey],
};
