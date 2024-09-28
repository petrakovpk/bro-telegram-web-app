import './OpenButton.css'

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store.tsx";
import { openForecast } from "../../redux/zodiacSlice.tsx";

function OpenButton() {
  const dispatch: AppDispatch = useDispatch();
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);

  const handleOpenClick = () => {
    dispatch(openForecast(selectedSign));
  };

  return (
      <button
        className="open-button-container"
        onClick={handleOpenClick}
      >
        Open Forecast
      </button>
  )
}

export default OpenButton;