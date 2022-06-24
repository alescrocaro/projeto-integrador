# Testes
 
## Descrição
O problema da falta de mapeamento de seres invasores afeta pesquisadores e estudantes, e pode ser visto pela dificuldade em mensurar o impacto ambiental 
causado por tais seres, dificultando assim a elaboração de soluções que possam vir a tratar problemas ambientais em uma determinada região. 
O Invasores é um fórum de biologia que procura mapear os seres invasores de um determinado lugar. Nosso software procura ser informativo de maneira 
que o usuário consiga visualizar facilmente os seres que não fazem parte de determinado ambiente, além de possibilitar que qualquer pessoa possa ajudar 
a comunidade fazendo postagens para identificar novos invasores. Atualmente o software consiste em uma tela inicial com um mapa para visualização dos seres
invasores, uma listagem de posts feitos por todos usuários e uma filtragem a partir de um raio de busca; uma tela para mostrar o post com todas suas 
informações, tags (#) e uma seção de comentários; e por fim uma tela de criação de posts, na qual podem ser inseridas informações científicas, 
de geolocalidade e upload de imagens.
 
##	Testes
 
###	Teste de Unidade

&emsp; Usamos o framework de teste Jest com auxílio do supertest, framework para facilitar as requisições http e testar os controllers. \
&emsp; [Link para a pasta do GitHub onde os testes de unidade automatizados estão localizados.](https://github.com/alescrocaro/forum-invasores/tree/tests/backend/tests) \
&emsp; Não utilizamos mock. \
&emsp; Printscreen: \
![teste de hash](https://user-images.githubusercontent.com/37521313/175657076-21a33de4-20d7-42d0-9dd1-11c245455e06.png)


### Teste de sistema

&emsp; Usamos o framework de teste Jest com auxílio do supertest, framework para facilitar as requisições http e testar os controllers. \
&emsp; [Link para a pasta do GitHub onde os testes de sistema automatizados estão localizados.](https://github.com/alescrocaro/forum-invasores/tree/tests/backend/tests) \
&emsp; Printscreen: \
![testes de usuário](https://user-images.githubusercontent.com/37521313/175657755-4605d58c-5955-40a4-bbaf-ee74bd2ce0c6.png)
  
 
 ### Cobertura de testes
 &emsp; Como tivemos pouco tempo para implementação de testes - apenas uma semana, além de que estávamos no meio da sprint de projeto integrador - fizemos poucos testes, como pode ser visto no printscreen abaixo. \
![Cobertura de testes](https://user-images.githubusercontent.com/37521313/175658006-1c1c716f-2c32-4e88-8af7-81ca4416b3f0.png)
