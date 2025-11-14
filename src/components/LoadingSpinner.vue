<style scoped>
.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #FFBB00;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.message {
    color: white;
    margin-top: 16px;
    font-size: 16px;
    opacity: 0.7;
}
</style>

<template>
    <div class="spinner-container">
        <div>
            <div class="spinner"></div>
            <div v-if="message" class="message">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinner',
    props: {
        message: {
            type: String,
            default: '',
        },
    },
};
</script>

