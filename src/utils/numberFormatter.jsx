export const numberFormatter = (amount) => {
    const number = amount.split("R$").pop()
    const numberConverted = parseInt(number)
    
    return numberConverted
}