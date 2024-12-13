# Como rodar o projeto CTech

Este guia explica como configurar e executar o projeto **CTech**. Certifique-se de que as ferramentas necessárias estão instaladas na sua máquina antes de começar.

---

## Ferramentas necessárias
- [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- [Python](https://www.python.org/)
- [Node.js](https://nodejs.org/)

---

## Passos para rodar o projeto

### 1. Clonar o repositório
Abra o terminal ou prompt de comando, navegue até a pasta onde deseja clonar o projeto e execute o seguinte comando:

```bash
git clone https://github.com/danielcorte/CTech.git
```

Depois, abra a pasta clonada no VS Code.

---

### 2. Iniciar a API (Backend)
1. Abra um terminal no VS Code.
2. Navegue até a pasta do backend:

    ```bash
    cd CTech
    cd back
    ```

3. Crie e ative um ambiente virtual:

    **No Windows:**
    ```bash
    py -m venv env
    env\scripts\activate
    ```

    **No Linux/Mac:**
    ```bash
    python3 -m venv env
    source env/bin/activate
    ```

4. Instale as dependências:

    ```bash
    pip install -r requirements.txt
    ```

5. Inicie o servidor Django:

    ```bash
    py manage.py runserver
    ```

6. Acesse o backend em seu navegador na URL:

    ```
    http://127.0.0.1:8000/
    ```

---

### 3. Iniciar o Frontend
1. Abra um novo terminal no VS Code, sem fechar o terminal do backend.
2. Navegue até a pasta do frontend:

    ```bash
    cd CTech
    cd front
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor do frontend:

    ```bash
    npm run dev
    ```

5. Acesse o frontend em seu navegador na URL:

    ```
    http://localhost:5174/
    ```

---

## Obrigado!
Obrigado por conferir o projeto! Sinta-se à vontade para testar e explorar. 😄
