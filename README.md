# Nome do Software

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
- Banco de dados: PostgreSQL.


## Instruções para download e execução do projeto em qualquer computador
### Dependências necessárias para executar o projeto:
- React;
- Node;
- Sqlite3.


### para rodar o backend:

```
cd backend
npm install
```
#### para inicializar o sqlite
```
npx knex migrate:latest
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
Ainda não decidido.
