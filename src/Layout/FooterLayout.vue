<template>
    <footer class="footer">
        <nav :class="`menu-social ${easein ? `animate-in` : `animate-out`}`">
            <ul class="menu menu--horizontal">
                <li>
                    <a
                        :class="`footer-social-icon ${lightMode ? `light` : `dark`}`"
                        href="https://www.facebook.com/blake.elliott.lyons/"
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <SocialIcons icon="facebook" :lightMode="props.lightMode" />
                    </a>
                </li>
                <li>
                    <a
                        :class="`footer-social-icon ${lightMode ? `light` : `dark`}`"
                        href="https://www.pinterest.com/manofsteelfan/"
                        target="_blank"
                        aria-label="Pinterest"
                    >
                        <SocialIcons icon="pinterest" :lightMode="props.lightMode" />
                    </a>
                </li>
                <li>
                    <a
                        :class="`footer-social-icon ${lightMode ? `light` : `dark`}`"
                        href="https://www.instagram.com/blake_lyons/"
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <SocialIcons icon="instagram" :lightMode="props.lightMode" />
                    </a>
                </li>
            </ul>
        </nav>
        <div :class="`attribution ${easein ? `animate-in` : `animate-out`}`">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by
            <a href="https://blakelyons.com" target="_blank">Blake Lyons</a>.
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
