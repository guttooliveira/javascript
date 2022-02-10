var agora = new Date()
var hora = agora.getHours()   
if (hora < 12) {
    console.log(`Bom dia, agora são exatamente ${hora} horas.`)
} else if (hora > 18) {
    console.log(`Boa noite, agora são exatamente ${hora} horas.`)
} else {
    console.log(`Boa tarde, agora são exatamente ${hora} horas.`)
} 