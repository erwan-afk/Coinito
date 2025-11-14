<template>
  <div :class="badgeClasses">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue';
import { cn } from '@/lib/utils';

export default {
  name: 'Badge',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'secondary', 'destructive', 'outline', 'success'].includes(value),
    },
  },
  setup(props) {
    const badgeClasses = computed(() => {
      const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
      
      const variants = {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        success: 'border-transparent bg-green-500 text-white hover:bg-green-600',
      };

      return cn(baseClasses, variants[props.variant]);
    });

    return { badgeClasses };
  },
};
</script>

