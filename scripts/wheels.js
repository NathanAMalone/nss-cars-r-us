import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"
    
    html += "<select id='wheel'>"
    html += "<option value='0'>Select Wheels...</option>"

    // Use .map() for converting objects to <li> elements
    
    const listItems = wheels.map(wheel => {
        return`
                <option value="${wheel.id}"> ${wheel.type}</option>
            
            
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}