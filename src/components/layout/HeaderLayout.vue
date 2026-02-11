<template>
    <header class="header">
        <div class="container">
            <h1
                :class="`header-title ${props.loaded ? `loaded` : ``} ${props.easein ? `easein` : ``} ${props.focus ? `focus` : ``} ${
                    props.easeout ? `easeout` : ``
                }`"
                v-text="props.headerTitle"
            ></h1>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    headerTitle: { type: String, default: "" },
    loaded: { type: Boolean, default: false },
    easein: { type: Boolean, default: false },
    easeout: { type: Boolean, default: false },
    focus: { type: Boolean, default: false },
});
</script>
