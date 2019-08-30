
declare type Sections = 'carousel' | 'detail' | 'departs' | 'recruit' | 'apply' | 'support';

declare interface Item {
    title: string,
    id: Sections
    icon: string
}

declare interface SlideItem {
    title: string,
    subtitle?: string,
    link?: string,
    img: string
}

declare interface Depart {
    name: string,
    id: string,
    sub: string
    icon: string
}

declare interface HistoryRecord {
    year: string,
    title: string,
    content: string[],
    icon: string,
    fillDot: boolean,
    smallDot: boolean
}

declare interface SubDetail{
    title: string,
    sub: string
}

declare interface Recruit {
    title: string,
    subtitle: string,
    pdf: string
    img: string
}

declare interface Support{
    title: string,
    sub: string
    icon: string
}
