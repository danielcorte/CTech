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