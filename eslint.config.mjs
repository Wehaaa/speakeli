import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    overrides: [{
      files: ['src/gql/gql.ts', 'src/gql/graphql.ts'],  // Ajout du nouveau fichier
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'eslint-comments/no-unused-disable': 'off'  // Désactive l'avertissement sur les eslint-disable inutilisés
      }
    }]
  }),
]

export default eslintConfig