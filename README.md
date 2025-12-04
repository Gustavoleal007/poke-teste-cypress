# poke-teste-cypress

# 🧪 Testes Automatizados com Cypress - Projeto Pokémons

Este repositório contém os testes automatizados desenvolvidos em **Cypress** para validar funcionalidades da aplicação do projeto dos Pokémons, conforme a UC passada.  
O objetivo principal é garantir que as funcionalidades críticas (login e home) estejam funcionando corretamente, assegurando qualidade e confiabilidade no sistema.

---

## 📚 Contexto da UC
Na UC passada, o projeto dos Pokémons foi desenvolvido com foco em:
- Autenticação de usuários.
- Exibição da lista de Pokémons na página inicial.
- Navegação entre componentes e funcionalidades básicas.

Os testes aqui documentados foram criados para validar esses pontos críticos.

---

## 🛠️ Ferramentas utilizadas
- **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end.
- **Node.js & npm:** Gerenciamento de dependências e execução dos scripts.
- **GitHub Actions (opcional):** Integração contínua para rodar os testes automaticamente.

---

## 📋 Testes implementados

### 1. Teste de Login
- **Objetivo:** Garantir que o fluxo de autenticação funcione corretamente.
- **Cenários testados:**
  - Login com credenciais válidas.
  - Login com credenciais inválidas (mensagem de erro exibida).
  - Validação de campos obrigatórios (usuário e senha).
- **Resultado esperado:** Usuário autenticado deve ser redirecionado para a página inicial da aplicação.

---

### 2. Teste de Home
- **Objetivo:** Validar os principais elementos e funcionalidades da página inicial.
- **Cenários testados:**
  - Exibição correta da lista de Pokémons.
  - Navegação entre componentes da página.
  - Verificação de elementos visuais e botões principais.
- **Resultado esperado:** Página inicial carregada com todos os Pokémons visíveis e interações funcionando conforme esperado.

---

## 🚀 Passo a passo para executar os testes

1. **Clonar o repositório:**
   ```bash


   2. 	Instalar as dependências:

3. 	Abrir o Cypress em modo interativo:

• 	Selecione o arquivo de teste desejado ( ou ).
• 	O Cypress abrirá uma janela mostrando a execução passo a passo.
4. 	Executar os testes em modo headless (sem interface gráfica):

• 	Os resultados aparecerão diretamente no terminal.
• 	Um relatório em vídeo e screenshots será gerado automaticamente na pasta  e .

📂 Estrutura de diretórios


🔄 Integração Contínua (CI/CD)
Os testes podem ser integrados ao GitHub Actions para rodarem automaticamente a cada push ou pull request.
Exemplo de workflow ():


✅ Conclusão
Os testes garantem que as principais funcionalidades da aplicação (login e home) estejam funcionando corretamente, oferecendo maior segurança e confiabilidade ao projeto dos Pokémons.
Com a integração contínua, o time pode ter feedback rápido sobre a qualidade do código e evitar regressões.

👨‍💻 Desenvolvido por Gustavo Leal

   git clone https://github.com/seu-usuario/projeto-pokemons.git
   cd projeto-pokemons


   
