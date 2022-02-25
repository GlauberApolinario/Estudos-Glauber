Projeto Para uma aplicação para administração de um ônibus do sistema suplementar de Belo Horizonte

Padrão pada o Banco de Dados:
  - As tabelas deverão estar escritas em inglês no padrão snake_case, usando o prefixo tbl

- Cadastro de usuários
  - Id, Nickname, Nome, tipo, Senha
  - Separados por tipo ADMIN ou NORMAL

- Cadastro de profissionais
  - Motoristas e/ou outro tipo

- Cadastro de movimentação diária
  - Dia
  - Profissional
  - Quatidade de viagens
  - Faturamento em dinheiro
  - Faturamento em cartões
  - Quantidade de passageiros pagantes
  - Quantidade de passageiros cartão
  - Quantidade de passageiros gratuidade
  - Gasto diário
    - Descrição, valor

- Cadastro de gastos 
  - Dia
  - Profissional
  - Tipo de gasto
    - Mecânico ou outros tipos
  - Descrição do gasto
  - Valor do gasto
  - Tipo de pagamento 
    - A vista ou a prazo, se for a prazo deverá ser informado em quantas parcelas e o vencimento das mesmas

- Relatórios
  - Faturamento semanal/mensal/anual/customizado
  - Gasto semanal/mensal/anual/customizado


Ao abrir a aplicação deverá ser solicitado o login, se o usuário não tiver um login poderá criar um login, porém este usuário deverá ser autorizado por um usuário com credenciais de administrador, até essa autorização esse usuário não será permitido logar

Usuários com credenciais normal só poderão acessar a área de cadastro de movimentação diária