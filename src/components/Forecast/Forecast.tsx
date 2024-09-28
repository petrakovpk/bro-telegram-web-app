import './Forecast.css'
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store.tsx";

function Forecast() {
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);
  const forecastLabel = useSelector((state: RootState) => state.zodiac.forecastLabel[selectedSign]);
  const forecast = useSelector((state: RootState) => state.zodiac.forecast[selectedSign]);

  return (
    <div className={'forecast-container'}>
      <div className={'forecast-label'}>
        { forecastLabel }
      </div>
      <div className={'forecast-text'}>
        { forecast }
      </div>
    </div>
  )
}

export default Forecast;