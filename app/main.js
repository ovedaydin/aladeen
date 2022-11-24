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