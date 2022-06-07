import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RoadItem({title, checked}) {
    return(<div className="flex gap-2 mb-2 items-center">
        {checked?<span className="fa-solid fa-check" style={{color:'#228b22'}}></span>:<span className="fa-solid fa-spinner"></span>}<div>{title}</div>
    </div>)
};
