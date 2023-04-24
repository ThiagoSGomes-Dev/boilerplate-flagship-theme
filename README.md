# Boilerplate Flagship Theme

Este é um modelo de tema para WordPress baseado em React e estilizado com Tailwind CSS. Este tema utiliza a API REST do WordPress para obter e exibir conteúdo dinâmico.

## Projeto em Construção 

Este projeto está em fase de desenvolvimento e está aberto a sugestões e melhorias para aprimoramento. Se você encontrar algum problema ou tiver uma sugestão, sinta-se à vontade para abrir uma issue ou pull request. Juntos podemos fazer desse projeto algo incrível!

## Instalação

1.  Clone o repositório em sua pasta de temas do WordPress:
    
    ```bash
       git clone https://github.com/seu-usuario/boilerplate-flagship-theme.git wp-content/themes/
    ```

2.  Instale as dependências do projeto:
    
    ```bash
       npm install
    ```
    
## Scripts

    ```bash
       npm run preview
    ```

Inicia o BrowserSync e os processos de sincronização de arquivos, inicia o servidor de desenvolvimento do WordPress e assiste as alterações nos arquivos do Tailwind CSS.

    ```bash
        npm run sync
    ```

Inicia o BrowserSync e os processos de sincronização de arquivos.

    ```bash
        npm run buildwp
    ```

Compila os arquivos JavaScript do tema para a pasta `build/`.

    ```bash
        npm run build
    ```

Compila os arquivos JavaScript e CSS do tema para a pasta `build/`.

   ```bash
       npm run wpstart
   ```

Inicia o servidor de desenvolvimento do WordPress.

   ```bash
       npm run start
   ```

Inicia o servidor de desenvolvimento do WordPress e assiste as alterações nos arquivos do Tailwind CSS.

   ```bash
       npm run tailwindbuild
   ```

Compila os arquivos CSS do Tailwind para a pasta `build/`.

   ```bash
       npm run tailwindwatch
   ```

Assiste as alterações nos arquivos do Tailwind CSS e compila os arquivos para a pasta `build/`.

   ```bash
       npm run test
   ```

Exibe uma mensagem de erro informando que nenhum teste foi especificado.

## Dependências de Desenvolvimento

-   [@tailwindcss/typography](https://www.npmjs.com/package/@tailwindcss/typography)
-   [@wordpress/scripts](https://www.npmjs.com/package/@wordpress/scripts)
-   [browser-sync](https://www.npmjs.com/package/browser-sync)
-   [npm-run-all](https://www.npmjs.com/package/npm-run-all)
-   [tailwindcss](https://www.npmjs.com/package/tailwindcss)

## Autor

Criado por ThiagoSGomes-Dev. Este projeto está licenciado sob a Licença [MIT](https://chat.openai.com/LICENSE).