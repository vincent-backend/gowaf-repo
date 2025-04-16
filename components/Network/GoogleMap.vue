<template>
    <GoogleMap
    :api-key="googleApiKey"
    class="google-map"
    :center="center"
    :zoom="2"
    >
    <div v-for="(pos, index) in props.nodeList" :key="index">
        <CustomMarker :options="{ position: {
            lat: parseFloat(pos.lat),
            lng: parseFloat(pos.lng)
        } }">
            <div class="marker" >
                {{pos.node_location}}
            </div>
        </CustomMarker>
    </div>
    </GoogleMap>
</template>
<script setup lang="ts">
    import { GoogleMap, CustomMarker } from 'vue3-google-map'
    const center = {
    lat: 39.9042, lng: 116.4074
    };

    const props = withDefaults(
        defineProps<{
            nodeList: any[]
        }>(),
        {}
    );

    const googleApiKey = process.env.GOOGLE_MAP_API_KEY || "";
</script>
<style lang="scss" scoped>
    .google-map {
        width: 80%;
        height: 600px;
    }

    .marker {
        width: 150px;
        height: 30px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #283345;
        color: #ffffff;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        border-radius: 8px;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 767px) {
        .google-map {
            width: 100%;
            height: 25rem;
        }
    }
</style>