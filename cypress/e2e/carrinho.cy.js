describe("Funcionalidade Carrinho", () => {
  const urlProduto =
    "http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/";

  beforeEach(() => {
    cy.visit(urlProduto);
  });

  function selecionarTamanho() {
    cy.contains(".button-variable-item", "M").click();
    cy.get('[data-value="White"]').click();
  }

  it("Deve adicionar o produto ao carrinho com tamanho selecionado", () => {
    cy.contains(".button-variable-item", "M").click();
    cy.get('[data-value="White"]').click();

    cy.get(".single_add_to_cart_button").click();
    cy.get(".woocommerce-message").should("contain", "foi adicionado");

    cy.contains("Ver carrinho").click();

    cy.get(".cart_item").should("exist");
  });

  it("Deve exibir mensagem de erro ao tentar adicionar sem selecionar tamanho", () => {
    cy.get(".single_add_to_cart_button").click();

    cy.on("window:alert", (textoAlert) => {
      expect(textoAlert).to.equal(
        "Selecione uma das opções do produto antes de adicioná-lo ao carrinho."
      );
    });
  });

  it("Deve aumentar a quantidade do produto no carrinho", () => {
    selecionarTamanho();
    cy.get(".single_add_to_cart_button").click();

    cy.contains("Ver carrinho").click();

    cy.get(".qty").clear().type("2");
    cy.get('[name="update_cart"]').click();

    cy.get(".qty").should("have.value", "2");
  });

  it("Deve diminuir a quantidade do produto no carrinho", () => {
    selecionarTamanho();
    cy.get(".single_add_to_cart_button").click();
    cy.contains("Ver carrinho").click();

    cy.get(".qty").clear().type("2");
    cy.get('[name="update_cart"]').click();

    cy.get(".qty").clear().type("1");
    cy.get('[name="update_cart"]').click();

    cy.get(".qty").should("have.value", "1");
  });

  it("Deve remover o produto do carrinho", () => {
    selecionarTamanho();
    cy.get(".single_add_to_cart_button").click();
    cy.contains("Ver carrinho").click();

    cy.get(".product-remove a").click();

    cy.get(".cart-empty").should("contain", "Seu carrinho está vazio");
  });

  it("Deve adicionar 3 unidades antes de ir ao carrinho", () => {
    selecionarTamanho();

    cy.get(".input-text.qty").clear().type("3");
    cy.get(".single_add_to_cart_button").click();

    cy.contains("Ver carrinho").click();

    cy.get(".qty").should("have.value", "3");
  });

  it("Deve manter o produto no carrinho após atualizar página", () => {
    selecionarTamanho();
    cy.get(".single_add_to_cart_button").click();
    cy.contains("Ver carrinho").click();

    cy.reload();

    cy.get(".cart_item").should("exist");
  });
});
