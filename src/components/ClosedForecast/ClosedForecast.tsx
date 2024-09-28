import './ClosedForecast.css'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.tsx";


function ClosedForecast() {
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);

  // Динамическое определение пути к изображению

  return (
    <div className={'closed-forecast-container'}>
      <img src={`../src/assets/${selectedSign}.webp`} alt="" className={'closed-forecast-image'} />
    </div>
  )
}

export default ClosedForecast;