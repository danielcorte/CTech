// Variável global para armazenar o valor do frete selecionado
let selectedFreight = 35; // Inicializando com 35

document.addEventListener("DOMContentLoaded", () => {
  // Recuperar lista de compras do localStorage
  let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || [];

  // Selecionar o contêiner onde os itens do carrinho serão exibidos
  const carrinhoContainer = document.querySelector(".grid_col_1");

  if (listaCompras.length === 0) {
    // Caso o carrinho esteja vazio, exibir mensagem
    carrinhoContainer.innerHTML = "<p>O carrinho está vazio.</p>";
  } else {
    // Criar os elementos HTML para cada item na lista de compras
    listaCompras.forEach((item, index) => {
      const itemHTML = `
        <div class="cart_item" id="${item.id}">
          <div class="cart_item_main_img">
            <img src="${item.imagens.img1}" alt="${item.titulo}" class="cart_item_image">
          </div>
          <div class="cart_item_info">
            <p>${item.titulo}</p>
            <p>R$ ${parseFloat(item.preco).toFixed(2)} Un.</p>
            <h3>Total: R$ ${(item.quantity * parseFloat(item.preco)).toFixed(2)}</h3>
            <div class="cart_item_qtd_selector">
              <div class="cart_item_qtd_selector_container" data-index="${index}">
                <i class="bi bi-dash decrease"></i>
                <span class="quantity">${item.quantity}</span>
                <i class="bi bi-plus increase"></i>
              </div>
              <button class="remove" data-index="${index}">Remover</button>
            </div>
          </div>
        </div>
      `;

      // Adicionar item ao contêiner
      carrinhoContainer.insertAdjacentHTML("beforeend", itemHTML);
    });

    // Atualizar valores totais
    atualizarTotais(listaCompras, selectedFreight);
  }

  // Configurar eventos para alterar quantidade
  carrinhoContainer.addEventListener("click", (event) => {
    const container = event.target.closest(".cart_item_qtd_selector_container");

    if (container) {
      const index = parseInt(container.dataset.index);
      const quantityElement = container.querySelector(".quantity");

      if (event.target.classList.contains("increase")) {
        // Aumentar quantidade
        listaCompras[index].quantity += 1;
        quantityElement.textContent = listaCompras[index].quantity;
      } else if (event.target.classList.contains("decrease")) {
        // Diminuir quantidade
        if (listaCompras[index].quantity > 1) {
          listaCompras[index].quantity -= 1;
          quantityElement.textContent = listaCompras[index].quantity;
        }
      }

      // Atualizar LocalStorage e recalcular totais
      localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
      atualizarTotais(listaCompras, selectedFreight);
    }

    // Remover itens
    if (event.target.classList.contains("remove")) {
      const index = parseInt(event.target.dataset.index);
      listaCompras.splice(index, 1); // Remove o item da lista
      localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
      location.reload(); // Recarregar a página para refletir a remoção
    }
  });

  // FRETE

  const freightForm = document.getElementById("freight-form");
  const freightOptions = document.getElementById("freight-options");
  const freightValueDisplay = document.getElementById("freight-value");
  const selectedFreightText = document.getElementById("selected-freight");

  const calculateButton = freightForm.querySelector(".freight_ok");

  calculateButton.addEventListener("click", () => {
    const cepInput = document.getElementById("cep").value.trim();

    if (cepInput.length === 0) {
      alert("Por favor, insira um CEP.");
      return;
    }

    // Mostra as opções de frete
    freightOptions.style.display = "block";
  });

  // Atualiza o valor do frete ao selecionar uma opção
  const freightRadios = freightOptions.querySelectorAll('input[name="freight"]');

  freightRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      selectedFreight = parseFloat(event.target.value); // Atualiza o valor do frete selecionado

      // Atualiza os totais com o valor de frete selecionado
      atualizarTotais(listaCompras, selectedFreight);
    });
  });
});

// Função para atualizar os valores totais
function atualizarTotais(lista, shippingSelect) {
  const subtotal = lista.reduce((acc, item) => acc + item.quantity * parseFloat(item.preco), 0);
  const shipping = shippingSelect; // Valor do frete selecionado
  const total = subtotal + shipping;

  document.querySelector(".total_container .total:nth-child(1) h3:nth-child(2)").textContent = `R$ ${subtotal.toFixed(2)}`;
  document.querySelector(".total_container .total:nth-child(2) h3:nth-child(2)").textContent = `R$ ${shipping.toFixed(2)}`;
  document.querySelector(".total_container .total:nth-child(3) h3:nth-child(2)").textContent = `R$ ${total.toFixed(2)}`;
}

// IR PARA PAYMENT.HTML COM OS VALORES SALVOS NO DOM

document.querySelector(".button.checkout_btn").addEventListener("click", () => {
  const subtotal = parseFloat(document.querySelector(".total_container .total:nth-child(1) h3:nth-child(2)").textContent.replace("R$", "").trim());
  const shipping = parseFloat(document.querySelector(".total_container .total:nth-child(2) h3:nth-child(2)").textContent.replace("R$", "").trim());
  const total = parseFloat(document.querySelector(".total_container .total:nth-child(3) h3:nth-child(2)").textContent.replace("R$", "").trim());

  // Salvar valores no localStorage
  localStorage.setItem("checkoutValues", JSON.stringify({ subtotal, shipping, total }));

  // Redirecionar para a página de pagamento
  window.location.href = "../payment.html";
});


