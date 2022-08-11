
import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder() 
        }
    }
)

export const carsRUs = () => {
    return `
        <h1>Cars 'R Us</h1>

        <article class="choices">
            <section class="choices__Paints options">
                ${ Paints() }
            </section>
            <section class="choices__Interiors options">
                ${ Interiors() }
            </section>
            <section class="choices__Technologies options">
                ${ Technologies() }
            </section>
            <section class="choices__Wheels options">
                ${ Wheels() }
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>
           
        <article class="customOrders">
            <h2>Car Orders</h2>
             ${ Orders () }
        </article>
    `
}

