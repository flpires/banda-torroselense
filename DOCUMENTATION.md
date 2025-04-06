# Documentação Técnica - Website Banda Torroselense Estrela D'Alva

## Visão Geral
Este documento contém informações técnicas sobre a estrutura, gestão e manutenção do website da Banda Torroselense Estrela D'Alva.

## Tecnologias Utilizadas
- React 18.2.0
- Material-UI (MUI) 5.13.0
- React Router DOM 6.11.1
- Vite 4.3.5

## Estrutura do Projeto
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
│   └── main.jsx       # Ponto de entrada da aplicação
├── index.html         # HTML principal
├── vite.config.js     # Configuração do Vite
└── package.json       # Dependências e scripts
```

## Guia de Manutenção

### Como Iniciar o Projeto
1. Navegue até a pasta do projeto:
   ```bash
   cd C:\Users\Utilizador\CascadeProjects\banda-torroselense
   ```

2. Instale as dependências (primeira vez ou após atualizar dependências):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse o site em: http://localhost:5173

### Como Atualizar Conteúdo

#### 1. Atualizar Eventos
Arquivo: `src/pages/Events.jsx`

Estrutura de um evento:
```javascript
{
  title: 'Nome do Evento',
  date: 'Data do Evento',
  location: 'Local do Evento',
  description: 'Descrição do Evento'
}
```

Para adicionar um novo evento, adicione um novo objeto ao array `events`.

#### 2. Atualizar Informações de Contato
Arquivo: `src/pages/Contact.jsx`

Localize a seção:
```jsx
<Typography paragraph>
  <strong>Endereço:</strong><br />
  Rua Principal, nº 123<br />
  Torroselo, Portugal
</Typography>
<Typography paragraph>
  <strong>Email:</strong><br />
  info@bandatorroselense.pt
</Typography>
<Typography paragraph>
  <strong>Telefone:</strong><br />
  +351 123 456 789
</Typography>
```

#### 3. Atualizar História/Sobre
Arquivo: `src/pages/About.jsx`

Edite os textos dentro das tags `Typography` para atualizar o conteúdo.

### Como Publicar Alterações

1. Após fazer as alterações, crie uma versão de produção:
   ```bash
   npm run build
   ```

2. A pasta `dist` será criada contendo os arquivos otimizados para produção
3. Faça upload dos arquivos da pasta `dist` para o servidor de hospedagem

### Dicas de Manutenção

1. **Backup**: Sempre faça backup dos arquivos antes de fazer alterações significativas
2. **Teste Local**: Sempre teste as alterações localmente antes de publicar
3. **Imagens**: 
   - Coloque novas imagens na pasta `public`
   - Use formatos otimizados (jpg para fotos, png para logos)
   - Comprima as imagens antes de usar

### Solução de Problemas

1. **Servidor não inicia**:
   - Verifique se está na pasta correta
   - Tente `npm install` novamente
   - Delete a pasta `node_modules` e execute `npm install`

2. **Alterações não aparecem**:
   - Verifique se salvou o arquivo
   - Recarregue a página do navegador
   - Reinicie o servidor de desenvolvimento

## Contatos para Suporte
- Desenvolvedor: [Adicionar contato]
- Responsável pela manutenção: [Adicionar contato]
