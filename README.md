# Documentação do E-commerce de Veículos

- Este é um aplicativo de e-commerce de veículos front end desenvolvido com Vite e TypeScript. Ele faz uso de uma variedade de tecnologias, incluindo React, Axios, Polished, React Hook Form, React Icons, React Responsive, React Switch, React Toastify e Styled Components.

- A seguir, são fornecidas informações importantes sobre como instalar e executar o aplicativo, além de detalhes sobre sua estrutura de arquivos e como trabalhar com ele.

## Instalação

### Para instalar o aplicativo, siga as etapas abaixo:

1. Clone o repositório do GitHub usando o seguinte comando:

```bash
git clone https://github.com/Vehicle-E-commerce/vehicle_ecommerce_client.git
```

2. Navegue para o diretório raiz do projeto usando o seguinte comando:

```bash
cd vehicle_ecommerce_client
```

3. Instale as dependências do projeto usando o seguinte comando:

```
npm install
```

## Execução

Para executar o aplicativo, siga as etapas abaixo:

1. Navegue para o diretório raiz do projeto.

2. Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
npm run dev
```

3. O aplicativo será executado em http://localhost:3000.

## Tecnologias utilizadas

Este aplicativo utiliza as seguintes tecnologias:

- Axios: biblioteca JavaScript que permite enviar solicitações HTTP do navegador.
- Polished: biblioteca de ferramentas para trabalhar com cores em CSS.
- React: biblioteca JavaScript para construir interfaces de usuário.
- React DOM: biblioteca para manipulação da árvore de elementos DOM gerada pelo React.
- React Hook Form: biblioteca para gerenciamento de formulários no React.
- React Icons: biblioteca de ícones para o React.
- React Responsive: biblioteca para renderização condicional baseada em largura de tela.
- React Switch: componente React para interruptores de alternância.
- React Toastify: biblioteca de notificações para o React.
- Styled Components: biblioteca para estilização de componentes React.

## Estrutura de arquivos

A seguir está uma visão geral da estrutura de arquivos do aplicativo:

```php

vehicle_ecommerce_client/
├── node_modules/
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── api/
│ │ └── ... # arquivos relacionados à comunicação com o backend
│ ├── components/
│ │ └── ... # arquivos relacionados a componentes React reutilizáveis
│ ├── constants/
│ │ └── ... # arquivos de constantes utilizados no aplicativo
│ ├── pages/
│ │ └── ... # arquivos relacionados às páginas do aplicativo
│ ├── styles/
│ │ ├── global.ts
│ │ └── ... # arquivos relacionados a estilos do aplicativo
│ ├── types/
│ │ └── ... # arquivos relacionados a tipos utilizados no aplicativo
│ ├── utils/
│ │ └── ... # arquivos relacionados a funções utilitárias do aplicativo
│ ├── App.tsx
│ ├── index.tsx
│ └── react-app-env.d.ts
├── .gitignore
```
