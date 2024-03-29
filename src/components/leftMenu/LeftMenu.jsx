import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import '../../css/LeftMenu.css'

export default function LeftMenu() {
    return (
        <div>
            <Menu fluid vertical className="leftMenuOne" >
                <Menu.Item className='leftMenu' as={NavLink} to="/" style={{ backgroundColor: 'black', color: 'white' }} name="Anasayfa"> Anasayfa </Menu.Item>
                <Menu.Item className="leftMenu" as={NavLink} to="/jobAdvertisement" >İş İlanları</Menu.Item>
                <Menu.Item className="leftMenu" as={NavLink} to="/cv/2" >Özgeçmiş</Menu.Item>
                <Menu.Item className="leftMenu" as={NavLink} to="/jobAdvertisementAdd" >İş İlanı Ekle</Menu.Item>
                <Menu.Item className="leftMenu" as={NavLink} to="/jobAdvertisementForEmployer/7" >İş Veren - İş İlanları</Menu.Item>
                
            </Menu>
        </div>
    )
}