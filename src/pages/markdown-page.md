---
title: "Markdown + Tailwind"
layout: ../layouts/main.astro
setup: |
  import Button from '../components/common/Button.astro';
---

<div class="grid relative place-items-center py-32 content-center">
    <Button>Tailwind Button in Markdown!</Button>
    <a href="/" class="p-4 underline">Go home...</a>
</div>
