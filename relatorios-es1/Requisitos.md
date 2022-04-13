# Requisitos - Fórum
## Introdução

### Declaração do problema
O problema da falta de mapeamento de seres invasores afeta pesquisadores e estudantes, e pode ser visto pela dificuldade em mensurar o impacto ambiental causado por tais seres, dificultando assim a elaboração de soluções que possam vir a tratar problemas ambientais em uma determinada região.


### Intenção do produto
Para pesquisadores e estudantes que precisam identificar se um ser específico é invasor ou não de uma determinada área. O FÓRUM é um site de biologia que procura mapear os seres invasores de um determinado lugar. Nosso software procura ser informativo de maneira que o usuário consiga visualizar facilmente os seres que não fazem parte de determinado ambiente, além de possibilitar que qualquer pessoa possa ajudar a comunidade fazendo postagens para identificar novos invasores.


### Proposta de valor e segmento de clientes
Nossa proposta de valor é oferecer um software capaz de mapear seres invasores de regiões específicas, possibilitando uma visualização destes dados por parte do usuário. A partir disso, nosso segmento de clientes se afunila para focar em pesquisadores e estudantes. Acreditamos que não haja nenhum produto parecido com o nosso atualmente, sendo uma solução inovadora para a área.


## Partes interessadas
#### Clientes
Pesquisadores seniores da área de biologia: utilizariam o software para contribuir e facilitar suas pesquisas, assim como forma de auxílio no aprendizado de seus orientandos (graduandos da área). 

Estudantes universitários: utilizariam o software para auxiliar seus estudos e pesquisas.

#### Inspirações
iNaturalist: é uma rede social que conecta naturalistas, biólogos e entusiastas com o objetivo de mapear a biodiversidade no planeta através do compartilhamento de observações. A princípio nos inspiramos em como são feitas suas publicações, com comentários e geolocalização.

#### Desenvolvedores
Grupo de estudantes de ciência da computação: responsáveis pelo planejamento e desenvolvimento do software.


## Requisitos funcionais (recursos)
1. O usuário pode fazer uma postagem contendo uma imagem, geolocalização e descrição do espécime (como reino, filo, classe, ordem, família, gênero e espécie - chamaremos de RFCOFGE a partir de agora);
2. O usuário pode buscar por seres invasores a partir de uma determinada geolocalização (com determinado raio), com filtros de descrição do ser (RFCOFGE);
3. O usuário pode contestar a veracidade de qualquer postagem;
4. O usuário pode fazer comentários em qualquer postagem;
5. O usuário pode editar a própria postagem;
6. O sistema deve ter um esquema de perfis de usuário;
7. O usuário deve ter acesso à uma lista com suas postagens;
8. O usuário pode editar suas informações do perfil;
9. O sistema deve possuir perfis de moderação;
10. O moderador pode excluir postagens de outros usuários.


## Requisitos não funcionais
- Adaptabilidade: Possibilita o manuseio do site por parte do usuário em plataformas móveis, desse modo facilita o uso em campo por pesquisadores. A métrica seria a responsividade em diferentes dispositivos;
- Facilidade de uso: O site deve ser flexível, intuitivo e consistente, seguindo as heurísticas de Nielsen.


## MVP
Nosso MVP será um sistema web no qual uma pessoa é capaz de compartilhar um ser invasor encontrado por meio de uma postagem com imagem, geolocalização e descrição que estará aberta para discussão. Será testado via implementação. Validaremos se as pessoas (segmento de clientes) estão interessadas em uma plataforma de compartilhamento de informações sobre seres invasores gerenciado pelos próprios usuários, e na disponibilização destas informações para o auxilio em estudos e pesquisas (o que demanda confiabilidade).


## Histórias de usuários  
**1.1** Como usuário, gostaria de anexar uma imagem à minha postagem para que facilite a visualização do ser, além de facilitar a discussão.\
**1.2** Como usuário, gostaria de anexar uma geolocalização à minha postagem para que seja possível identificar se o ser é invasor daquela área específica.\
**1.3** Como usuário, gostaria de anexar uma descrição do espécime (RFCOFGE) à minha postagem para que seja possível identificar o ser mais facilmente e verificar se ele é um invasor.\
**2.1** Como usuário, gostaria de buscar por seres invasores de uma localização específica para me auxiliar em minhas pesquisas.\
**2.2** Como usuário, gostaria de definir um raio de busca em meus filtros de busca para me certificar que estou abordando apenas a área que estou interessado.\
**2.3** Como usuário, gostaria de especificar qual ser estou buscando a partir de filtros (como reino, filo, classe, ordem, família, gênero e espécie) para encontrar apenas os seres que tenho interesse.\
**3.1** Como usuário, gostaria de contestar uma postagem que acredito não estar correta para que não haja dados incorretos no site.\
**4.1** Como usuário, gostaria de comentar em uma postagem para contribuir com mais dados (RFCOFGE), caso esteja faltando, para uma descrição mais completa.\
**4.2** Como usuário, gostaria de comentar em uma postagem para explicar o motivo de tê-la contestado (3.1).\
**5.1** Como usuário, gostaria de editar minha postagem para corrigir ou adicionar mais dados.




## Issue Tracker/Kanban
https://github.com/alescrocaro/forum-botanica/projects/1
![Screenshot - Kanban](https://i.imgur.com/PLiRRHa.png)
