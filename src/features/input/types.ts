import {InferValueTypes} from "../../app/types";
import * as actions from './actions'

export type MaterialsActionsType = ReturnType<InferValueTypes<typeof actions>>