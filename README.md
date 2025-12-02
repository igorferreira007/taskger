# Taskger - Gerenciador de Tarefas em Equipe

Uma aplicação web moderna para gerenciar tarefas e colaboração em equipe, desenvolvida com React, TypeScript e Tailwind CSS.

![alt text](image.png)

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Sistema de login e registro seguro
- **Gerenciamento de Tarefas**: Criar, editar, visualizar e deletar tarefas
- **Histórico de Tarefas**: Acompanhamento completo de alterações nas tarefas
- **Gerenciamento de Equipes**: Criar e gerenciar equipes de trabalho
- **Controle de Membros**: Adicionar e gerenciar membros das equipes
- **Status de Tarefas**: Visualizar e atualizar o status das tarefas
- **Perfil de Usuário**: Gerenciar informações do perfil
- **Interface Responsiva**: Design adaptado para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework**: React 19 com TypeScript
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS + Radix UI
- **Roteamento**: React Router v7
- **Requisições HTTP**: Axios
- **Validação**: Zod
- **Ícones**: Lucide React e React Icons
- **UI Components**: Radix UI (Accordion, Dialog)
- **Linting**: ESLint com TypeScript ESLint

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/igorferreira007/taskger
cd taskger-web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.development` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3333
```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

## 🔐 Autenticação

A aplicação utiliza um contexto de autenticação (`AuthContext`) para gerenciar o estado de login dos usuários. O hook `useAuth` fornece acesso fácil aos dados de autenticação em qualquer componente.

### Rotas Protegidas

- **AuthRoutes**: Acessíveis apenas para usuários não autenticados (SignIn, SignUp)
- **AdminRoutes**: Restritas a administradores
- **MemberRoutes**: Acessíveis a membros da equipe

### Testando Diferentes Níveis de Acesso

Para testar a aplicação em produção, você pode:

1. **Criar uma nova conta** - Registre-se normalmente para obter acesso de nível **Membro**
2. **Usar conta de Admin** - Acesse as funcionalidades de administrador com:
   - **Email**: `admin@email.com`
   - **Senha**: `123456`

Isso permite testar todos os recursos disponíveis para diferentes níveis de acesso.

### Permissões por Nível de Acesso

#### 👤 Membro

Um usuário com nível de acesso **Membro** pode:

- ✅ Visualizar tarefas atribuídas
- ✅ Atualizar status de suas tarefas
- ✅ Visualizar histórico de tarefas
- ✅ Ver detalhes das tarefas
- ✅ Visualizar seu perfil de usuário
- ✅ Editar informações do perfil
- ✅ Visualizar equipes das quais é membro

#### 🔑 Admin

Um usuário com nível de acesso **Admin** pode fazer tudo que um Membro faz, mais:

- ✅ Criar novas tarefas
- ✅ Editar todas as tarefas
- ✅ Deletar tarefas
- ✅ Criar novas equipes
- ✅ Gerenciar equipes existentes
- ✅ Adicionar membros às equipes
- ✅ Remover membros das equipes
- ✅ Visualizar todos os membros do sistema
- ✅ Acessar painel administrativo completo

## 🎨 Estilização

O projeto utiliza **Tailwind CSS v4** para estilização. Os componentes são construídos com:

- Classes Tailwind para utility-first styling
- `class-variance-authority` para variantes de componentes
- `clsx` para gerenciar classes condicionais
- `tailwind-merge` para mesclar classes Tailwind

## 🔄 Fluxo de Dados

1. **AuthContext**: Gerencia estado global de autenticação
2. **API Service**: Comunicação com backend via Axios
3. **Componentes**: Consomem dados do contexto e fazem requisições à API
4. **Router**: Controla navegação com React Router

### Aplicação em Produção

A aplicação está disponível em produção em: **https://taskger.vercel.app/**

Você pode acessar diretamente para testar a aplicação sem necessidade de instalação local.

## 📝 Variáveis de Ambiente

| Variável       | Descrição               |
| -------------- | ----------------------- |
| `VITE_API_URL` | URL base da API backend |

## 📚 Repositórios Relacionados

- **Backend**: https://github.com/igorferreira007/gerenciador-de-tarefas
