const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
function corrigirprova(teste){
    acertos=0
    for(item of teste){
        if(item.resposta==item.correta){
            acertos++
        }
    }
    console.log(`Aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${acertos*2}`)
}
corrigirprova(prova.questoes);

