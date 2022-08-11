const database  = {

    paints: [
        { id: 1, color: "Silver", price: 400 },
        { id: 2, color: "Midnight Blue", price: 450 },
        { id: 3, color: "Firebrick Red", price: 700 },
        { id: 4, color: "Spring Green", price: 350 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 200 },
        { id: 2, material: "Charcoal Fabric", price: 225 },
        { id: 3, material: "White Leather", price: 500 },
        { id: 4, material: "Black Leather", price: 600 }
    ],
    technologies: [
        { id: 1, pckge: "Basic Package", price: 100 },
        { id: 2, pckge: "Navigation Package", price: 200 },
        { id: 3, pckge: "Visibility Package", price: 300 },
        { id: 4, pckge: "Ultra Package", price: 400 }
    ],
    wheels: [
        { id:1, type: "17-inch Pair Radial", price: 500 },
        { id:2, type: "17-inch Pair Radial Black", price: 700 },
        { id:3, type: "18-inch Pair Radial Silver", price: 900 },
        { id:4, type: "18-inch Pair Radial Black", price: 1100 },
    ],
    orders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            techId: 4,
            wheelId: 4
        }
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint =>({...paint}))
}


export const getInteriors = () => {
    return database.interiors.map(interior =>({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech =>({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel =>({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order =>({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}


export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}


export const setTech = (id) => {
    database.orderBuilder.techId = id
}


export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}