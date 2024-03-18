import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
