// Função para carregar todos os produtos
export function loadProducts(products, section) {
  
  // Fazer uma requisição para a API Django para pegar os produtos
  fetch('http://127.0.0.1:8000/api/produtos/')  // Ajuste para o URL da sua API Django
    .then(response => response.json())
    .then(products => {

      // Filtro Novidade
      const produtosNovidades = products.filter(produto => produto.classificacaoProduto === "Novidades");

      // Filtro Mais Vendidos
      const produtosMaisVendidos = products.filter(produto => produto.classificacaoProduto === "Mais Vendidos");

      const produtosPromoções = products.filter(produto => produto.classificacaoProduto === "Promoções");
      const produtosLançamentos = products.filter(produto => produto.classificacaoProduto === "Lançamentos");
      

      function createProductCard(produto, targetSection) {
        const precoNumerico = parseFloat(produto.preco);
        if (isNaN(precoNumerico)) {
          console.error('Preço inválido:', produto.preco);
          return;
        }
        const valParcela = (precoNumerico / 10).toFixed(2);
        const card = document.createElement("div");
        card.classList.add("product-card", "idprod");
        card.id = produto.codigoProduto;
      
        card.innerHTML = `
          <div>
            <img id="${produto.codigoProduto}" src="${produto.imagensProduto.img1}" alt="${produto.tituloProduto}" width="168px" />
          </div>
          <div class="product-card-info-container">
            <h2 class="product-card-title" title="${produto.tituloProduto}">${produto.tituloProduto}</h2>
            <h4 class="product-card-reference">Cod. ${produto.codigoProduto}</h4>
            <h3 class="product-card-price">R$ ${precoNumerico.toFixed(2)}</h3>
            <h4 class="product-card-installment">10x de R$${valParcela} sem juros</h4>
          </div>
          <div class="cart-e-compra">
            <button id="${produto.codigoProduto}" class="product-card-btn">COMPRAR</button>
            <button class="product-card-btn-cart" data-id="${produto.codigoProduto}"><i class="bi bi-cart"></i></button>
            </div>`;
        
        card.querySelector('.product-card-btn').addEventListener('click', () => {
          const productData = {
            id: produto.codigoProduto,
            titulo: produto.tituloProduto,
            preco: precoNumerico.toFixed(2),
            descricao: produto.descricao,
            categoria: produto.categoriaProduto,
            imagens: produto.imagensProduto,
          };
          localStorage.setItem('selectedProduct', JSON.stringify(productData));
          window.location.href = '../product.html';
        });

        card.querySelector('.product-card-btn-cart').addEventListener('click', () => {

                // Exibe uma mensagem de sucesso
                alert("Melhoria futura!");
 
  

        })
      
        document.querySelector(targetSection).appendChild(card);
      }

      produtosNovidades.forEach(produto => createProductCard(produto, "#section-1 .carrousel"));
      produtosMaisVendidos.forEach(produto => createProductCard(produto, "#section-2 .carrousel"));
      produtosPromoções.forEach(produto => createProductCard(produto, "#section-3 .carrousel"));
      produtosLançamentos.forEach(produto => createProductCard(produto, "#section-4 .carrousel"));
    })
    .catch(error => {
      console.error('Erro ao carregar produtos:', error);
    });
}


// ----------- LOAD PRODUCTS GERAL ----------------


document.addEventListener("DOMContentLoaded", () => {
  // Carrega os produtos
  loadProducts();
  loadProducts();
  // Estou carregando duas vezes os produtos para popular mais minha página principal, melhorando a experiência de navegação do usuário

  // Adiciona evento nos botões PURCHASE após carregar os produtos
  document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("product-card-btn")) {
      const productId = event.target.id; // Obtém o ID do produto
      fetch(`http://127.0.0.1:8000/api/produtos/${productId}/`) // Busca os dados do produto
        .then((response) => response.json())
        .then((product) => {
          // Salva os dados no Local Storage
          localStorage.setItem("selectedProduct", JSON.stringify(product));
          // Redireciona para a página product.html
          window.location.href = "../product.html";
        })
        .catch((error) => console.error("Erro ao carregar produto:", error));
    }
  });
});




// ------- carrousel de imagens home -------------------

  // Seleciona todas as seções com a classe "section-product"
  document.querySelectorAll('.section-product-carrousel').forEach(carouselSection => {
    const productCarousel = carouselSection.querySelector('.carrousel');
    const prevBtn = carouselSection.querySelector('.prev');
    const nextBtn = carouselSection.querySelector('.next');

    let scrollAmount = 0;

    nextBtn.addEventListener('click', () => {
      scrollAmount += 340; // Largura do produto + margem
      if (scrollAmount > productCarousel.scrollWidth - carouselSection.offsetWidth) {
        scrollAmount = productCarousel.scrollWidth - carouselSection.offsetWidth;
      }
      productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
    });

    prevBtn.addEventListener('click', () => {
      scrollAmount -= 340; // Largura do produto + margem
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      productCarousel.style.transform = `translateX(-${scrollAmount}px)`;
    });
  });





  function cartTotal(cartItens) {
    return cartItens.reduce((total, item) => total + item.preco * item.quantity, 0);
  }
  
  
  export function loadCartItem(cartItens,cartItensHTML){
  
    if(cartItens.length == [] || cartItens.length == [] ){
      cartItensHTML.innerHTML = `Seu carrinho está vazio`
    } else {
      cartItens.forEach(item => {  
        let html = `
        <div class="cart_item" id="${item.codigoProduto}">
                    <div class="cart_item_main_img">
                        <img src="${item.imagemProduto.img1}" alt="">
                    </div>
                    <div class="cart_item_info">
                        <p>${item.tituloProduto}</p>
                        <p>
                            R$ ${item.preco}
                            <span>Un.</span>
                        </p>
    
                        <h3>R$ ${(item.preco)*(item.quantity)}</h3>
                       <div class="cart_item_qtd_selector">
                        <div class="cart_item_qtd_selector_container">
                            <i class="bi bi-dash"></i>
                            <span>${item.quantity}</span>
                            <i class="bi bi-plus"></i>
                            </div>
                            <button id="${item.codigoProduto}" class="remove">remover</button>
                            </div>
                        </div>
                </div>
    `
    cartItensHTML.innerHTML += html
    })
    const total = cartTotal(cartItens);
    localStorage.setItem('totalValue', total);
    const price = document.querySelector('.total.container-flex:nth-child(1) h3:nth-child(2)');
    price.innerHTML = `R$ ${total.toFixed(2)}`}
  
    }
    
  
  
    export function removeCartItem(sacolaCompras) {
      let botaoDel = document.querySelectorAll("button.remove") /* remover produto do carrinho */
      let cartItens = document.querySelector(".grid_col_1")
      botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
        let item = event.target.parentElement.parentElement.parentElement
        console.log(item)
        cartItens.removeChild(item)
        console.log(item.id)
        let index = sacolaCompras.findIndex(i => i.codigoProduto == item.id)
        console.log(index)
        sacolaCompras.splice(index, 1)
        console.log(sacolaCompras)
        localStorage.setItem('listaCompras', JSON.stringify(sacolaCompras))
    
        // Atualiza o elemento de preço aqui
        const total = cartTotal(sacolaCompras);
        localStorage.setItem('totalValue', total);
        const price = document.querySelector('.total.container-flex:nth-child(1) h3:nth-child(2)');
        price.innerHTML = `R$ ${total.toFixed(2)}`;
       
      }));
    }
  
  
  export function shop(pedidos){
  
  const form = document.querySelector('#billing form');
  const inputs = form.querySelectorAll('input,select');
  const inputValues = {};
  inputs.forEach((input) => {
    if (input.type!== 'submit' && input.type!== 'button') {
      inputValues[input.name] = input.value;
    }
  });
  console.log(inputValues);
  const order = {
     id: pedidos.length > 0? pedidos[pedidos.length - 1].id + 1 : 1,
     address:{...inputValues},
     items: JSON.parse(localStorage.getItem("listaCompras")),
     totalValue: parseFloat(localStorage.getItem("totalValue"))
  };
  
  pedidos.push(order);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));;
  alert("pedido realizado com sucesso")
  localStorage.removeItem("listaCompras");
  localStorage.removeItem("totalValue");
  window.location = "./index.html"
  } 

  document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".product-card-btn-cart");
    cartButtons.forEach((button) => {
      const icon = button.querySelector("i");
  
      // Evento para mudar o ícone ao passar o mouse
      button.addEventListener("mouseover", () => {
        icon.style.transition = "opacity 0.3s ease-in"; // Adiciona transição na opacidade
        // icon.style.opacity = "0"; // Desaparece gradualmente
  
        // Troca o ícone após a transição
        setTimeout(() => {
          icon.classList.replace("bi-cart", "bi-cart-fill");
          icon.style.opacity = "1"; // Reaparece gradualmente
        }, 300);
      });
  
      // Evento para restaurar o ícone ao retirar o mouse
      button.addEventListener("mouseout", () => {
        icon.style.transition = "opacity 0.3s ease-in"; // Adiciona transição na opacidade
        // icon.style.opacity = "0"; // Desaparece gradualmente
  
        // Troca o ícone após a transição
        setTimeout(() => {
          icon.classList.replace("bi-cart-fill", "bi-cart");
          icon.style.opacity = "1"; // Reaparece gradualmente
        }, 300);
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const personButtons = document.querySelectorAll(".product-card-btn-person");
  
    personButtons.forEach((button) => {
      const icon = button.querySelector("i");
  
      // Evento para mudar o ícone ao passar o mouse
      button.addEventListener("mouseover", () => {
        icon.style.transition = "opacity 0.3s ease-in"; // Adiciona transição na opacidade
        // icon.style.opacity = "0"; // Desaparece gradualmente
  
        // Troca o ícone após a transição
        setTimeout(() => {
          icon.classList.replace("bi-person", "bi-person-fill");
          icon.style.opacity = "1"; // Reaparece gradualmente
        }, 300);
      });
  
      // Evento para restaurar o ícone ao retirar o mouse
      button.addEventListener("mouseout", () => {
        icon.style.transition = "opacity 0.3s ease-in"; // Adiciona transição na opacidade
        // icon.style.opacity = "0"; // Desaparece gradualmente
  
        // Troca o ícone após a transição
        setTimeout(() => {
          icon.classList.replace("bi-person-fill", "bi-person");
          icon.style.opacity = "1"; // Reaparece gradualmente
        }, 300);
      });
    });
  });

// 

  // Botões de Categoria
  document.getElementById('ProdNoteFilter').addEventListener('click', function () {
    // Redirecionar para a página com um parâmetro na URL para a seção 1 (Notebooks)
    window.location.href = 'products.html?section=1';
  });

  document.getElementById('ProdCelFilter').addEventListener('click', function () {
    // Redirecionar para a página com um parâmetro na URL para a seção 2 (Celulares)
    window.location.href = 'products.html?section=2';
  });

  document.getElementById('ProdPeriFilter').addEventListener('click', function () {
    // Redirecionar para a página com um parâmetro na URL para a seção 3 (Periféricos)
    window.location.href = 'products.html?section=3';
  });


// Adicionar ao carrinho direto do card ao clicar no ícone 

// Adiciona o evento ao botão do carrinho na página principal
document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".product-card-btn-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id; // Obtém o ID do produto do atributo data-id
      const produto = findProduct(database, productId);

      if (produto) {
        // Define uma quantidade padrão (1) ao adicionar na página principal
        produto.quantity = 1;

        // Adiciona o produto ao array listaCompras
        listaCompras.push(produto);

        // Salva no localStorage
        localStorage.setItem("listaCompras", JSON.stringify(listaCompras));

        // Exibe uma mensagem de sucesso
        alert("Produto adicionado ao carrinho com sucesso!");

      } else {
        console.error("Produto não encontrado!");
      }
    });
  });
});