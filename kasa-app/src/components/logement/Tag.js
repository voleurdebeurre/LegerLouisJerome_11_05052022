import '../../assets/css/logementMeta.css';


function Tag(dataTags) {
    let tagContent = dataTags.tagContent;
    
    return(
        <span>{tagContent}</span>
    )
}

export default Tag;