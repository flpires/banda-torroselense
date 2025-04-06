# Tutorial - Desenvolvimento do Site da Banda Torroselense

Este documento registra os principais passos e comandos utilizados durante o desenvolvimento do site.

## 1. Criação do Projeto
- Projeto criado usando React + Vite
- Localização: `C:\Users\Utilizador\CascadeProjects\banda-torroselense`

## 2. Estrutura do Projeto
```
banda-torroselense/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   └── Navbar.jsx  # Barra de navegação
│   ├── pages/         # Páginas do site
│   │   ├── Home.jsx   # Página inicial
│   │   ├── About.jsx  # Página Sobre
│   │   ├── Events.jsx # Página de Eventos
│   │   └── Contact.jsx # Página de Contato
│   └── main.jsx       # Ponto de entrada
```

## 3. Comandos Principais

### Iniciar o Servidor de Desenvolvimento
```bash
cd C:\Users\Utilizador\CascadeProjects\banda-torroselense
npm run dev
```
O site ficará disponível em: http://localhost:5173

### Parar o Servidor
Pressione `Ctrl + C` no terminal ou feche a janela do terminal

## 4. GitHub

### Repositório
- URL: https://github.com/flpires/banda-torroselense

### Comandos Git Utilizados
```bash
# Inicializar repositório
git init

# Adicionar alterações
git add .

# Criar commit
git commit -m "Mensagem descritiva"

# Enviar para GitHub
git push
```

## 5. Gestão de Conteúdo

### Atualizar Eventos
Editar arquivo: `src/pages/Events.jsx`
```javascript
const events = [
  {
    title: 'Nome do Evento',
    date: 'Data do Evento',
    location: 'Local',
    description: 'Descrição'
  }
  // Adicionar mais eventos aqui
];
```

### Atualizar Informações de Contato
Editar arquivo: `src/pages/Contact.jsx`

### Atualizar Página Inicial
Editar arquivo: `src/pages/Home.jsx`

## 6. Documentação Disponível
- `README.md`: Instruções básicas do projeto
- `DOCUMENTATION.md`: Documentação técnica detalhada
- `TUTORIAL.md`: Este arquivo com o passo a passo da criação

## 7. Próximos Passos Sugeridos
1. Adicionar mais conteúdo às páginas
2. Personalizar o design
3. Adicionar fotos da banda
4. Implementar o formulário de contato
5. Adicionar seção de notícias

## 8. Comandos Git para Desenvolvimento Contínuo
```bash
# Antes de começar a trabalhar
git pull

# Após fazer alterações
git add .
git commit -m "Descreva suas alterações"
git push
```

## Recursos Adicionais
- Documentação React: https://react.dev
- Documentação Material-UI: https://mui.com
- Documentação Git: https://git-scm.com/doc
