RentX

### Cadastro de carro

**RF - REQUISITOS FUNCIONAIS**
- [x] Deve ser possível cadastrar um novo carro.

**RN - REGRA DE NEGÓCIO**
- [x] Não deve ser possível cadastrar um carro com uma placa já existente.
- [x] O carro deve ser cadastrado como disponivel por padrão.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

------------
### Listagem de carros

**RF - REQUISITOS FUNCIONAIS**
- [x] Deve ser possível listar todos os carros disponíveis.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- [x] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN - REGRA DE NEGÓCIO**
- [x] O usuário não precisa estar logado no sistema para listar os carros disponíveis.

------------
### Cadastro de especificação no carro

**RF - REQUISITOS FUNCIONAIS**
- [x] Deve ser possível cadastrar uma especificação para um carro.


**RN - REGRA DE NEGÓCIO**
- [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

------------
### Cadastro de imagens do carro

**RF - REQUISITOS FUNCIONAIS**
- [x] Deve ser possível cadastrar a imagem do carro.

**RNF - REQUISITOS NÃO FUNCIONAIS**
- [x] Utilizar o multer para upload dos arquivos.

**RN - REGRA DE NEGÓCIO**
- [x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [x] O usuário responsável pelo cadastro deve ser um usuário administrador.

------------
### Aluguel de carro

**RF - REQUISITOS FUNCIONAIS**
- [x] Deve ser possível cadastrar um aluguel.

**RN - REGRA DE NEGÓCIO**
- [x] O aluguel deve ter duração mínima de 24 horas.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- [x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

------------
### Devolução de carro

**RF - REQUISITOS FUNCIONAIS**
- [ ] Deve ser possível realizar a devolução de um carro.

**RN - REGRA DE NEGÓCIO**
- [ ] Se o carro for devolvido com menos de 24hrs, deverá se cobrado diária completa
- [ ] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel. 
- [ ] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [ ] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [ ] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- [ ] Caso exista multa, deverá ser somado ao total do aluguel.

------------
### Devolução de carro

**RF - REQUISITOS FUNCIONAIS**
- [ ] Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN - REGRA DE NEGÓCIO**
- [ ] Se o carro for devolvido com menos de 24hrs, deverá se cobrado diária completa
- [ ] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel. 
- [ ] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
- [ ] Ao realizar a devolução, deverá ser calculado o total do aluguel.
- [ ] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
- [ ] Caso exista multa, deverá ser somado ao total do aluguel.