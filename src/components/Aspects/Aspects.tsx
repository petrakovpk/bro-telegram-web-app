import './Aspects.css'

import { useSelector } from 'react-redux';
import { aspects } from "../../redux/data.tsx";
import { RootState } from "../../redux/store.tsx";

function Aspects() {
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);
  const selectedAspect = useSelector((state: RootState) => state.zodiac.selectedAspect);

  const aspectLabel = useSelector((state: RootState) => state.zodiac.aspectLabel[selectedAspect][selectedSign]);
  const aspectText = useSelector((state: RootState) => state.zodiac.aspectText[selectedAspect][selectedSign]);

  return (
    <div className={'aspects-container'}>
      <div className={'aspects-label'}>
        { aspectLabel }
      </div>
      <div className={'aspects-text'}>
        { aspectText }
      </div>
      <div className={'aspects-row'}>
        {aspects.map((aspect, index) => (
          <div key={index} className={'aspects-grid-item'}>
            {aspect}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aspects;