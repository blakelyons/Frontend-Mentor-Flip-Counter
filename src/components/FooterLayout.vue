<template>
    <footer class="footer">
        <nav :class="`menu-social ${easein ? `animate-in` : `animate-out`}`">
            <ul class="menu menu--horizontal">
                <li><SocialIcons icon="facebook" :lightMode="props.lightMode" /></li>
                <li><SocialIcons icon="pinterest" :lightMode="props.lightMode" /></li>
                <li><SocialIcons icon="instagram" :lightMode="props.lightMode" /></li>
            </ul>
        </nav>
        <div :class="`attribution ${easein ? `animate-in` : `animate-out`}`">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
            <a href="https://blakelyons.com">Blake Lyons</a>.
        </div>
        <div class="footer-bg">
            <div class="footer-bg-left">
                <FooterBackgroundSvg :lightMode="props.lightMode" :easein="props.easein" :easeout="props.easeout" />
            </div>
            <div class="footer-bg-center">
                <FooterBackgroundSvg :lightMode="props.lightMode" :easein="props.easein" :easeout="props.easeout" />
            </div>
            <div class="footer-bg-right">
                <FooterBackgroundSvg :lightMode="props.lightMode" :easein="props.easein" :easeout="props.easeout" />
            </div>
        </div>
    </footer>
</template>

<script setup>
import SocialIcons from "../components/icons/SocialIcons.vue";
import FooterBackgroundSvg from "./FooterBackgroundSvg.vue";

const props = defineProps({
    lightMode: Boolean,
    easein: Boolean,
    easeout: Boolean,
});
</script>
