let nome = "Lucas";
let sobrenome = "Silva";
let idade = 25;
const dataNascimento = "15/03/2000"; 
const cpf = "123.456.789-00";
let email = "lucas.silva@email.com";          // ← mudou para let
const celular = "(11) 98765-4321";
const endereco = "Rua das Flores, 123 - Centro - São Paulo/SP";
let bebidaFavorita = "Café com leite";

console.log("=== Dados Pessoais ===");
console.log("Nome:", nome);
console.log("Sobrenome:", sobrenome);
console.log("Idade:", idade);
console.log("Data de Nascimento:", dataNascimento);
console.log("CPF:", cpf);
console.log("Email:", email);
console.log("Celular:", celular);
console.log("Endereço:", endereco);
console.log("Bebida favorita:", bebidaFavorita);

console.log("\n"); 

// Agora só mudamos o que foi pedido
nome = "Mariana";
sobrenome = "Costa";
email = "mariana.costa@email.com";

console.log("=== Após alterações ===");
console.log("Nome atualizado:", nome);
console.log("Sobrenome atualizado:", sobrenome);
console.log("Email atualizado:", email);

console.log("\n");

// Atividade Bônus - Outros tipos de dados
let temCadastro = true;          // boolean
let possuiCarro = null;          // null
let planoFuturo;                 // undefined

console.log("=== Outros tipos ===");
console.log("Tem cadastro?", temCadastro);
console.log("Possui carro?", possuiCarro);
console.log("Plano futuro?", planoFuturo);