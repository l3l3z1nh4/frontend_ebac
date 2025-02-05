
const alunos = ['gustavo', 'julia', 'paula', 'wagner']
const notas = [6,9,8.5,5]

const alunoNota = alunos.map(function(alunoAtual, notaIndice)
{
    return{
        nome: alunoAtual,
        nota: notas[notaIndice]
    }
})

const alunosAprovados = alunoNota.filter(aluno => aluno.nota >=6)
console.log(alunosAprovados, '\n')



