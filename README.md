# graph-query-ts
Typescript code that can be used to query the graph decentralized network
# Aave V3 Subgraph

## Title

How to look up all the user transctions of users on the Aave V3 protocol on the contracts deployed on the polygon market

## Description

- This query checks all the user transactions of users on Aave v3. Essentially, there are Atokens, VTokens, and STokens that are minted and burned according to various events that occur on the lending and borrowing platform. These events include, `Borrow` , `Repay` , `Supply`, `Withdraw` , `Liquidate`  etc.
- This subgraph uses the **Transfer** events of these tokens to create the UserTransaction entity.
- We do a filter for the first 15 transactions, having ordered it in an descending order using the timestamp field to get the 15 most recent user transactions

When we  run the query, it returns the fields; 

- Block ⇒ The blocknumber of the block which contains the transaction
- Timestamp ⇒ The time at which the block was created
- TransactionsHash ⇒ The idenfier of the transaction
- User ⇒ The address of the user that either sent the transaction or transferred out/transferred in the utility tokens
- Id ⇒ A concatenation of the `transactioHash-user`

## Subgraph to Query

https://thegraph.com/explorer/subgraphs/4H2juYUDfhWAF4WaEpS3vvXQfFqCY9F9y8SXXUi7QjHJ?view=Overview&chain=arbitrum-one

## Query
```query UserTransactions {
  userTransactions(first: 10, orderBy: timestamp, orderDirection: desc) {
    id
    block
    timestamp
    transactionHash
    user
  }
}
```
