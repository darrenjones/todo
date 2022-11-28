import { makeVar, gql } from '@apollo/client'

export const themeMode = makeVar(false)

export const GET_THEME_MODE = gql`
  query getThemeMode {
    themeMode @client
  }
`;

