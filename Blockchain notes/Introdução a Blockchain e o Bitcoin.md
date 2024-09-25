

# Bitcoin Introdução

Criado por **Satoshi Nakamoto**, é apenas um pseudônimo.

É uma criptomoeda, não é só dinheiro. Dentro da própria lógica, já é um sistema de pagamentos; Em toda a história, apenas existirão 21 milhões de bitcoins em toda a história.

Em **2008**, foi lançado o artigo que definiu o bitcoin, tratando sobre:
- Criptografia
- Blockchain
- Redes descentralizadas
- "Engenharia de Incentivo" : Se seguir as regras do bitcoin, você ganha dinheiro, se não, você perde dinheiro.

**2009** -> Primeiro bloco do Bitcoin chamado de genesis block

**PORQUE DIABOS O BITCOIN É MUITO VALORIZADO?**

// TO DO: uma página sobre o **gasto duplo**
Ele foi a única criptomoeda a solucionar o problema de Gasto duplo


| Caracterísiticas         | Sistema Tradicional   | Bitcoin                   |
| ------------------------ | --------------------- | ------------------------- |
| **Contabilidade**        | Centralizada          | Blockchain                |
| **Armazenamento**        | Fracionado            | 100%                      |
| **Segurança**            | Institucional         | Criptográfica             |
| **Emissão de Moeda**     | Política Econômica    | Algoritmo                 |
| **Transações**           | Centralizado          | Distribuído, peer-to-peer |
| **Autenticação**         | centralizado          | Blockchain                |
| **Regulamentação**       | Banco Central, Normas | Ainda Indefinida          |
| **Processo de decisão**  | Arbitrário            | Consenso                  |
| **Controle do Dinheiro** | Banco                 | Você                      |
Se o não houver um consenso irá acontecer um "hard fork" no bitcoin. Serão criadas "novas" moedas baseadas na mesma premissa do bitcoin, porém com suas peculiaridades.

# Blockchain

É uma cadeia de blocos, lembra uma Linked List. Cada bloco tem dentro dele uma lista de dados e informações que apontam para o próximo bloco. Caso seja alterado algum dado dentro da blockchain, um dado, um letra, o que seja. A blockchain inteira dentro desse bloco é apagada, isso garante um grande nível de segurança. Tudo isso funciona graças as [Funções Hash](Funções%20Hash.md).

## Blockchain Básica

Por que a blockchain é inviolável?
![imagem simples representando](images/basic_blockchain.png)

Cada bloco possúi um Hash próprio, para ele ser gerado ele precisa do Hash do bloco anterior e os dados do bloco próprio bloco. A função é mais ou menos assim.

```bash
HASH do BLOCO: {Hash anterior || Dados}
```
O que acontece se um hacker tentar alterar a blockchain do bitcoin?

Se um hacker tentar inserir dados falsos na blockchain do Bitcoin, a integridade da cadeia de blocos será comprometida, tornando a fraude facilmente perceptível. Para que isso não aconteça, o hacker precisaria modificar praticamente toda a blockchain. Além de ser algo extremamente inviável, os demais participantes da rede rapidamente perceberiam que algo está errado, já que a nova cadeia que o hacker tentaria implementar seria completamente distinta da original. Em mais de dez anos de funcionamento, não há registros de adulterações bem-sucedidas na blockchain do Bitcoin.

Na tentativa de uma fraude, o atacante tera que inserir dados falsos, logo isso provocará uma mudança no **hash do bloco**, criando um **Hash diferente**. Se um bloco for alterado, seu hash será alterado, quebrando a cadeia de blocos 

> MODIFICAR DADOS = MUDA A CADEIA POR COMPLETO!

# Assinaturas Digitais

- Só você pode assinar
- Qualquer um pode verificar sua assinatura
- Assinatura atrelada ao documento

usa criptografia de chave pública

O que acontece se alguém descobrir seu par chave pública/secreta?

Se alguém descobrir seu par chave pública/secreta, esta pessoa poderá assinar qualquer documento como se fosse você. Sendo um conjunto de funções criptográficas, o sistema de assinatura digitais é incapaz de fazer distinção entre pessoas, apenas verificar a compatibilidade das chaves utilizadas. Proteger sua chave secreta é fundamental para segurança no Bitcoin.**principal meio de transferência do Bitcoin**

# Criando uma Moeda

## O que uma moeda faz?

- Quem tem quanto?
- **Quem transferiu quanto para quem?** esse é um dos principais problemas das moedas digitais.

Vamos nomear a nossa moeda de [centralcoin](CentralCoin.md)