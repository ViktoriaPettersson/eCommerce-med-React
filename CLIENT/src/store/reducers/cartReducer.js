import actionTypes from '../actionTypes'

// Mitt state
const initState = {
    shoppingCart: [],
    totalQ: 0,
    totalA: 0
}

const cartReducer = (state = initState, action) => {
    let exist

    switch(action.type) {
        
        case actionTypes().cart.add:
            // Skapar en ny produkt som tar in alla gamla produkter + en quantity
            let _product = {
                ...action.payload,
                quantity: 1
              }
        
            // Kollar igenom state för att se om det finns ett id som matchar med id som skickas med i payload
            // Använder find-metoden som kan ge true eller false
            exist = state.shoppingCart.find(item => item._id === action.payload._id)
            
            // Om exist är true finns produkten redan i shoppingcart och då ska qty öka med 1
            if(exist){
                    exist.quantity += 1
            }
            // Om exist är false ska den läggas till i shoppingcart
            else {
                state.shoppingCart = [...state.shoppingCart, _product]
            }
            // Kör funktionerna. Skikcar med shoppingCart
            state.totalA = getTotalA(state.shoppingCart)
            state.totalQ = getTotalQ(state.shoppingCart)
            return state

            case actionTypes().cart.subtract: 
                // Kollar igenom shoppingCart och tittar om det finns ett id som matchar med ett id i payload
                exist = state.shoppingCart.find(item => item._id === action.payload._id)
                
                // Om exist.quantity är lika med 1 kommer produkten filtreras bort
                if(exist.quantity === 1) {
                    state.shoppingCart = state.shoppingCart.filter(product => product._id !== action.payload._id)
                }
                // Om inte så minskar quantity med 1
                else {
                    exist.quantity -= 1
                }
                // För att rendera om totala amount och quantity läggs funktionerna under
                state.totalA = getTotalA(state.shoppingCart)
                state.totalQ = getTotalQ(state.shoppingCart)
                return state
                   
            

        default: 
        return state
    }
}

    // getTotalQ. För varje produkt i shoppingCart total += qty
    const getTotalQ = shoppingCart => {
        let total = 0

        shoppingCart.forEach(p => {
            total += p.quantity
        })
        return total
    }
    // sparar in den totala summan i total
    const getTotalA = shoppingCart => {
        let total = 0

        shoppingCart.forEach(p => {
            total += p.price * p.quantity
        })
        return total
    }


export default cartReducer