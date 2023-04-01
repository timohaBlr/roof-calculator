import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";

 const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export default useAppSelector;