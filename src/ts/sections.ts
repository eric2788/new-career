export const jumpInto = (id: Sections) => {
    const elmnt: HTMLElement | null = document.getElementById(`${id}`);
    if (elmnt == null){
        console.error(`element id: ${id} is null`);
        return;
    }
    window.scrollTo({
        top: elmnt.offsetTop,
        left: elmnt.offsetLeft,
        behavior: 'smooth',
    })
};
