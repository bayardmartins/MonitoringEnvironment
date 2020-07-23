## Instruções
Depois de baixar/clonar o repositório, através do prompt de comando acessar os diretórios **client**, **MonitorService** e **RegisterAPI** e rodar em cada um deles

`npm install`

para instalar os pacotes JavaScript utilizados no lado cliente da aplicação.

Cada um dos diretórios tem um arquivo **config.json** com as configurações customizáveis de cada aplicação. No **client** está na pasta src, nos demais, está na raiz.
Neste arquivo você pode alterar a porta e host do serviço se necessário.

\MonitorService\config.json\qtSecMustWait define o intervalo (em milissegundos) em que o serviço deve monitorar os endereços.

### Em ambiente de Desenvolvimento
Execute em cada um dos três diretórios o comando:

`npm start`

Caso a aplicação web não inicie automaticamente acesse através de http://localhost:3333

### Em ambiente de Produção (opcional)
Caso queira rodar o React otimizado para produção execute na pasta **client**

`npm build`

Siga as instruções do prompt de comando.

Execute o comando `npm start` em **MonitorService** e **RegisterAPI**

## Instruções de uso

Adicione clientes e endereços a serem monitorados.
Consulte lista de clientes e endereço.
Busque clientes e endereços por ID.
Consulte o log de monitoramentos realizados.