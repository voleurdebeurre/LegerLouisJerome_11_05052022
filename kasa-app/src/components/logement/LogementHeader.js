import '../../assets/css/logementHeader.css';
import Tag from './Tag.js';


function LogementHeader(data) {
    let logementTags = data.tags
    let logementTitle = data.title
    let logementLocation = data.location

    return(
        <div className='logementHeader'>
            <div className='logementNameAndLocation'>
                <h2>{logementTitle}</h2>
                <h3>{logementLocation}</h3>
            </div>
            <div className='tagsContainer'>
                {logementTags.map((tag) => {
                    return(
                        <Tag tagContent = {tag} key = {tag} />
                    );
                })}
            </div>
            
        </div>
    );
}

export default LogementHeader;