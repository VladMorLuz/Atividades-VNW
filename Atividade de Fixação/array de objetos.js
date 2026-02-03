
// =============================================
// 1. Criação do objeto com pelo menos 3 propriedades
// =============================================
const pessoa = {
    nome: "Vlad Mor",
    email: "kaostadh@gmail.com",
    telefone: "(31) 990633577",
    cidade: "Belo Horizonte"
};

console.log("1. Objeto inicial criado:");
console.log(pessoa);
console.log("----------------------------------------");

// =============================================
// 2. Adicionar uma nova propriedade (sem alterar a declaração inicial)
// =============================================
pessoa.profissao = "Desenvolvedor Front-end";

console.log("2. Objeto após adicionar 'profissao':");
console.log(pessoa);
console.log("----------------------------------------");

// =============================================
// 3. Remover uma propriedade
// =============================================
delete pessoa.telefone;

console.log("3. Objeto após remover 'telefone':");
console.log(pessoa);
console.log("----------------------------------------");

// =============================================
// 4. Mostrar todas as propriedades do objeto no console
// =============================================
console.log("4. Todas as propriedades do objeto 'pessoa':");

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

console.log("----------------------------------------");

// =============================================
// 5. Criar array "cadastro" com 5 objetos
// Cada objeto deve ter: nome, idade, telefone, bebidas (array com pelo menos 4 itens)
// =============================================
const cadastro = [
    {
        nome: "Ana Oliveira",
        idade: 28,
        telefone: "(21) 99876-5432",
        bebidas: ["Café", "Água", "Suco de laranja", "Chá verde", "Cerveja"]
    },
    {
        nome: "Bruno Santos",
        idade: 34,
        telefone: "(31) 98765-1234",
        bebidas: ["Refrigerante", "Cerveja", "Água com gás", "Café expresso"]
    },
    {
        nome: "Carla Mendes",
        idade: 22,
        telefone: "(41) 99654-3210",
        bebidas: ["Chá mate", "Suco de limão", "Água", "Vinho", "Energético"]
    },
    {
        nome: "Diego Costa",
        idade: 41,
        telefone: "(51) 98432-7654",
        bebidas: ["Café", "Cerveja", "Whisky", "Água", "Refrigerante zero"]
    },
    {
        nome: "Elisa Ferreira",
        idade: 19,
        telefone: "(61) 99123-4567",
        bebidas: ["Suco de uva", "Água de coco", "Milkshake", "Chá gelado"]
    }
];

console.log("5. Array 'cadastro' criado com sucesso.");
console.log(`Total de pessoas cadastradas: ${cadastro.length}`);
console.log("----------------------------------------");

// =============================================
// 6. Mostrar no console o nome de UMA bebida de cada pessoa
// =============================================
console.log("6. Uma bebida favorita de cada pessoa:");

cadastro.forEach((pessoa, index) => {
    // Pegamos a primeira bebida da lista como exemplo
    const bebidaEscolhida = pessoa.bebidas[0];
    console.log(`${index + 1}. ${pessoa.nome} → ${bebidaEscolhida}`);
});
