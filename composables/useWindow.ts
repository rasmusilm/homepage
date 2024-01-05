export function useWindow() {

    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => windowWidth.value = window.innerWidth
    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const small = computed(() => {
        return windowWidth.value < 768
    })

    const width = computed(() => windowWidth.value)

    return { width, small }
}