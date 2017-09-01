import ApolloClient, { createNetworkInterface } from 'apollo-client'
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from 'subscriptions-transport-ws'

const wsClient = new SubscriptionClient(
  'wss://subscriptions.graph.cool/v1/cj3x5slrm4uio0104cuz4w3pz', {
    reconnect: true
  }
)

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj3x5slrm4uio0104cuz4w3pz'
})

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
)

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
  dataIdFromObject: o => o.id
})

export default client
