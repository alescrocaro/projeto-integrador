# Invasores

## Descrição do software
Este software tem como objetivo principal ajudar pesquisadores e estudantes de biologia a mapear seres invasores de uma determinada área. 
Uma pessoa qualquer pode postar a foto de um possível ser invasor, então uma outra pessoa pode ajudá-la a determinar se realmente é; ou o próprio usuário pode fazer uma postagem já marcando aquele ser como invasor, a postagem ficará aberta para discussão entre usuários para chegarem em um consenso. Além disso, também há a possibilidade do usuário visualizar os dados destes seres para uma área específica em um mapa.


## Principais requisitos (funcionalidades)
Para visualizar as funcionalidades definidas no início do projeto, visualize [este arquivo](./firstRequirements.md)


## Instruções para download e execução do projeto em qualquer computador
### Dependências necessárias para executar o projeto:
- React;
- Node;
- Docker
- Docker compose


## Instalação
Você tem duas opções:
### Utilizar as imagens docker diretamente (recomendado para não desenvolvedores)
```bash
[forum-invasores] $ docker compose up -d
```

Agora basta acessar a URL definida (padrão 0.0.0.0:3000).


### Instalar cada componente (recomendado para desenvolvedores) 
#### Configurando o banco de dados

É necessário ter instalado o docker na sua máquina. Após a instalação do docker é preciso instalar o docker compose. Caso esteja usando windows, a instalação do docker compose já vem junto com o docker.

```
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.4.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
```
De permissão do binário para seu usário
```
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose
```
teste para ver se a instalação foi bem sucedida
```
docker compose version
```
Vá até a pasta do backend e rode o seguinte comando
```
cd backend
sudo chmod 666 /var/run/docker.sock
docker compose up -d
```

Para visualizar o banco de dados você pode utilizar o software de sua preferência, as credenciais são:
usuário:admin@admin.com
senha:123456
crie um servidor e conecte no host pgsql-server na porta 5432. As credencias do banco são:
usuário:admin 
senha:123456

após criar o banco, vá para a pasta do backend e rode o comando:

```
cd backend
npm install
npx sequelize-cli db:migrate
```

#### Executar o backend:

```
cd backend
npm install
npm run dev
```

#### Executar o frontend:
```
cd frontend
npm install
npm start
```
