# Desafio Cypress QA 🛒

Projeto de testes automatizados E2E (End-to-End) usando Cypress para validar a funcionalidade do carrinho de compras da EBAC Online Store.

## 📋 Sobre o Projeto

Este projeto contém testes automatizados para garantir a qualidade e o funcionamento correto do carrinho de compras. Os testes cobrem desde a adição de produtos até a remoção e gerenciamento de quantidades.

**Site testado:** [EBAC Online Store](http://lojaebac.ebaconline.art.br/)

## 🎯 Testes Inclusos

- ✅ Adicionar produto ao carrinho com tamanho selecionado
- ✅ Exibição de mensagem de erro ao tentar adicionar sem selecionar tamanho
- ✅ Aumentar a quantidade do produto no carrinho
- ✅ Diminuir a quantidade do produto no carrinho
- ✅ Remover o produto do carrinho
- ✅ Adicionar múltiplas unidades antes de ir ao carrinho
- ✅ Manter o produto no carrinho após atualizar a página

## 🚀 Como Começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/carolinajusto2382/desafio-cypress-QA
cd desafio-cypress-QA
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Abrir o Cypress Test Runner (modo interativo)
```bash
npm run test:open
```
ou
```bash
npx cypress open
```

### Executar testes em modo headless (CLI)
```bash
npm run test
```
ou
```bash
npx cypress run
```

### Executar um teste específico
```bash
npx cypress run --spec "cypress/e2e/carrinho.cy.js"
```

## 📁 Estrutura do Projeto

```
desafio-cypress-QA/
├── cypress/
│   ├── e2e/
│   │   └── carrinho.cy.js          # Testes do carrinho
│   ├── fixtures/
│   │   └── example.json            # Dados de teste
│   └── support/
│       ├── commands.js              # Comandos customizados
│       └── e2e.js                   # Configurações de suporte
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências do projeto
└── README.md                         # Este arquivo
```

## 🔧 Configuração

O arquivo `cypress.config.js` contém as configurações principais do Cypress. Você pode adicionar mais configurações conforme necessário, como:
- URLs base
- Timeouts
- Resoluções de tela
- Plugins

## 📚 Tecnologias Utilizadas

- **Cypress** (^15.6.0) - Framework de testes E2E
- **JavaScript** - Linguagem dos testes
- **Node.js** - Ambiente de execução

## 💡 Padrões de Teste

Os testes seguem o padrão BDD com a estrutura:
- `describe()` - Agrupa testes relacionados
- `beforeEach()` - Executa antes de cada teste
- `it()` - Define um caso de teste individual

### Exemplo de Fluxo de Teste
```javascript
it("Deve adicionar o produto ao carrinho", () => {
  // 1. Selecionar tamanho e cor
  // 2. Clicar em "Adicionar ao carrinho"
  // 3. Validar mensagem de sucesso
  // 4. Navegar para o carrinho
  // 5. Validar produto no carrinho
});
```

## 🎓 Casos de Teste Principais

### 1. Adição com Sucesso
- Seleciona tamanho M e cor White
- Clica em "Adicionar ao carrinho"
- Valida mensagem de sucesso

### 2. Validação de Erro
- Tenta adicionar sem selecionar tamanho
- Valida alerta do navegador

### 3. Gerenciamento de Quantidade
- Aumenta quantidade para 2
- Diminui quantidade para 1
- Valida atualização no carrinho

### 4. Remoção de Produto
- Remove produto do carrinho
- Valida mensagem "Carrinho vazio"

### 5. Persistência de Dados
- Recarrega a página
- Valida se produto permanece no carrinho

## 📊 Relatórios

Para gerar relatórios de teste, você pode integrar plugins como:
- **mochawesome** - Relatórios HTML detalhados
- **cypress-allure-plugin** - Relatórios Allure

## 🐛 Troubleshooting

### Testes falhando
- Verifique se o site está acessível
- Limpe o cache do navegador
- Verifique os seletores CSS no site

### Timeout
- Aumente o tempo limite em `cypress.config.js`
- Verifique a velocidade da internet

## 📝 Boas Práticas

- Use seletores específicos e únicos
- Implemente funções reutilizáveis para ações comuns
- Mantenha testes independentes um do outro
- Use `beforeEach` para setup comum
- Documente casos complexos

## 🤝 Contribuindo

Para contribuir com este projeto:
1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso educacional.

## 👤 Autor

Carolina - Estudos em QA Automation

## 📞 Suporte

Para dúvidas ou problemas, consulte a [documentação oficial do Cypress](https://docs.cypress.io/).

---

**Última atualização:** Novembro de 2025
