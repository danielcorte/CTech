// Meu banco de dados está todo comentado para demonstrar que estou carregando meus produtos diretamente da API, no backend.

// export const database = [ 
    // {
    //     codigoProduto: 1,
    //     tituloProduto: "Samsung Galaxy S23 Ultra 512GB",
    //     preco: 6899.99,
    //     descricao: "O Samsung Galaxy S23 Ultra traz inovação e design elegante com uma câmera de 200MP e desempenho ultra-rápido com o processador Snapdragon 8 Gen 2.",
    //     imagemProduto: {
    //         img1: "./images/products/prod01/img1.png",
    //         img2: "./images/products/prod01/img2.png",
    //         img3: "./images/products/prod01/img3.png",
    //         img4: "./images/products/prod01/img4.png",
    //     },
    //     categoriaProduto: 'Celulares',
    //     classificacaoProduto: "Novidades",
    //     exibirHome: true
    // },
//     {
//         codigoProduto: 2,
//         tituloProduto: "Apple iPhone 15 Pro Max 512GB",
//         preco: 10999.99,
//         descricao: "O iPhone 15 Pro Max apresenta um design sofisticado com um chip A17 Pro, câmera de 48MP e performance incrível para todas as tarefas.",
//         imagemProduto: {
//             img1: "./images/products/prod02/img1.png",
//             img2: "./images/products/prod02/img2.png",
//             img3: "./images/products/prod02/img3.png",
//             img4: "./images/products/prod02/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 3,
//         tituloProduto: "Xiaomi 13 Pro 256GB",
//         preco: 5399.99,
//         descricao: "Com uma câmera Leica de 50MP e o processador Snapdragon 8 Gen 2, o Xiaomi 13 Pro oferece performance e qualidade de imagem de ponta.",
//         imagemProduto: {
//             img1: "./images/products/prod03/img1.png",
//             img2: "./images/products/prod03/img2.png",
//             img3: "./images/products/prod03/img3.png",
//             img4: "./images/products/prod03/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 4,
//         tituloProduto: "Samsung Galaxy Z Fold 5 512GB",
//         preco: 13999.99,
//         descricao: "Com tela dobrável de 7.6 polegadas, o Samsung Galaxy Z Fold 5 traz o futuro da tecnologia móvel. Oferece uma experiência imersiva para quem deseja um dispositivo inovador.",
//         imagemProduto: {
//             img1: "./images/products/prod04/img1.png",
//             img2: "./images/products/prod04/img2.png",
//             img3: "./images/products/prod04/img3.png",
//             img4: "./images/products/prod04/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 5,
//         tituloProduto: "Apple iPhone 14 128GB",
//         preco: 4999.99,
//         descricao: "Com tela Super Retina XDR e chip A15 Bionic, o iPhone 14 oferece uma excelente performance e câmeras de alta qualidade.",
//         imagemProduto: {
//             img1: "./images/products/prod05/img1.png",
//             img2: "./images/products/prod05/img2.png",
//             img3: "./images/products/prod05/img3.png",
//             img4: "./images/products/prod05/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 6,
//         tituloProduto: "Xiaomi Redmi Note 12 Pro 128GB",
//         preco: 1799.99,
//         descricao: "O Xiaomi Redmi Note 12 Pro oferece ótimo desempenho com seu processador MediaTek Dimensity 1080 e câmera de 50MP, com preço acessível.",
//         imagemProduto: {
//             img1: "./images/products/prod06/img1.png",
//             img2: "./images/products/prod06/img2.png",
//             img3: "./images/products/prod06/img3.png",
//             img4: "./images/products/prod06/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 7,
//         tituloProduto: "Samsung Galaxy A54 5G 128GB",
//         preco: 2299.99,
//         descricao: "O Samsung Galaxy A54 5G traz uma tela AMOLED de 120Hz, ótimo desempenho com o Exynos 1380 e câmeras de alta qualidade, tudo a um preço acessível.",
//         imagemProduto: {
//             img1: "./images/products/prod07/img1.png",
//             img2: "./images/products/prod07/img2.png",
//             img3: "./images/products/prod07/img3.png",
//             img4: "./images/products/prod07/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 8,
//         tituloProduto: "Apple iPhone 13 256GB",
//         preco: 7999.99,
//         descricao: "O iPhone 13 oferece uma excelente performance com seu chip A15 Bionic e câmeras de 12MP para fotos e vídeos incríveis.",
//         imagemProduto: {
//             img1: "./images/products/prod08/img1.png",
//             img2: "./images/products/prod08/img2.png",
//             img3: "./images/products/prod08/img3.png",
//             img4: "./images/products/prod08/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 9,
//         tituloProduto: "Xiaomi Poco F5 256GB",
//         preco: 2299.99,
//         descricao: "Com tela AMOLED de 6.67 polegadas e processador Snapdragon 7+ Gen 2, o Poco F5 oferece performance superior a um preço acessível.",
//         imagemProduto: {
//             img1: "./images/products/prod09/img1.png",
//             img2: "./images/products/prod09/img2.png",
//             img3: "./images/products/prod09/img3.png",
//             img4: "./images/products/prod09/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 10,
//         tituloProduto: "Samsung Galaxy Z Flip 5 256GB",
//         preco: 8999.99,
//         descricao: "O Samsung Galaxy Z Flip 5 combina design compacto com a inovação da tela dobrável, perfeito para quem busca estilo e praticidade.",
//         imagemProduto: {
//             img1: "./images/products/prod10/img1.png",
//             img2: "./images/products/prod10/img2.png",
//             img3: "./images/products/prod10/img3.png",
//             img4: "./images/products/prod10/img4.png",
//         },
//         categoriaProduto: 'Celulares',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 11,
//         tituloProduto: "Dell Inspiron 15 5000 Intel Core i5 8GB 512GB SSD",
//         preco: 4299.99,
//         descricao: "O Dell Inspiron 15 5000 combina desempenho rápido com um design elegante, ideal para tarefas diárias e trabalho remoto.",
//         imagemProduto: {
//             img1: "./images/products/prod11/img1.png",
//             img2: "./images/products/prod11/img2.png",
//             img3: "./images/products/prod11/img3.png",
//             img4: "./images/products/prod11/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 12,
//         tituloProduto: "Acer Aspire 5 Intel Core i7 16GB 512GB SSD",
//         preco: 5999.99,
//         descricao: "Com o potente processador Intel Core i7 e 16GB de RAM, o Acer Aspire 5 é perfeito para produtividade e multitarefas.",
//         imagemProduto: {
//             img1: "./images/products/prod12/img1.png",
//             img2: "./images/products/prod12/img2.png",
//             img3: "./images/products/prod12/img3.png",
//             img4: "./images/products/prod12/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 13,
//         tituloProduto: "Lenovo IdeaPad 3 Intel Core i5 8GB 256GB SSD",
//         preco: 3399.99,
//         descricao: "O Lenovo IdeaPad 3 oferece um excelente custo-benefício com desempenho rápido e eficiente, perfeito para trabalho e estudo.",
//         imagemProduto: {
//             img1: "./images/products/prod13/img1.png",
//             img2: "./images/products/prod13/img2.png",
//             img3: "./images/products/prod13/img3.png",
//             img4: "./images/products/prod13/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
    // {
    //     codigoProduto: 14,
    //     tituloProduto: "Dell XPS 13 9310 Intel Core i7 16GB 1TB SSD",
    //     preco: 12499.99,
    //     descricao: "Com design premium e desempenho poderoso, o Dell XPS 13 é ideal para profissionais que buscam excelência em suas tarefas diárias.",
    //     imagemProduto: {
    //         img1: "./images/products/prod14/img1.png",
    //         img2: "./images/products/prod14/img2.png",
    //         img3: "./images/products/prod14/img3.png",
    //         img4: "./images/products/prod14/img4.png",
    //     },
    //     categoriaProduto: 'Notebooks',
    //     classificacaoProduto: "Lançamentos",
    //     exibirHome: true
    // },
//     {
//         codigoProduto: 15,
//         tituloProduto: "Acer Nitro 5 Intel Core i7 16GB 512GB SSD RTX 3060",
//         preco: 7999.99,
//         descricao: "O Acer Nitro 5 foi projetado para gamers, oferecendo um desempenho incrível com a placa gráfica RTX 3060 e tela de alta taxa de atualização.",
//         imagemProduto: {
//             img1: "./images/products/prod15/img1.png",
//             img2: "./images/products/prod15/img2.png",
//             img3: "./images/products/prod15/img3.png",
//             img4: "./images/products/prod15/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 16,
//         tituloProduto: "Lenovo Legion 5 Pro Intel Core i7 16GB 1TB SSD RTX 3070",
//         preco: 10999.99,
//         descricao: "Com o poderoso processador Intel Core i7 e a placa gráfica RTX 3070, o Lenovo Legion 5 Pro é a escolha certa para gamers e criadores de conteúdo.",
//         imagemProduto: {
//             img1: "./images/products/prod16/img1.png",
//             img2: "./images/products/prod16/img2.png",
//             img3: "./images/products/prod16/img3.png",
//             img4: "./images/products/prod16/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 17,
//         tituloProduto: "Lenovo ThinkPad X1 Carbon Gen 10 Intel Core i7 16GB 512GB SSD",
//         preco: 10499.99,
//         descricao: "O Lenovo ThinkPad X1 Carbon Gen 10 oferece desempenho empresarial de alta performance com um design ultrafino e resistência premium.",
//         imagemProduto: {
//             img1: "./images/products/prod17/img1.png",
//             img2: "./images/products/prod17/img2.png",
//             img3: "./images/products/prod17/img3.png",
//             img4: "./images/products/prod17/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 18,
//         tituloProduto: "Acer Predator Helios 300 Intel Core i9 32GB 1TB SSD RTX 3080",
//         preco: 14999.99,
//         descricao: "Com uma tela de 165Hz e o poderoso processador Intel Core i9 e GPU RTX 3080, o Acer Predator Helios 300 é perfeito para gamers e criadores de conteúdo.",
//         imagemProduto: {
//             img1: "./images/products/prod18/img1.png",
//             img2: "./images/products/prod18/img2.png",
//             img3: "./images/products/prod18/img3.png",
//             img4: "./images/products/prod18/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 19,
//         tituloProduto: "Dell Alienware X17 Intel Core i9 32GB 1TB SSD RTX 3080",
//         preco: 16999.99,
//         descricao: "O Alienware X17 combina a última tecnologia com um design futurista, trazendo gráficos RTX 3080 e um desempenho de tirar o fôlego para gamers e profissionais.",
//         imagemProduto: {
//             img1: "./images/products/prod19/img1.png",
//             img2: "./images/products/prod19/img2.png",
//             img3: "./images/products/prod19/img3.png",
//             img4: "./images/products/prod19/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 20,
//         tituloProduto: "Apple MacBook Air M2 256GB",
//         preco: 8499.99,
//         descricao: "O MacBook Air M2 oferece desempenho incrível com o chip M2 da Apple, combinando eficiência energética e portabilidade com uma tela de 13,6 polegadas.",
//         imagemProduto: {
//             img1: "./images/products/prod20/img1.png",
//             img2: "./images/products/prod20/img2.png",
//             img3: "./images/products/prod20/img3.png",
//             img4: "./images/products/prod20/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 21,
//         tituloProduto: "Acer Aspire 7 Intel Core i5 8GB 512GB SSD GTX 1650",
//         preco: 3999.99,
//         descricao: "O Acer Aspire 7 combina a performance do processador Intel Core i5 e a placa de vídeo GTX 1650, oferecendo excelente desempenho para jogos e produtividade.",
//         imagemProduto: {
//             img1: "./images/products/prod21/img1.png",
//             img2: "./images/products/prod21/img2.png",
//             img3: "./images/products/prod21/img3.png",
//             img4: "./images/products/prod21/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 22,
//         tituloProduto: "Lenovo Yoga 9i Intel Core i7 16GB 512GB SSD",
//         preco: 8999.99,
//         descricao: "O Lenovo Yoga 9i é um notebook 2-em-1 com design premium e potente desempenho, perfeito para quem precisa de versatilidade e alta performance.",
//         imagemProduto: {
//             img1: "./images/products/prod22/img1.png",
//             img2: "./images/products/prod22/img2.png",
//             img3: "./images/products/prod22/img3.png",
//             img4: "./images/products/prod22/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 23,
//         tituloProduto: "Samsung Galaxy Book Pro Intel Core i7 16GB 512GB SSD",
//         preco: 6599.99,
//         descricao: "O Samsung Galaxy Book Pro combina um design ultrafino com o desempenho poderoso do processador Intel Core i7 e tela AMOLED para uma experiência visual de alta qualidade.",
//         imagemProduto: {
//             img1: "./images/products/prod23/img1.png",
//             img2: "./images/products/prod23/img2.png",
//             img3: "./images/products/prod23/img3.png",
//             img4: "./images/products/prod23/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 24,
//         tituloProduto: "HP Omen 15 Intel Core i7 16GB 512GB SSD RTX 3060",
//         preco: 8499.99,
//         descricao: "Com a placa gráfica RTX 3060 e o processador Intel Core i7, o HP Omen 15 é um notebook para gamers e criadores de conteúdo exigentes.",
//         imagemProduto: {
//             img1: "./images/products/prod24/img1.png",
//             img2: "./images/products/prod24/img2.png",
//             img3: "./images/products/prod24/img3.png",
//             img4: "./images/products/prod24/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 25,
//         tituloProduto: "Asus ROG Zephyrus G14 AMD Ryzen 9 16GB 1TB SSD RTX 3070",
//         preco: 12999.99,
//         descricao: "O Asus ROG Zephyrus G14 é um dos notebooks mais poderosos da categoria, com o novo processador AMD Ryzen 9 e GPU RTX 3070 para desempenho extremo em jogos e multitarefa.",
//         imagemProduto: {
//             img1: "./images/products/prod25/img1.png",
//             img2: "./images/products/prod25/img2.png",
//             img3: "./images/products/prod25/img3.png",
//             img4: "./images/products/prod25/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 26,
//         tituloProduto: "Microsoft Surface Laptop 5 Intel Core i5 8GB 512GB SSD",
//         preco: 6999.99,
//         descricao: "O Microsoft Surface Laptop 5 oferece um design premium, desempenho eficiente e uma tela PixelSense de alta resolução, ideal para profissionais e estudantes.",
//         imagemProduto: {
//             img1: "./images/products/prod26/img1.png",
//             img2: "./images/products/prod26/img2.png",
//             img3: "./images/products/prod26/img3.png",
//             img4: "./images/products/prod26/img4.png",
//         },
//         categoriaProduto: 'Notebooks',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
    // {
    //     codigoProduto: 27,
    //     tituloProduto: "Mouse Logitech G Pro Wireless",
    //     preco: 499.99,
    //     descricao: "O Mouse Logitech G Pro Wireless foi desenvolvido para gamers profissionais, oferecendo alta precisão, desempenho sem fio e design ergonômico.",
    //     imagemProduto: {
    //         img1: "./images/products/prod27/img1.png",
    //         img2: "./images/products/prod27/img2.png",
    //         img3: "./images/products/prod27/img3.png",
    //         img4: "./images/products/prod27/img4.png",
    //     },
    //     categoriaProduto: 'Periféricos',
    //     classificacaoProduto: "Mais Vendidos",
    //     exibirHome: true
    // },
//     {
//         codigoProduto: 28,
//         tituloProduto: "Teclado Mecânico Corsair K70 RGB MK.2",
//         preco: 799.99,
//         descricao: "Teclado mecânico Corsair K70 RGB MK.2 com switches Cherry MX, retroiluminação RGB e teclas multimídia, ideal para gamers e profissionais.",
//         imagemProduto: {
//             img1: "./images/products/prod28/img1.png",
//             img2: "./images/products/prod28/img2.png",
//             img3: "./images/products/prod28/img3.png",
//             img4: "./images/products/prod28/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 29,
//         tituloProduto: "Fone de Ouvido JBL Quantum One",
//         preco: 1299.99,
//         descricao: "O Fone de Ouvido JBL Quantum One é projetado para gamers, oferecendo som surround de alta qualidade e microfone com cancelamento de ruído.",
//         imagemProduto: {
//             img1: "./images/products/prod29/img1.png",
//             img2: "./images/products/prod29/img2.png",
//             img3: "./images/products/prod29/img3.png",
//             img4: "./images/products/prod29/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 30,
//         tituloProduto: "Mouse Razer DeathAdder V2",
//         preco: 449.99,
//         descricao: "O Mouse Razer DeathAdder V2 possui sensor óptico de 20K DPI, switches ópticos Razer e design ergonômico, perfeito para jogos de alta performance.",
//         imagemProduto: {
//             img1: "./images/products/prod30/img1.png",
//             img2: "./images/products/prod30/img2.png",
//             img3: "./images/products/prod30/img3.png",
//             img4: "./images/products/prod30/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 31,
//         tituloProduto: "Teclado Logitech G915 TKL Lightspeed",
//         preco: 1499.99,
//         descricao: "Teclado mecânico sem fio Logitech G915 TKL com switches low profile, retroiluminação RGB e conectividade Lightspeed, ideal para gamers.",
//         imagemProduto: {
//             img1: "./images/products/prod31/img1.png",
//             img2: "./images/products/prod31/img2.png",
//             img3: "./images/products/prod31/img3.png",
//             img4: "./images/products/prod31/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 32,
//         tituloProduto: "Fone de Ouvido Sony WH-1000XM4",
//         preco: 2499.99,
//         descricao: "Fone de ouvido Sony WH-1000XM4 oferece cancelamento de ruído ativo, qualidade de som premium e conforto para longas sessões de uso.",
//         imagemProduto: {
//             img1: "./images/products/prod32/img1.png",
//             img2: "./images/products/prod32/img2.png",
//             img3: "./images/products/prod32/img3.png",
//             img4: "./images/products/prod32/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 33,
//         tituloProduto: "Mouse Logitech MX Master 3",
//         preco: 499.99,
//         descricao: "Mouse Logitech MX Master 3 com design ergonômico, sensor de alta precisão e botões personalizáveis, ideal para produtividade e uso profissional.",
//         imagemProduto: {
//             img1: "./images/products/prod33/img1.png",
//             img2: "./images/products/prod33/img2.png",
//             img3: "./images/products/prod33/img3.png",
//             img4: "./images/products/prod33/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 34,
//         tituloProduto: "Teclado HyperX Alloy FPS Pro",
//         preco: 599.99,
//         descricao: "Teclado mecânico HyperX Alloy FPS Pro com switches Cherry MX, design compacto e retroiluminação vermelha, perfeito para gamers que buscam desempenho.",
//         imagemProduto: {
//             img1: "./images/products/prod34/img1.png",
//             img2: "./images/products/prod34/img2.png",
//             img3: "./images/products/prod34/img3.png",
//             img4: "./images/products/prod34/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 35,
//         tituloProduto: "Fone de Ouvido Corsair HS70 Pro Wireless",
//         preco: 799.99,
//         descricao: "Fone de Ouvido Corsair HS70 Pro Wireless com som de alta qualidade, conforto ergonômico e conectividade sem fio de longo alcance, ideal para gamers.",
//         imagemProduto: {
//             img1: "./images/products/prod35/img1.png",
//             img2: "./images/products/prod35/img2.png",
//             img3: "./images/products/prod35/img3.png",
//             img4: "./images/products/prod35/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 36,
//         tituloProduto: "Teclado Razer BlackWidow V3",
//         preco: 799.99,
//         descricao: "O Teclado Razer BlackWidow V3 oferece switches mecânicos Razer Green, retroiluminação RGB e construção robusta para uma experiência de jogo incomparável.",
//         imagemProduto: {
//             img1: "./images/products/prod36/img1.png",
//             img2: "./images/products/prod36/img2.png",
//             img3: "./images/products/prod36/img3.png",
//             img4: "./images/products/prod36/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 37,
//         tituloProduto: "Mouse Razer Naga X",
//         preco: 399.99,
//         descricao: "Mouse Razer Naga X com 16 botões programáveis, design ergonômico e sensor de 16.000 DPI, ideal para jogos MMO e MOBA.",
//         imagemProduto: {
//             img1: "./images/products/prod37/img1.png",
//             img2: "./images/products/prod37/img2.png",
//             img3: "./images/products/prod37/img3.png",
//             img4: "./images/products/prod37/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Novidades",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 38,
//         tituloProduto: "Teclado Mecânico Redragon K582 SURARA",
//         preco: 249.99,
//         descricao: "Teclado mecânico Redragon K582 SURARA com switches Outemu, retroiluminação RGB e design robusto, ideal para gamers.",
//         imagemProduto: {
//             img1: "./images/products/prod38/img1.png",
//             img2: "./images/products/prod38/img2.png",
//             img3: "./images/products/prod38/img3.png",
//             img4: "./images/products/prod38/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 39,
//         tituloProduto: "Fone de Ouvido HyperX Cloud II",
//         preco: 699.99,
//         descricao: "Fone de ouvido HyperX Cloud II com som surround 7.1, microfone com cancelamento de ruído e almofadas de memória para máximo conforto.",
//         imagemProduto: {
//             img1: "./images/products/prod39/img1.png",
//             img2: "./images/products/prod39/img2.png",
//             img3: "./images/products/prod39/img3.png",
//             img4: "./images/products/prod39/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 40,
//         tituloProduto: "Mouse SteelSeries Rival 600",
//         preco: 499.99,
//         descricao: "O Mouse SteelSeries Rival 600 é ideal para gamers com sensor duplo de 12.000 DPI, iluminação RGB personalizável e design ergonômico.",
//         imagemProduto: {
//             img1: "./images/products/prod40/img1.png",
//             img2: "./images/products/prod40/img2.png",
//             img3: "./images/products/prod40/img3.png",
//             img4: "./images/products/prod40/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 41,
//         tituloProduto: "Teclado Logitech G213 Prodigy",
//         preco: 369.99,
//         descricao: "Teclado mecânico Logitech G213 Prodigy com switches de membrana, retroiluminação RGB e design resistente à água.",
//         imagemProduto: {
//             img1: "./images/products/prod41/img1.png",
//             img2: "./images/products/prod41/img2.png",
//             img3: "./images/products/prod41/img3.png",
//             img4: "./images/products/prod41/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 42,
//         tituloProduto: "Fone de Ouvido Logitech G Pro X",
//         preco: 1299.99,
//         descricao: "Fone de ouvido Logitech G Pro X com som de alta qualidade, microfone Blue VO!CE e design confortável para longas sessões de jogo.",
//         imagemProduto: {
//             img1: "./images/products/prod42/img1.png",
//             img2: "./images/products/prod42/img2.png",
//             img3: "./images/products/prod42/img3.png",
//             img4: "./images/products/prod42/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 43,
//         tituloProduto: "Teclado Mecânico Corsair K95 RGB Platinum XT",
//         preco: 1299.99,
//         descricao: "Teclado mecânico Corsair K95 RGB Platinum XT com switches Cherry MX, retroiluminação RGB e teclas macro programáveis para jogos e produtividade.",
//         imagemProduto: {
//             img1: "./images/products/prod43/img1.png",
//             img2: "./images/products/prod43/img2.png",
//             img3: "./images/products/prod43/img3.png",
//             img4: "./images/products/prod43/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 44,
//         tituloProduto: "Fone de Ouvido SteelSeries Arctis 7",
//         preco: 799.99,
//         descricao: "Fone de ouvido SteelSeries Arctis 7 com som surround, microfone ClearCast e conforto superior para sessões de jogo prolongadas.",
//         imagemProduto: {
//             img1: "./images/products/prod44/img1.png",
//             img2: "./images/products/prod44/img2.png",
//             img3: "./images/products/prod44/img3.png",
//             img4: "./images/products/prod44/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Promoções",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 45,
//         tituloProduto: "Mouse Logitech G502 Hero",
//         preco: 499.99,
//         descricao: "Mouse Logitech G502 Hero com sensor de 16.000 DPI, 11 botões programáveis e iluminação RGB personalizável, ideal para gamers.",
//         imagemProduto: {
//             img1: "./images/products/prod45/img1.png",
//             img2: "./images/products/prod45/img2.png",
//             img3: "./images/products/prod45/img3.png",
//             img4: "./images/products/prod45/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Mais Vendidos",
//         exibirHome: true
//     },
//     {
//         codigoProduto: 46,
//         tituloProduto: "Teclado Razer Huntsman Mini",
//         preco: 999.99,
//         descricao: "Teclado mecânico compacto Razer Huntsman Mini com switches ópticos, retroiluminação RGB e design compacto para otimizar seu espaço.",
//         imagemProduto: {
//             img1: "./images/products/prod46/img1.png",
//             img2: "./images/products/prod46/img2.png",
//             img3: "./images/products/prod46/img3.png",
//             img4: "./images/products/prod46/img4.png",
//         },
//         categoriaProduto: 'Periféricos',
//         classificacaoProduto: "Lançamentos",
//         exibirHome: true
//     },

// {
//     codigoProduto: 47,
//     tituloProduto: "Google Pixel 8 Pro 128GB",
//     preco: 7999.99,
//     descricao: "O Google Pixel 8 Pro traz o melhor da inteligência artificial com o chip Tensor G3 e câmeras que capturam fotos impressionantes em qualquer condição de luz.",
//     imagemProduto: {
//         img1: "./images/products/prod47/img1.png",
//         img2: "./images/products/prod47/img2.png",
//         img3: "./images/products/prod47/img3.png",
//         img4: "./images/products/prod47/img4.png",
//     },
//     categoriaProduto: 'Celulares',
//     classificacaoProduto: "Lançamentos",
//     exibirHome: true
// },
// {
//     codigoProduto: 48,
//     tituloProduto: "Motorola Edge 40 Pro 256GB",
//     preco: 4999.99,
//     descricao: "Com tela curva OLED de 144Hz, o Motorola Edge 40 Pro oferece uma experiência imersiva e performance rápida com o Snapdragon 8 Gen 2.",
//     imagemProduto: {
//         img1: "./images/products/prod48/img1.png",
//         img2: "./images/products/prod48/img2.png",
//         img3: "./images/products/prod48/img3.png",
//         img4: "./images/products/prod48/img4.png",
//     },
//     categoriaProduto: 'Celulares',
//     classificacaoProduto: "Mais Vendidos",
//     exibirHome: true
// },
// {
//     codigoProduto: 49,
//     tituloProduto: "Sony Xperia 1 V 512GB",
//     preco: 9499.99,
//     descricao: "O Sony Xperia 1 V é perfeito para criadores de conteúdo, com uma câmera profissional de 48MP e tela 4K HDR OLED de 120Hz.",
//     imagemProduto: {
//         img1: "./images/products/prod49/img1.png",
//         img2: "./images/products/prod49/img2.png",
//         img3: "./images/products/prod49/img3.png",
//         img4: "./images/products/prod49/img4.png",
//     },
//     categoriaProduto: 'Celulares',
//     classificacaoProduto: "Lançamentos",
//     exibirHome: true
// },
// {
//     codigoProduto: 50,
//     tituloProduto: "Asus ROG Phone 7 Ultimate 512GB",
//     preco: 8999.99,
//     descricao: "O Asus ROG Phone 7 Ultimate é o smartphone gamer definitivo, com tela AMOLED de 165Hz e resfriamento avançado para longas sessões de jogo.",
//     imagemProduto: {
//         img1: "./images/products/prod50/img1.png",
//         img2: "./images/products/prod50/img2.png",
//         img3: "./images/products/prod50/img3.png",
//         img4: "./images/products/prod50/img4.png",
//     },
//     categoriaProduto: 'Celulares',
//     classificacaoProduto: "Promoções",
//     exibirHome: true
// }
// ];

// Meu banco de dados está todo comentado para demonstrar que estou carregando meus produtos diretamente da API, no backend.
