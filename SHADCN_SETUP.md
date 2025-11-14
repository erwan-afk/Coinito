# Configuration de shadcn-vue

shadcn-vue a été installé avec succès dans votre projet !

## Packages installés

- **Tailwind CSS** : Framework CSS utilitaire
- **radix-vue** : Composants UI accessibles basés sur Radix UI
- **lucide-vue-next** : Bibliothèque d'icônes
- **tailwind-merge** : Utilitaire pour fusionner les classes Tailwind
- **class-variance-authority** : Pour gérer les variantes de composants
- **clsx** : Pour gérer les classes conditionnelles

## Structure créée

- `tailwind.config.js` : Configuration Tailwind avec les variables CSS de shadcn
- `postcss.config.js` : Configuration PostCSS
- `components.json` : Configuration shadcn-vue
- `src/lib/utils.js` : Fonction utilitaire `cn()` pour fusionner les classes

## Utilisation

### Ajouter des composants

Pour ajouter des composants shadcn-vue, vous pouvez :

1. **Utiliser la CLI shadcn-vue** (si disponible) :
   ```bash
   npx shadcn-vue@latest add button
   ```

2. **Installer manuellement** depuis [shadcn-vue.com](https://www.shadcn-vue.com/docs/components)

### Exemple d'utilisation

```vue
<template>
  <Button variant="default">Cliquez-moi</Button>
</template>

<script>
import { Button } from '@/components/ui/button'

export default {
  components: {
    Button
  }
}
</script>
```

### Fonction utilitaire `cn()`

Utilisez la fonction `cn()` pour fusionner les classes Tailwind :

```vue
<script>
import { cn } from '@/lib/utils'

export default {
  methods: {
    getClasses() {
      return cn('base-class', condition && 'conditional-class')
    }
  }
}
</script>
```

## Documentation

- [shadcn-vue Documentation](https://www.shadcn-vue.com)
- [Radix Vue Documentation](https://www.radix-vue.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## Prochaines étapes

1. Ajoutez les composants dont vous avez besoin
2. Personnalisez les couleurs dans `tailwind.config.js`
3. Ajustez les variables CSS dans `src/assets/main.css`

