const showSidebar = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0]
    sidebar.classList.add('show')
    const overlay = document.getElementsByClassName('overlay')[0]
    overlay.classList.add('show')
}
const hideSidebar = () => {
    const sidebar = document.getElementsByClassName('sidebar')[0]
    sidebar.classList.remove('show')
    const overlay = document.getElementsByClassName('overlay')[0]
    overlay.classList.remove('show')
}
const pathname = window.location.pathname
const pathArray = window.location.pathname.split('/')
const lastItemOfPathname = pathArray[pathArray.length - 1]
const mainPath = pathname.replace(lastItemOfPathname, '')
const logo = document.getElementById('logo')
logo.href = mainPath
const press = document.getElementById('press')
press.href = mainPath + 'press.html'

const intro = document.getElementsByClassName('intro')[0]
const introDivs = intro.getElementsByTagName('div')

const introText = [
    "Hi, I'm Admiral General Aladeen,",
    'I was born to Omar Aladeen and a French Stewardess, who died in childbirth, 1973.',
    "Being the only son of Omar Aladeen, I was the sole successor to my father's position.",
    'I grew up and went to study in Switzerland and continued onto university, attending the University of Aladeen, and the North West Aladeen University.',
    "I earned a total of 118 PhD's and 30 post-docs.",
]
const introTextTr = [
    'Merhaba, ben Amiral General Aladeen,',
    "1973'te Omar Aladeen ve doğum sırasında ölen bir Fransız hostesin çocuğu olarak dünyaya geldim.",
    "Omar Aladeen'in tek oğlu olarak, babamın pozisyonunun tek varisiydim.",
    "Büyüdüm ve İsviçre'de okumaya gittim ve üniversiteye devam ederek Aladeen Üniversitesi ve Kuzey Batı Aladeen Üniversitesi'ne gittim.",
    'Toplam 118 doktora ve 30 doktora sonrası kazandım.',
]
let lang = 'tr'

const changeLanguage = () => {
    let text
    if (lang === 'en') {
        lang = 'tr'
        text = introTextTr
    } else {
        lang = 'en'
        text = introText
    }
    for (let i = 0; i < introDivs.length; i += 1) {
        introDivs[i].innerText = text[i]
    }
}
changeLanguage()