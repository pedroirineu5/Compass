# O Ethereum

O ethereum é uma altcoin, uma criptomoeda diferente do bitcoin. Ele tem a mesma premissa que o Bitcoin junto a um computador

- Assinaturas digitais + blockchain imutável = Identidade
> A identidade é como um CNPJ, ou seja, podemos abrir diversas contas
- Contratos (Smart Contracts)
- Propriedade(NFTs)

## Por que Ethereum?

- Segundo maior cap rate;
> Valor monetário em Dólares de todas as moedas.
- Desenvolvedores muito ativos;
- Conceitualmente diferente
- Ambicioso

## Caracterísitcas básicas do Ethereum
Contém as mesmas caracteristicas do bitcoin:

- Blockchain
- Mineração
- Criptografia
- Descentralização
- Consenso

### Caracteristicas próprias:

- Projetado para diversas aplicações
- Possui uma moeda nativa: Ether
- 1 Ether = 1E+18 Wei (um quintilhão)
- Mineração Memory Hard(Não usa a capacidade de processamento, usa a capacidade de memória)
- Transações envolvem processamento e transferências
- Smart Contracts
- Origens mais claras

## Fundação Ethereum

- Opera com fundos vindos da criação do Ehetereum
- Coordena, financia e advoga
- Não detem poder decisório oficialmente
- Opera em conjunto com outros agentes importantes e com core developers
- Consenso guiado e subtraction mindset
- "Ditadura Benevolente"

## Accounts and States
Uma máquina de estados, cada conta terá um estado

- Externally Owned Accounts(EOA): Controladas por usuários detentores de uma chave secreta. 
- Contract Accounts: São ativadas por EOAs, mas controlas apenas por sua programação interna.

### Por que States?

- Simplicidade conceitual
- Eficiência

## A Ethereum Virtual Machine

Uma máquina virtual capaz de diversos ser capaz de funcionar em qualquer dispositivo

- TOdos os nós da rede Ethereum possuem a EVM.
- A EVM permite que linguagens de alto nível sejam usadas para criar algoritoms executáveis em qualquer máquina com um nó Ethereum.

> A linguagem do ethereum é o **solidity**


## Problemas

- Custo de processamento
- Denial Of Service Attacks(DoS)
- Algoritmos com problemas
- Loops infinitos

## GAS
Solução para os problemas

- Qualquer transação tem um custo de gasolina(GAS)
- +Complexo -> Caro
> Você pode fazer um Denial of Service Attack, porém vai ser muito caro. kkkkk

- Toda operação será executada até:
    - Finalizar normalmente
    - Atingir o GAS limit
    - Usar todo o GAS enviado na transação
> Evita loops infinitos

- Para uma mesma operação, o custo em GAS é sempre o mesmo
> Incentiva a eficiência

- O preço do GAS varia em função da demanda
> Facilita a precificação

## Smart Contracts
A funcionalidade mais famosa do ethereum foi feito para rodar qualquer aplicação. A única limitação é a criatividade.


**Lógica interna**: O que foi programado para acontecer vai acontecer querendo ou não. Literalmente, um contrato / pacto.

- 1993: Primeiras Ideias (Nick Szabo)
- Um conjunto de regras combinadas entre duas ou mais, partes traduzida em código computacional, verificável e auto executável
- No Ethreum: um conjunto de código e dados que reside em uma account
- Possuem um endereço e um balanço
- -> ETH + dados
- <- output predefinido
- Podem se comunicar com outros contratos e endereços
- Podem se auto-destruir e criar novos contratos

### Criando um smart contract
Você manda as intruções(tipo mandar as peças para montar uma máquina de refrigerante)e um pouco de ether, ai chega um minerador e coloca esse código na blockchain.

#### Exemplos de Smart Contract
- **Contrato de segurança**: Um casal tem uma conta de ether, esse contrato espeficico para evitar roubos de hackers. Para acessar a account junto com o state dos dois, precisa-se da assinatura do Casal.

## Dapps Descentralized Applications

- Aplicativos descentralizados(Bittorrent)
- Pode ou não usar blockchain
- Sem intermediários
- Open Source
- Sem ponto central de falha
- O "Sonho" do Ethereum