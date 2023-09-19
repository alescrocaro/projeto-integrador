# Invasores

## Descrição do repositório
Projeto desenvolvido para as matérias projeto integrador e engenharia de software 1

## Descrição do software
O software tem como objetivo principal ajudar pesquisadores e estudantes de biologia a mapear seres invasores de um determinada área. Para tanto, uma pessoa qualquer pode postar a foto de um possível ser invasor, e então uma outra pessoa pode ajudá-la a determinar, ou o usuário pode até mesmo fazer uma postagem já marcando aquele ser como invasor (para ir direto ao banco de dados). Além disso, também há a possibilidade do usuário visualizar os dados destes seres para uma área específica.


## Principais requisitos (funcionalidades)
1. O usuário pode fazer uma postagem contendo uma imagem, geolocalização e descrição do espécime (como reino, filo, classe, ordem, família, gênero e espécie - chamaremos de RFCOFGE a partir de agora);
2. O usuário pode buscar por seres invasores a partir de uma determinada geolocalização (com determinado raio), com filtros de descrição do ser (RFCOFGE);
3. O usuário pode contestar a veracidade de qualquer postagem;
4. O usuário pode fazer comentários em qualquer postagem;
5. O usuário pode editar a própria postagem;
6. O usuário pode colocar uma hashtag específica em sua postagem; 
7. O sistema deve ter um esquema de perfis de usuário;
8. O usuário deve ter acesso à uma lista com suas postagens;
9. O usuário pode editar suas informações do perfil;
10. O sistema deve possuir perfis de moderação;
11. O moderador pode excluir postagens de outros usuários.


## Dependências (linguagem de desenvolvimento, frameworks usados, banco de dados, pacotes de software, etc...)
- Frontend: React;
- Backend: Node;
- Banco de dados: PostgreSQL, Postgis.


## Instruções para download e execução do projeto em qualquer computador
### Dependências necessárias para executar o projeto:
- React;
- Node;
- Docker

## Para utilizar as imagens docker diretamente
```bash
cd backend
docker compose up -d

cd frontend
docker compose up -d
```

Agora basta acessar a URL definida (padrão localhost:3000).


## para instalar o banco de dados

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

agora abra o browser em localhost:8080 para acessar o pgadmin4. As credencias do pgadmin4 são
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

### para rodar o backend:

```
cd backend
npm install
npm run dev
```

### para rodar o frontend:
```
cd frontend
npm install
npm start
```

## Contato dos membros da equipe
**Alexandre:**
  - alescrocaro@gmail.com
  
**Caio Miglioli:**
  - caiomiglioli@gmail.com

**Carlos Miguel:**
  - cmiguelsantosfilho@gmail.com

**Leonardo Omori Farias:**
  - leonardoomori99@gmail.com


## Papéis dos membros da equipe (Product Owner, Scrum Master, Desenvolvedores)
Todos os membros exerceram todos papéis, rotacionando a cada sprint.
