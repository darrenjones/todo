import { InMemoryCache } from '@apollo/client';
import { themeMode } from './reactiveVariables/themeVariable'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        themeMode: {
          read() {
            return themeMode();
          }
        }
      }
    }
  }
})
