import './ListeSignets.scss';
import lesSignets from './data/signets.json';
import Signet from './Signet';


export default function ListeSignets(props){
    return (
        <div className="ListeSignets">
            {lesSignets.map(signet => <Signet id={signet.identifiant} titre={signet.titre} couleur={signet.couleur} date={signet.date}/>)}
        </div>
    );
}