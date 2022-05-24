import '../assets/css/accordion.css';
import AccordionArrow from '../assets/images/accordion-arrow.svg';


function Accordion(data) {
    function accordionUpDown(e){
        let clickedArrow = e.currentTarget.firstChild
        let clickedArrowContent = e.currentTarget.parentElement.nextSibling
        console.log(clickedArrow)
        if(clickedArrowContent.classList.contains("openAccordion")){
            clickedArrowContent.classList.remove("openAccordion")
            clickedArrowContent.firstChild.style.display = "none"
            clickedArrow.classList.remove("arrowDown")
        }else{
            clickedArrowContent.classList.add("openAccordion")
            clickedArrowContent.firstChild.style.display = "block"
            clickedArrow.classList.add("arrowDown")
        }
    }
    let sectionTitle = data.accordionTitle
    let sectionContent = data.accordionContent
    const typeChecker = () => {
        if(Array.isArray(sectionContent)){
            let sectionContentArray = sectionContent.join('\r\n')
            return sectionContentArray
        }else{
            return sectionContent
        }
    };
    
    return(
        <div className='accordionComponent'>
            <div className='accordionHeader'>
                <h4>{sectionTitle}</h4>
                <button onClick={accordionUpDown}>
                    <img src={AccordionArrow} alt="Dérouler la section" />
                </button>
            </div>
            <div className='accordionContent'>
                <p>{typeChecker()}</p>
            </div>
        </div>
    )
}

export default Accordion;