[![Netlify Status](https://api.netlify.com/api/v1/badges/f5aaa59b-5afe-4de9-93b7-ad52e5324bd1/deploy-status)](https://app.netlify.com/sites/yinfenglu/deploys)

> Résumé website powered by [VitePress](https://github.com/vuejs/vitepress), with a little bit of modification and customization.

## Get Started with VitePress

Install the VitePress npm package:

```npm
npm add -D vitepress
```

Create a new VitePress project:

```npm
npx vitepress init
```

Start the project in dev mode:

```npm
npm run docs:dev
```

Read the full documentation of VitePress [here](https://vitepress.dev/).

## Click to Enlarge Images

Currently, VitePress does not support clicking to enlarge images out of the box. To achieve a simple effect, follow the steps below:

1. Install the `medium-zoom` library:

```npm
npm add medium-zoom
```

2. In `.vitepress/theme/index.ts`, import the relevant functions and add a `setup` function:

```typescript
// import ...
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";

export default {
  // ...
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // change margin and background to your liking
      mediumZoom(".main img", { margin: 50, background: "rgba(0, 0, 0, 0.5)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
} satisfies Theme;
```

3. Create a custom CSS file, e.g. `.vitepress/theme/custom.css`, and add in the following rules:

```css
.medium-zoom-image {
  z-index: 9999 !important;
}

.medium-zoom-overlay {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 9998 !important;
}
```

You can remove `backdrop-filter` if you don't like it.

> [!NOTE]
> For some reason, the images are blurred on Safari.

