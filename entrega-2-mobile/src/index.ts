import promptSync from "prompt-sync";
import { db } from "./db";
import { uf, cidade, regiao } from "./db/schema";
import { eq } from "drizzle-orm";

const { v4: uuidv4 } = require("uuid");

const prompt = promptSync();

function menu() {
  console.log("\n=== MENU ===");

  console.log("\n--- UF ---");
  console.log("1 - Cadastrar UF");
  console.log("2 - Listar UF");
  console.log("3 - Atualizar UF");
  console.log("4 - Deletar UF");

  console.log("\n--- Cidade ---");
  console.log("5 - Cadastrar Cidade");
  console.log("6 - Listar Cidade");
  console.log("7 - Atualizar Cidade");
  console.log("8 - Deletar Cidade");

  console.log("\n--- Região ---");
  console.log("9 - Cadastrar Região");
  console.log("10 - Listar Região");
  console.log("11 - Atualizar Região");
  console.log("12 - Deletar Região");

  console.log("\n--- Relatório ---");
  console.log("13 - Listagem Completa");

  console.log("\n0 - Sair");

  const opcao = prompt("Escolha: ");

  switch (opcao) {
    case "1":
      cadastrarUF();
      break;
    case "2":
      listarUF();
      break;
    case "3":
      atualizarUF();
      break;
    case "4":
      deletarUF();
      break;

    case "5":
      cadastrarCidade();
      break;
    case "6":
      listarCidade();
      break;
    case "7":
      atualizarCidade();
      break;
    case "8":
      deletarCidade();
      break;

    case "9":
      cadastrarRegiao();
      break;
    case "10":
      listarRegiao();
      break;
    case "11":
      atualizarRegiao();
      break;
    case "12":
      deletarRegiao();
      break;

    case "13":
      listarCompleto();
      break;

    case "0":
      console.log("Saindo...");
      process.exit(0);

    default:
      console.log("Opção inválida");
  }

  menu();
}

// ================= UF =================

function cadastrarUF() {
  const nome = prompt("Nome da UF: ");
  const sigla = prompt("Sigla: ");

  db.insert(uf)
    .values({
      id: uuidv4(),
      nome,
      sigla,
    })
    .run();

  console.log("UF cadastrada!");
}

function listarUF() {
  const dados = db.select().from(uf).all();

  console.log("\nUFs:");
  dados.forEach((u: any) => {
    console.log(`ID: ${u.id} | ${u.sigla} - ${u.nome}`);
  });
}

function atualizarUF() {
  const id = prompt("ID da UF: ");
  const nome = prompt("Novo nome: ");
  const sigla = prompt("Nova sigla: ");

  db.update(uf).set({ nome, sigla }).where(eq(uf.id, id)).run();

  console.log("UF atualizada!");
}

function deletarUF() {
  const id = prompt("ID da UF: ");

  db.delete(uf).where(eq(uf.id, id)).run();

  console.log("UF deletada!");
}

// ================= CIDADE =================

function cadastrarCidade() {
  const nome = prompt("Nome da cidade: ");
  const uf_id = prompt("ID da UF: ");

  db.insert(cidade)
    .values({
      id: uuidv4(),
      nome,
      uf_id,
    })
    .run();

  console.log("Cidade cadastrada!");
}

function listarCidade() {
  const dados = db.select().from(cidade).all();

  console.log("\nCidades:");
  dados.forEach((c: any) => {
    console.log(`ID: ${c.id} | ${c.nome} | UF_ID: ${c.uf_id}`);
  });
}

function atualizarCidade() {
  const id = prompt("ID da cidade: ");
  const nome = prompt("Novo nome: ");
  const uf_id = prompt("Novo UF_ID: ");

  db.update(cidade).set({ nome, uf_id }).where(eq(cidade.id, id)).run();

  console.log("Cidade atualizada!");
}

function deletarCidade() {
  const id = prompt("ID da cidade: ");

  db.delete(cidade).where(eq(cidade.id, id)).run();

  console.log("Cidade deletada!");
}

// ================= REGIÃO =================

function cadastrarRegiao() {
  const nome = prompt("Nome da região: ");
  const cidade_id = prompt("ID da cidade: ");

  db.insert(regiao)
    .values({
      id: uuidv4(),
      nome,
      cidade_id,
    })
    .run();

  console.log("Região cadastrada!");
}

function listarRegiao() {
  const dados = db.select().from(regiao).all();

  console.log("\nRegiões:");
  dados.forEach((r: any) => {
    console.log(`ID: ${r.id} | ${r.nome} | Cidade_ID: ${r.cidade_id}`);
  });
}

function atualizarRegiao() {
  const id = prompt("ID da região: ");
  const nome = prompt("Novo nome: ");
  const cidade_id = prompt("Novo Cidade_ID: ");

  db.update(regiao).set({ nome, cidade_id }).where(eq(regiao.id, id)).run();

  console.log("Região atualizada!");
}

function deletarRegiao() {
  const id = prompt("ID da região: ");

  db.delete(regiao).where(eq(regiao.id, id)).run();

  console.log("Região deletada!");
}

// ================= RELATÓRIO FINAL =================

function listarCompleto() {
  const ufs = db.select().from(uf).all();
  const cidades = db.select().from(cidade).all();
  const regioes = db.select().from(regiao).all();

  console.log("\n=== LISTAGEM COMPLETA ===");

  regioes.forEach((r: any) => {
    const c = cidades.find((c: any) => c.id === r.cidade_id);
    if (!c) return;

    const u = ufs.find((u: any) => u.id === c.uf_id);
    if (!u) return;

    console.log(`${u.sigla}-${c.nome} - ${r.nome}`);
  });
}

menu();
