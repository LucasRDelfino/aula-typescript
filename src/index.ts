//Exercício 1 - Tipagem e Arrays
//Crie um array de números e imprima a soma dos valores.
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

//Exercício 2 - Função Tipada
//Crie uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

//Exercício 3 - Classe e Instância
//Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações.
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
console.log(carro1.marca)



/////////////////////////////EVOLUINDO NO TYPESCRIT/////////////////////////////

// Exercicio 1
interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;  // A propriedade 'motor' é opcional
  }
  
  // Criando um objeto que implementa a interface Carro
  const meuCarro: Veiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    motor: '2.0'
  };

  console.log(meuCarro);

  // Exericicio 2
interface Multiplicacao {
    (a: number, b: number): number; 
  }
  

  const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
  };
  

  console.log(multiplicar(2, 3));  
  console.log(multiplicar(5, 10)); 
  console.log(multiplicar(7, 4));

  //Exercicio 3
  
  function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  
  const numeros = [1, 2, 3, 4, 5];
  console.log(inverterArray(numeros));
  
  const strings = ['a', 'b', 'c', 'd'];
  console.log(inverterArray(strings));


  // Exercicio 4    
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  interface Usuario {
    nome: string;
    email: string;
  }
  
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  

  const repositorio = new RepositorioUsuario();
  
  repositorio.salvar({ nome: 'João', email: 'joao@example.com' });
  repositorio.salvar({ nome: 'Maria', email: 'maria@example.com' });
  
  console.log(repositorio.obterTodos());

//Exercicio 5
type RespostaServidor = string | boolean;


function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log(`Resposta do servidor: ${resposta}`);
  } else {
    console.log(`Resposta booleana do servidor: ${resposta}`);
  }
}

processarResposta('Sucesso');  
processarResposta(true);  

// Exercicio 6
type Estudante = {
    nome: string;
    curso: string;
  };
  
  type Trabalhador = {
    empresa: string;
    cargo: string;
  };
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'Ana',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedora Júnior'
  };
  
  console.log(estudanteTrabalhador);
  

  
  


  
  