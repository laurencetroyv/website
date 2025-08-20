<template>
  <div>
    <Analytics />
    <SpeedInsights />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>
