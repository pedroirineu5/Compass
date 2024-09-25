# Central Coin

Ela é baseada em blockchain exatamente igual ao bitcoin e usa o sistema de transação igual ao bitcoin, usando chave pública.

- Diferente de uma moeda normal: baseada em blockchain
- Die ente de Bitcoin: possui autoridade central
- Todas as transações são armazenadas na blockchain
- As moedas podem ter qualquer valor
- Novas moedas são criadas e destruídas

> 1 Satoshi é a menor quantidade possível de 1 bitcoin.

## Transações
1. **Criar moedas**
    - Criar moeda(id 77)

|NÚMERO|VALOR|DESTINATÁRIO(chave pública)|
|------|-----|------------|
|1|5|786u5yijkrt|
|2|1.2|uy85690|
|3|0.003|j76m598-|
|4|21|uj689o5y04h|

2. **Pagamento || Coin Base Transaction**
    - Vai utilizar moedas que já existem.
    - Tem assinatura digital(usando chave pública/secreta).
    - **$ Moedas Utilizadas > $ $Moedas Criadas$**, por conta de uma tarifa de transferência, no caso do centralcoin ele vai ficar com o banco. Para o bitcoin essa tarifa vai diretamente para os mineradores.
    - Troco próprio.

Para publicar uma transação de CentralCoin:

1. Verificar se a assinatura digital é valida
2. O banco vai verificar se as Moedas consumidas > Moedas criadas. 

> lembrando da tarifa do Banco de é dona da Centralcoin, por isso o valor de consumidas é sempre um pouco maior que as criadas.

3. Verificar dentro da blockchain se as moedas consumidas foram usadas anteriormente, se não, a transação é aprovada.
4. Por fim, será adicionado um bloco na blockchain. Oficializando a transação


# Como o banco sabe o meu saldo na CentralCoin?

Na CentralCoin (e no Bitcoin), o conceito de “saldo” de uma “conta” é diferente. O banco central não mantém um cadastro onde calcula quanto dinheiro cada usuário tem. O saldo de uma pessoa nada mais é do que a soma do valor de todas as moedas criadas e destinadas à chave pública dessa pessoa, e que ainda não tenham sido consumidas em outras transações. O banco da CentralCoin verifica esses dados na blockchain para saber o “saldo” de uma chave pública.