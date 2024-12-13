// Atualiza os valores da página com os dados do localStorage
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar os valores do localStorage
  const checkoutValues = JSON.parse(localStorage.getItem("checkoutValues"));
  // console.log(checkoutValues);
  
  if (checkoutValues) {
    const { subtotal, shipping, total } = checkoutValues;
    
    // Atualizar os valores na estrutura HTML fornecida
    const totalContainer = document.querySelector(".grid_col_2 .total_container");
    totalContainer.querySelector(".total:nth-child(1) h3:nth-of-type(2)").textContent = `R$ ${subtotal.toFixed(2)}`;
    totalContainer.querySelector(".total:nth-child(2) h3:nth-of-type(2)").textContent = `R$ ${shipping.toFixed(2)}`;
    totalContainer.querySelector(".total:nth-child(3) h3:nth-of-type(2)").textContent = `R$ ${total.toFixed(2)}`;
  } else {
    // Caso os valores não estejam disponíveis no localStorage, exibir valores padrão
    const totalContainer = document.querySelector(".grid_col_2 .total_container");
    totalContainer.querySelector(".total:nth-child(1) h3:nth-of-type(2)").textContent = "R$ 0.00";
    totalContainer.querySelector(".total:nth-child(2) h3:nth-of-type(2)").textContent = "R$ 0.00";
    totalContainer.querySelector(".total:nth-child(3) h3:nth-of-type(2)").textContent = "R$ 0.00";
    
    
  }
});


// Função para salvar o pedido no localStorage
function saveOrder() {
  let pedidos = [];
  if (localStorage.getItem("pedidos") === null) {
   let pedidos = [];
  } else {
 
    if (localStorage.getItem("pedidos") != "null"){
      JSON.parse(localStorage.getItem("pedidos")).forEach(item => {
      pedidos.push(item);
      console.log(pedidos)
      }
    );
    }
    else{
      pedidos.push(item);
      console.log(pedidos)
    }
  }
  // Captura os dados do formulário
  const form = document.querySelector("#billing form");
  const inputs = form.querySelectorAll("input, select");
  const inputValues = {};

  // Coleta os valores de cada campo do formulário
  inputs.forEach((input) => {
    if (input.type !== "submit" && input.type !== "button") {
      inputValues[input.name] = input.value;
    }
  });

  // Monta o pedido
  const order = {
    id: pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1, // ID sequencial
    address: { ...inputValues }, // Endereço e dados do cliente
    items: JSON.parse(localStorage.getItem("listaCompras")), // Itens do carrinho
    totalValue: JSON.parse(localStorage.getItem("checkoutValues")).total, // Valor total do pedido
  };
  console.log(pedidos);
  // Adiciona o pedido à lista e salva no localStorage
  pedidos.push(order);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  // Limpa os dados do carrinho
  alert("Pedido realizado com sucesso!");
  localStorage.removeItem("listaCompras");
  localStorage.removeItem("totalValue");

  // Redireciona para a página inicial
  window.location.href = "./index.html";
}

const shopBtn = document.querySelector("button.checkout_btn")

shopBtn.addEventListener("click",() => {
  console.log("OI")
  saveOrder();
});


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
