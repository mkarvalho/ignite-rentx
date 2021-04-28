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
- [ ] Deve ser possível cadastrar a imagem do carro.

**RNF - REQUISITOS NÃO FUNCIONAIS**
- [ ] Utilizar o multer para upload dos arquivos.

**RN - REGRA DE NEGÓCIO**
- [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- [ ] O usuário responsável pelo cadastro deve ser um usuário administrador.

------------
### Aluguel de carro

**RF - REQUISITOS FUNCIONAIS**
- [ ] Deve ser possível cadastrar um aluguel.

**RN - REGRA DE NEGÓCIO**
- [ ] O aluguel deve ter duração mínima de 24 horas.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
