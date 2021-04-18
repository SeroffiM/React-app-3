import React from 'react'
import MenuItem from "./MenuItem/MenuItem";
import menuChat from './../../../../../static/img/icons/menu_chat.svg'
import menuContract from './../../../../../static/img/icons/menu_contract.svg'
import menuGroup from './../../../../../static/img/icons/menu_group.svg'
import menuLeads from './../../../../../static/img/icons/menu_leads.svg'
import menuNews from './../../../../../static/img/icons/menu_news.svg'
import menuPersonal from './../../../../../static/img/icons/menu_personal.svg'
import menuTeacher from './../../../../../static/img/icons/menu_teacher.svg'
import menuTimetable from './../../../../../static/img/icons/menu_timetable.svg'


const MenuNav = (props) => {

    const {sideMenu} = props
    const [menuClass, menuListClass, menuLinkClass] = sideMenu === 'container__menu' ? ['menu', 'menu__list', 'menu__link'] :
        ['menu-mobile__menu', 'menu-mobile__list', 'menu-mobile__link']

    return (
        <nav className={menuClass}>
            <ul className={menuListClass}>
                <MenuItem menuImg={menuGroup} menuLink={menuLinkClass}
                          data={{name: 'Учебный календарь', path: '/academic_calendar'}}/>
                <MenuItem menuImg={menuTimetable} menuLink={menuLinkClass}
                          data={{name: 'Учебный процесс', path: '/educational_process'}}/>
                <MenuItem menuImg={menuChat} menuLink={menuLinkClass}
                          data={{name: 'Чат', path: '/chat'}}/>
                <MenuItem menuImg={menuTeacher} menuLink={menuLinkClass}
                          data={{name: 'Связь с администратором', path: '/administrator_connection'}}/>
                <MenuItem menuImg={menuLeads} menuLink={menuLinkClass}
                          data={{name: 'Преподаватели', path: '/teachers'}}/>
                <MenuItem menuImg={menuContract} menuLink={menuLinkClass}
                          data={{name: 'Новости школы', path: '/school_news'}}/>
                <MenuItem menuImg={menuNews} menuLink={menuLinkClass}
                          data={{name: 'Мои услуги', path: '/my_services'}}/>
                <MenuItem menuImg={menuPersonal} menuLink={menuLinkClass} data={{name: 'Профиль', path: '/profile'}}/>
            </ul>
        </nav>
    )
}

export default MenuNav