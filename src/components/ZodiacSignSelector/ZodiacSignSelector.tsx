import { useDispatch } from 'react-redux';
import { selectSign } from '../../redux/zodiacSlice';
import { AppDispatch } from '../../redux/store';
import './ZodiacSignSelector.css'
import { zodiacSigns} from "../../redux/data.tsx";


function ZodiacSignSelector() {
  const dispatch: AppDispatch = useDispatch();

  const handleSignClick = (sign: string) => {
    dispatch(selectSign(sign));
  };

  return (
    <div className={'zodiac-signs-container'}>
      <div className={'zodiac-signs-row'}>
        { zodiacSigns.map((sign, index) => (
          <div
            key={index}
            className={'zodiac-signs-grid-item'}
            onClick={() => handleSignClick(sign)}
          >
            {sign}
          </div>
        ))}
      </div>
    </div>
)
}

export default ZodiacSignSelector;