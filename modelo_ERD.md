# Modelo Entidade-Relacionamento (ERD) - Sistema de Gerenciamento de Frotas

## Entidades e Atributos

### Usuário
- **id** (PK): Identificador único do usuário
- **nome**: Nome do usuário
- **email**: Email do usuário
- **senha**: Senha do usuário

### Veículo
- **id** (PK): Identificador único do veículo
- **modelo**: Modelo do veículo
- **placa**: Placa do veículo
- **status**: Status do veículo (e.g., "Em Andamento", "Finalizado")

### Motorista
- **id** (PK): Identificador único do motorista
- **nome**: Nome do motorista
- **cnh**: Número da CNH do motorista
- **validade_cnh**: Data de validade da CNH do motorista

### Viagem
- **id** (PK): Identificador único da viagem
- **destino**: Destino da viagem
- **data_saida**: Data de saída da viagem
- **data_retorno**: Data de retorno da viagem
- **status**: Status da viagem (e.g., "Planejada", "Em Andamento", "Finalizada")
- **veiculo_id** (FK): Referência ao veículo utilizado na viagem
- **motorista_id** (FK): Referência ao motorista responsável pela viagem

### Manutenção
- **id** (PK): Identificador único da manutenção
- **descricao**: Descrição da manutenção
- **data**: Data da manutenção
- **custo**: Custo da manutenção
- **veiculo_id** (FK): Referência ao veículo que recebeu a manutenção

## Relacionamentos

- Um **Usuário** pode gerenciar muitos **Veículos**.
- Um **Usuário** pode gerenciar muitos **Motoristas**.
- Um **Usuário** pode gerenciar muitas **Viagens**.
- Um **Usuário** pode gerenciar muitas **Manutenções**.
- Um **Veículo** pode ter muitas **Manutenções**.
- Um **Motorista** pode participar de muitas **Viagens**.
- Um **Veículo** pode ser usado em muitas **Viagens**.

## Diagrama ERD

Abaixo está a representação textual do Modelo Entidade-Relacionamento (ERD).

```
+-------------+            +-------------+            +-------------+            +-------------+            +-------------+
|   Usuário   |            |   Veículo   |            |  Motorista  |            |   Viagem    |            | Manutenção  |
+-------------+            +-------------+            +-------------+            +-------------+            +-------------+
| PK: id      |<>---------<| PK: id      |<>---------<| PK: id      |<>---------<| PK: id      |<>---------<| PK: id      |
| nome        |            | modelo      |            | nome        |            | destino     |            | descricao   |
| email       |            | placa       |            | cnh         |            | data_saida  |            | data        |
| senha       |            | status      |            | validade_cnh|            | data_retorno|            | custo       |
+-------------+            +-------------+            +-------------+            | status      |            | FK: veiculo_id|
                                      |             | FK: motorista_id|            +-------------+
                                      |             | FK: veiculo_id  |                  
                                      +-------------+            +-------------+
```

### Notas

- `<` indica um relacionamento um-para-muitos.
- `<>` indica um relacionamento muitos-para-um.

Este diagrama fornece uma visão clara das entidades e seus relacionamentos no sistema de gerenciamento de frotas.