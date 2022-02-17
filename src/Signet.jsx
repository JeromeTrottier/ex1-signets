import './Signet.scss';
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Signet(props){
    const signetCouleur = {
        backgroundColor: props.couleur
    }
    return (

        <article className="Signet" style={signetCouleur}>
            <SortIcon/>
            <div><img src={'images/' + props.id + '.jpeg'} alt={props.titre}/></div>
            <div className="contenu">
                <h2 className="signet__titre">{props.titre}</h2>
                <p className="signet__date">Modifié : {props.date}</p>
                <MoreVertIcon/>
            </div>
        </article>
    );
}