# Glipearte Pegue e Monte

Site institucional premium para a empresa **Glipearte Pegue e Monte**, especializada em aluguel de artigos para festas em Fortaleza - CE, com o conceito "pegue e monte": o cliente escolhe, monta a própria festa e devolve as peças.

> **Slogan:** Festas incríveis começam aqui  
> **Criado e desenvolvido por:** Pedro Correia Lopes Filho

---

## Índice

1. [Resumo do Projeto](#resumo-do-projeto)
2. [Estrutura de Pastas](#estrutura-de-pastas)
3. [Páginas e Funcionalidades](#páginas-e-funcionalidades)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Design e Acessibilidade](#design-e-acessibilidade)
6. [SEO e Performance](#seo-e-performance)
7. [Como Executar Localmente](#como-executar-localmente)
8. [Deploy/Publicação](#deploypublicação)
9. [Limitações e Próximos Passos](#limitações-e-próximos-passos)

---

## Resumo do Projeto

O projeto entrega um site institucional moderno, responsivo e otimizado para conversão, com foco em:

- Apresentar o conceito de **pegue e monte** de forma clara e persuasiva.
- Converter visitantes em leads por meio de CTAs, WhatsApp, formulário de contato e agendamento.
- Demonstrar portfólio, serviços, depoimentos e diferenciais da marca.
- Oferecer área de cliente simulada com login e cadastro (client-side).
- Respeitar boas práticas de acessibilidade (WCAG 2.1 AA) e performance.

---

## Estrutura de Pastas

```
/
├── index.html                  # Página inicial
├── pages/
│   ├── sobre.html              # História, missão, visão e valores
│   ├── servicos.html           # Catálogo de kits e serviços
│   ├── portfolio.html          # Portfólio de festas
│   ├── galeria.html            # Galeria de fotos com lightbox
│   ├── blog.html               # Listagem de artigos
│   ├── blog-post.html          # Página interna de artigo
│   ├── faq.html                # Perguntas frequentes
│   ├── depoimentos.html        # Depoimentos de clientes
│   ├── contato.html            # Formulário, mapa e dados de contato
│   ├── agendamento.html        # Reserva com calendário
│   ├── login.html              # Área do cliente - login
│   ├── cadastro.html           # Área do cliente - cadastro
│   ├── area-cliente.html       # Painel do cliente
│   ├── privacidade.html        # Política de privacidade
│   └── termos.html             # Termos de uso
├── css/
│   ├── main.css                # Estilos principais
│   └── animations.css            # Animações e efeitos
├── js/
│   ├── main.js                 # Menu, reveal, carrossel, filtros
│   ├── chatbot.js              # Chat de atendimento simulado
│   ├── forms.js                # Validação de formulários
│   ├── gallery.js              # Lightbox da galeria
│   ├── services.js             # Filtros e busca de serviços
│   ├── blog.js                 # Filtros e busca do blog
│   ├── faq.js                  # Busca e accordion do FAQ
│   ├── agendamento.js          # Calendário e resumo do agendamento
│   └── auth.js                 # Simulação de login/cadastro
├── images/
│   ├── logo-glipearte.svg      # Logo principal vetorial
│   ├── hero-pattern.svg        # Padrão de fundo do hero
│   ├── placeholder.svg         # Placeholder genérico
│   └── ...                     # Imagens de produtos, portfólio, blog, etc.
├── sitemap.xml                 # Sitemap para SEO
└── robots.txt                  # Instruções para robôs de busca
```

---

## Páginas e Funcionalidades

### Páginas públicas

| Página | Descrição |
|--------|-----------|
| `/index.html` | Home com hero, proposta de valor, serviços, diferenciais, portfólio e depoimentos. |
| `/pages/sobre.html` | História, missão, visão, valores e equipe. |
| `/pages/servicos.html` | Listagem de kits (infantil, chás, adulto, mesversário) com busca e filtros. |
| `/pages/portfolio.html` | Grid de festas reais com filtros por categoria. |
| `/pages/galeria.html` | Galeria de fotos com lightbox acessível. |
| `/pages/blog.html` | Artigos com categorias, tags, busca e paginação. |
| `/pages/blog-post.html` | Página interna de artigo. |
| `/pages/faq.html` | Perguntas frequentes com busca e accordion. |
| `/pages/depoimentos.html` | Depoimentos de clientes e formulário para envio. |
| `/pages/contato.html` | Formulário de contato, mapa, telefone, e-mail e redes sociais. |
| `/pages/agendamento.html` | Formulário de reserva com calendário (Flatpickr). |

### Área do cliente (simulada)

| Página | Descrição |
|--------|-----------|
| `/pages/login.html` | Tela de login. |
| `/pages/cadastro.html` | Tela de cadastro. |
| `/pages/area-cliente.html` | Painel do cliente com dados e ações rápidas. |

> **Aviso:** O login e cadastro são simulados no lado do cliente (localStorage), sem backend real. Não devem ser usados em produção para dados sensíveis.

### Funcionalidades implementadas

- ✅ Menu responsivo mobile (hambúrgur acessível)
- ✅ Navegação por teclado e skip link
- ✅ Animações suaves com respeito a `prefers-reduced-motion`
- ✅ Carrossel de depoimentos (Swiper.js)
- ✅ Chat de atendimento simulado
- ✅ Formulários com validação em tempo real
- ✅ Filtros e busca de serviços, portfólio, blog e FAQ
- ✅ Galeria com lightbox navegável por teclado
- ✅ Calendário de agendamento com Flatpickr
- ✅ Área do cliente simulada (localStorage)
- ✅ Integração com WhatsApp e redes sociais
- ✅ Mapa do Google Maps
- ✅ Breadcrumbs, SEO, schema markup e Open Graph

### Funcionalidades solicitadas mas não implementadas (requerem backend)

- ❌ Sistema de login seguro com backend
- ❌ Sistema de pagamentos
- ❌ Calendário de disponibilidade em tempo real
- ❌ Agendamentos persistidos em banco de dados
- ❌ Upload de arquivos
- ❌ Busca avançada em base de dados
- ❌ Inteligência Artificial
- ❌ Painel administrativo real
- ❌ Chat online com atendente humano

Essas funcionalidades exigem servidor, banco de dados e APIs de pagamento, que não estão no escopo de um site estático. São indicadas como próximos passos na seção de evolução.

---

## Tecnologias Utilizadas

### Frontend

- HTML5 semântico
- CSS3 (variáveis, grid, flexbox, media queries)
- JavaScript vanilla
- Swiper.js (carrossel)
- Flatpickr (calendário)
- Google Fonts (Inter)

### Backend / Banco de dados

Não aplicável nesta versão estática. O projeto foi preparado para futura integração com:

- Node.js / PHP / Laravel / Python / Django / .NET (conforme solicitado)
- MySQL / PostgreSQL / MongoDB (conforme solicitado)

> Para sites estáticos, recomenda-se utilizar a API RESTful de tabelas disponível na plataforma para persistência simples de leads, depoimentos e agendamentos, caso desejado.

---

## Design e Acessibilidade

- **Paleta:** `#f0d890` (destaque), `#d8d8d8`, `#c0c0c0`, `#1a1a1a` (texto), `#faf9f6` (fundo).
- **Tipografia:** Inter, com hierarquia clara de H1 a H6.
- **Mobile-first:** layouts adaptados para 320px, 768px, 1024px e 1440px+.
- **Acessibilidade:**
  - Skip link para conteúdo principal
  - ARIA labels, roles e estados
  - Foco visível e navegação por teclado
  - Contraste adequado
  - Semântica HTML5
  - Respeito a `prefers-reduced-motion`

---

## SEO e Performance

- Meta tags completas (title, description, keywords, author, viewport, robots)
- Open Graph e Twitter Cards
- Schema Markup JSON-LD (LocalBusiness, Organization, WebSite, AboutPage, FAQPage, Article)
- URLs amigáveis e canônicas
- Sitemap.xml e robots.txt
- Lazy loading em imagens
- Imagens otimizadas em SVG/placeholder
- Scripts carregados com `defer`
- CSS modular e comentado

---

## Como Executar Localmente

1. Clone ou baixe o projeto.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Para uma experiência completa, recomenda-se servir via servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

4. Acesse `http://localhost:8000`.

---

## Deploy/Publicação

Para publicar o site e torná-lo acessível online, vá até a **aba Publish** na plataforma. O deploy pode ser feito com um clique, gerando a URL pública do projeto.

Caso utilize outro serviço de hospedagem (Netlify, Vercel, GitHub Pages, etc.), faça upload de todos os arquivos e ajuste a URL base nas meta tags.

---

## Limitações e Próximos Passos

### Limitações atuais

- As imagens são placeholders ilustrativos. Recomenda-se substituir por fotos reais da Glipearte.
- O sistema de login/cadastro é simulado e não possui criptografia ou backend.
- Não há processamento de pagamentos, upload de arquivos ou persistência de agendamentos.
- O chat online é um bot de respostas pré-definidas.

### Recomendações para evolução

1. Substituir placeholders por fotografias profissionais das festas e produtos.
2. Implementar backend real para autenticação, agendamentos e pagamentos.
3. Integrar gateway de pagamento (Stripe, PagSeguro, Mercado Pago).
4. Criar painel administrativo para gerenciar produtos, pedidos e clientes.
5. Implementar upload de fotos de portfólio e depoimentos.
6. Adicionar funcionalidade de IA para recomendação de kits com base no tema/ocasião.
7. Configurar envio real de e-mails a partir dos formulários (Formspree, EmailJS, backend próprio).

---

## Contato

- **Empresa:** Glipearte Pegue e Monte
- **Localização:** Fortaleza - CE
- **E-mail:** contato@glipeartepegueemonte.com.br
- **Desenvolvedor:** Pedro Correia Lopes Filho
