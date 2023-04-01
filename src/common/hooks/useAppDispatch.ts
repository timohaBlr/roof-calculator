import {useDispatch} from "react-redux";
import {AppThunkDispatch} from "../../app/types";

const useAppDispatch = () => useDispatch<AppThunkDispatch>()

export default useAppDispatch;