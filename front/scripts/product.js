document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (productData) {
    // Preenchendo os dados no HTML
    document.getElementById("product-category").textContent = productData.categoria;
    document.getElementById("product-title").innerHTML = `
      <h4>COD: ${productData.id}</h4>
      <h3 class="product main-text">${productData.titulo}</h3>
    `;

    // Estrutura das imagens
    const imagesHTML = `
      <div class="product_images_container">
        <div class="images_selector">
          <i class="bi bi-chevron-double-up"></i>
          <ul>
            ${productData.imagens.img1 ? `<li><img src="${productData.imagens.img1}" alt="" class="product_thumb"></li>` : ""}
            ${productData.imagens.img2 ? `<li><img src="${productData.imagens.img2}" alt="" class="product_thumb"></li>` : ""}
            ${productData.imagens.img3 ? `<li><img src="${productData.imagens.img3}" alt="" class="product_thumb"></li>` : ""}
            ${productData.imagens.img4 ? `<li><img src="${productData.imagens.img4}" alt="" class="product_thumb"></li>` : ""}
          </ul>
          <i class="bi bi-chevron-double-down"></i>
        </div>
        <div class="images_main">
          <img src="${productData.imagens.img1}" alt="${productData.titulo}">
        </div>
      </div>
    `;

    // Adiciona a estrutura de imagens
    document.querySelector(".grid_col_1").innerHTML = imagesHTML;

    // Preenchendo a descrição
    const descriptionHTML = `
      <div class="product_description_container">
        <h3 class="main-text">Descrição</h3>
        <p class="product_description">${productData.descricao}</p>
      </div>
    `;
    document.querySelector(".grid_col_1").insertAdjacentHTML("beforeend", descriptionHTML);

    // Preenchendo o preço e informações de compra
    const priceHTML = `
      <h2>R$ ${parseFloat(productData.preco).toFixed(2)}</h2>
      <h5>Ou em até 10x sem juros de R$ ${(parseFloat(productData.preco) / 10).toFixed(2)} no cartão de crédito</h5>
    `;
    document.querySelector(".product_price_container").insertAdjacentHTML("afterbegin", priceHTML);

    // Configurando o botão de compra 
    const buyButton = document.querySelector(".shop_btn"); 
    buyButton.addEventListener("click", () => {
      const quantity = parseInt(document.querySelector("#quantity").value);

      // Adiciona a quantidade ao produto
      productData.quantity = quantity;

      // Recupera o carrinho do localStorage
      let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || [];

      // Adiciona o produto ao carrinho
      listaCompras.push(productData);

      // Salva no localStorage
      localStorage.setItem("listaCompras", JSON.stringify(listaCompras));

      // Exibe mensagem de sucesso e redireciona
      alert("Produto adicionado ao carrinho!");
      window.location = "../checkout.html";
    });
  } else {
    console.error("Nenhum produto encontrado no Local Storage");
    document.querySelector(".main-content").innerHTML = "<p>Produto não encontrado.</p>";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona as miniaturas e a imagem principal
  const thumbImages = document.querySelectorAll('.product_thumb');
  const mainImage = document.querySelector('.images_main img');

  // Função para trocar a imagem principal
  function changeMainImage(event) {
    const newImageSrc = event.target.src;  // Pega o caminho da miniatura clicada
    mainImage.src = newImageSrc;  // Troca o src da imagem principal
  }

  // Adiciona evento de clique em cada miniatura
  thumbImages.forEach(thumb => {
    thumb.addEventListener('click', changeMainImage);
  });
});

// Carrinho de Compras
let id = productData.id 
let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) 


if (listaCompras == null || listaCompras.length == 0){
    listaCompras = []
}

let produto = productData
let selecaoProduto = document.querySelector(".grid_col_1") 



loadProduct(produto,selecaoProduto) 

let botaoComprar = document.querySelector(".product_price_container button") 


botaoComprar.addEventListener('click', () => {
  const quantity = parseInt(document.querySelector("#quantity").value) || 1; // Quantidade desejada
  const existingProduct = listaCompras.find(item => item.id === produto.id); // Verifica se o produto já existe no carrinho

  if (existingProduct) {
    // Incrementa a quantidade do produto existente
    existingProduct.quantity += quantity;
    alert("Quantidade atualizada no carrinho!");
  } else {
    // Adiciona o produto com a quantidade selecionada
    produto.quantity = quantity;
    listaCompras.push(produto);
    alert("Produto adicionado ao carrinho com sucesso!");
  }

  // Atualiza o localStorage
  localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
  console.log(listaCompras);

  // Redireciona para a página de checkout
  window.location = "./checkout.html";
});
