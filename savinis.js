let numeroParticipantes = 99 // numero maximo participantes 100
let dataEvento = 09/08/2022 // data atual
let idade = 19 // idade minima 18 
let tituloPalestrantes = ['juiz', 'advogado', 'prefeito', 'vereador'] 

if (numeroParticipantes <= 99) {
    console.log("Numero de participantes aceito")
    
        if (dataEvento = 09/08/2022) {
            console.log("A data do evento é permitida")
            
            if (idade >= 18) {
                console.log("Idade cadastrada com sucesso")

                if (tituloPalestrantes =  ['juiz', 'advogado', 'prefeito', 'vereador'] ) {
                    console.log( "Juiz Augusto, Advogado Nuno, Prefeito Lucas, Vereador João ")
                }
                else {
                    console.log("Palestrantes não listados")
                }
            } else {
                console.log("Idade deve ser igual/superior a 18 anos")
            }    
        } else {
            console.log("Impossivel cadastrar data inferior")
        }
    } else {
        console.log("Não há vagas no evento")
} 