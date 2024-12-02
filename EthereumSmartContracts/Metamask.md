# COMO FUNCIONA O METAMASK?

O metamask fica conectado com o Infura que conecta com o o nó da blockchain do Ethereum. Ao fazer essa conexão, sem precisar rodar um full node(se tornar um minerador), facilitando o desenvolvimento de DApp's, é grátis btw.

Metamask permite organizar wallets e explorar contratos.

## Como funciona uma Transação na rede Ethereum?

### Ethereum Transaction
É uma função de sendTransaction que recebe um objeto.

- "from" : Quem está enviando
- "to" : Quem recebe
- "value" : Valor em WEI(2*10^-18)
- "gas" : Quantidade de gasolina
- "gasPrice" : Valor de gasolina, o valor de gasolina que sobra é repartido para os mineradores.
- "data"
- "nonce" : quantas transações ja foram feitas pela conta (from), valor vai sendo incrementado (0,1,2,3,4,...)

### Como a rede detecta se uma transação é válida ou não?

Tudo por conta das assinaturas da transação.

Transação guardando todos os dados, e uma Chave privada. Chave privada gera uma chave pública e a assinatura é gerada por meio do Algoritmo de assinatura digital de curva elíptica(ECDSA). Apartir da chave pública, gera uma conta Ethereum.

 