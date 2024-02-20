export function util() {
    console.log("hello world")
}

export const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
export const goTo = (top: number) => window.scrollTo({ top, behavior: 'smooth' })