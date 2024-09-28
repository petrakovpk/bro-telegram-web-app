import './Header.css'
import { useSelector } from 'react-redux';
import { RootState} from "../../redux/store.tsx";



function Header() {
  const selectedSign = useSelector((state: RootState) => state.zodiac.selectedSign);

  return (
    <div className={'zodiac-label-container'}>
      {selectedSign}
    </div>
  )
}

export default Header;