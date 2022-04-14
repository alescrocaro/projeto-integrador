# Análise
## Descrição do sistema
&emsp; O problema da falta de mapeamento de seres invasores afeta **pesquisadores e estudantes (usuários)**, e pode ser visto pela dificuldade em mensurar o impacto ambiental causado por tais seres, dificultando assim a elaboração de soluções que possam vir a tratar problemas ambientais em uma determinada região. O FÓRUM é um site de biologia que procura mapear os _seres invasores_ de um _determinado lugar_. Nosso software procura ser informativo de maneira que o usuário consiga visualizar facilmente os seres que não fazem parte de determinado ambiente, além de possibilitar que qualquer pessoa possa ajudar a comunidade fazendo **postagens** para identificar novos invasores.

&emsp; No sistema o <ins>**usuário** poderá fazer **postagens**</ins> sobre os **seres invasores**, uma _descrição_, informações sobre a _classificação científica_ do ser em questão, **imagem** (<ins>1 por postagem</ins>, no momento), sua _geolocalização_ e _data do avistamento_. Essa postagem poderá ser vista a partir de uma pesquisa por geolocalização com filtros (como reino, filo, classe, ordem, família, gênero e espécie - classificação científica). Os usuários também podem editar suas postagens.
&emsp; <ins>O usuário poderá fazer **comentários**</ins> de dois _tipos_: normal ou contestação. Ele poderá contestar uma postagem que não está correta, para manter os dados do site limpos.
&emsp; O usuário terá um perfil onde ele poderá ver uma lista com suas postagens. O usuário terá dois _tipos_: comum e moderador, o último poderá excluir outras postagens.


## Modelo
ENUNCIADO:
Forneça o modelo conceitual de seu sistema como um diagrama de classes UML. Representam cardinalidades próprias (multiplicidades) para todas as associações. Inclua também os nomes das associações.
 
Alguns pontos a considerar:
o   Use UML ou qualquer notação que possa representar o modelo inicial de seu sistema (Entidade-Relacionamento é OK se não for usar algo OO). \
o   Não complique demais como você representa os elementos do seu modelo (por exemplo, usando herança ou uma associação quando não são necessários). Preste atenção à simplicidade, manutenibilidade, repetição desnecessária.
o   Não representam ações que não precisam ser registradas no sistema.\
o   Não represente elementos técnicos, como interface do usuário ou bibliotecas de linguagem de programação no modelo. Neste ponto, estamos modelando a lógica/domínio de negócios do seu sistema. Durante a fase de projeto, o modelo será refinado para incluir elementos e decisões específicas da tecnologia.\
o   Não represente "Sistema" como uma classe ou entidade em seu modelo. Tudo o que você está modelando faz parte do sistema.\
o   Se você sentir a necessidade de justificar suas decisões, você pode escrever sua justificativa nesta seção ou como comentários no diagrama.\
 
O modelo deve ter pelo menos 6 classes ou entidades. Você pode adicionar requisitos na descrição do sistema se precisar de mais classes.
 
Seu domínio deve ser modelado adequadamente. O modelo deve evitar complexidade desnecessária, repetição, falta de coesão e acoplamento. As classes devem estar em um nível de abstração adequado.
