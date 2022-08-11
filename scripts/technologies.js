import { getTechnologies, setTech } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>" 
    
    html += "<select id='tech'>"
    html += "<option value='0'>Select Tech...</option>"

    // Use .map() for converting objects to <li> elements
    
    const listItems = technologies.map(tech => {
        return`
                <option value="${tech.id}"> ${tech.pckge}</option>
            
            
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}