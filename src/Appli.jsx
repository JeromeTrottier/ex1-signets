import './Appli.scss';
import Entete from './Entete.jsx';
import ListeSignets from './ListeSignets.jsx';

import FabAdd from './FabAdd';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete/>
        <ListeSignets/>
        <FabAdd/>
    </div>
  );
}
