import './AstroScreen.css'

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Forecast from '../../components/Forecast/Forecast'
import Aspects from "../../components/Aspects/Aspects.tsx";
import OpenButton from "../../components/OpenButton/OpenButton.tsx";
import ZodiacSignSelector from "../../components/ZodiacSignSelector/ZodiacSignSelector.tsx";
import ClosedForecast from "../../components/ClosedForecast/ClosedForecast.tsx";

function AstroScreen() {
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);
  const isForecastOpen = useSelector((state: RootState) => state.zodiac.forecastIsOpen[selectedSign]);

  return (
    <div className={'main-container'}>
      <div className={'top-container'}>
      {!isForecastOpen ? (
        <ClosedForecast/>
      ) : (
        <>
          <Forecast/>
          <Aspects/>
        </>
      )}
      </div>
      <OpenButton/>
      <ZodiacSignSelector/>
    </div>
  )
}

export default AstroScreen