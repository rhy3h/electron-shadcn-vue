import { globalIgnores } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import standard from '@vue/eslint-config-standard-with-typescript'

export default defineConfigWithVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  vueTsConfigs.stylistic,
  standard,
  {
    rules: {
      'no-new': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  globalIgnores([
    'src/components/lib/**/*',
    'src/components/ui/**/*'
  ])
)
