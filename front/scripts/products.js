// Função para buscar produtos da API
async function fetchProducts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/produtos/"); // URL da API
    if (!response.ok) {
      throw new Error("Erro ao carregar produtos da API");
    }
    return await response.json(); // Retorna produtos como JSON
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return []; // Retorna array vazio se falhar
  }
}

// Função para criar um card de produto
function createProductCard(produto) {
  const precoNumerico = parseFloat(produto.preco);
  if (isNaN(precoNumerico)) {
    console.error("Preço inválido:", produto.preco);
    return null;
  }
  const valParcela = (precoNumerico / 10).toFixed(2);

  const card = document.createElement("div");
  card.classList.add("product-card", "idprod");
  card.id = produto.codigoProduto;

  card.innerHTML = `
    <div>
      <img src="${produto.imagensProduto?.img1 || '#'}" alt="${produto.tituloProduto}" width="168px" />
    </div>
    <div class="product-card-info-container">
      <h2 class="product-card-title" title="${produto.tituloProduto}">${produto.tituloProduto}</h2>
      <h4 class="product-card-reference">Cod. ${produto.codigoProduto}</h4>
      <h3 class="product-card-price">R$ ${precoNumerico.toFixed(2)}</h3>
      <h4 class="product-card-installment">10x de R$ ${valParcela} sem juros</h4>
    </div>
    <div class="cart-e-compra">
      <button id="${produto.codigoProduto}" class="product-card-btn">COMPRAR</button>
      <button class="product-card-btn-cart" data-id="${produto.codigoProduto}"><i class="bi bi-cart"></i></button>
    </div>`;

  card.querySelector(".product-card-btn").addEventListener("click", () => {
    const productData = {
      id: produto.codigoProduto,
      titulo: produto.tituloProduto,
      preco: precoNumerico.toFixed(2),
      descricao: produto.descricao,
      categoria: produto.categoriaProduto,
      imagens: produto.imagensProduto,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
    window.location.href = "../product.html";
  });

  return card;
}

// Função para carregar produtos em uma seção específica
function loadProductsIntoSection(products, sectionSelector) {
  const section = document.querySelector(sectionSelector);
  section.innerHTML = ""; // Limpa a seção antes de inserir novos produtos
  products.forEach(produto => {
    const card = createProductCard(produto);
    if (card) {
      section.appendChild(card);
    }
  });
}

// Função principal para carregar produtos e configurar a lógica de URL
async function loadProducts() {
  const products = await fetchProducts();

  // Obtém o parâmetro "section" da URL
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section");

  // Filtros por categoria
  const notebooks = products.filter(produto => produto.categoriaProduto === "Notebooks");
  const celulares = products.filter(produto => produto.categoriaProduto === "Celulares");
  const perifericos = products.filter(produto => produto.categoriaProduto === "Periféricos");

  // Verifica qual seção foi solicitada pela URL e carrega os produtos correspondentes
  if (section === "1") {
    loadProductsIntoSection(notebooks, "#section-1");
  } else if (section === "2") {
    loadProductsIntoSection(celulares, "#section-1");
  } else if (section === "3") {
    loadProductsIntoSection(perifericos, "#section-1");
  } else {
    // Se nenhuma seção for especificada, carrega todos os produtos
    loadProductsIntoSection(products, "#section-1");
  }
}

// Adiciona eventos para alterar a URL ao clicar nos filtros de categoria
document.getElementById("ProdNoteFilter").addEventListener("click", function () {
  window.location.href = "products.html?section=1"; // Redireciona para Notebooks
});

document.getElementById("ProdCelFilter").addEventListener("click", function () {
  window.location.href = "products.html?section=2"; // Redireciona para Celulares
});

document.getElementById("ProdPeriFilter").addEventListener("click", function () {
  window.location.href = "products.html?section=3"; // Redireciona para Periféricos
});

// Executa o carregamento dos produtos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  loadProducts(); // Chama a função principal
});