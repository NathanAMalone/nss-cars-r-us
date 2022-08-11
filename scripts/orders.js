import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const paints = getPaints()

    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId

        }
    )

    const interiors = getInteriors()

    // Remember that the function you pass to find() must return true/false
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const technologies = getTechnologies()

    // Remember that the function you pass to find() must return true/false
    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.techId
        }
    )

    const wheels = getWheels()

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

  const totalCost = foundPaint.price + foundInterior.price + foundTech.price + foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

