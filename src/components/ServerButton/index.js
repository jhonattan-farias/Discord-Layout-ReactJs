import React from 'react'

import Logo from '../../assets/Logo.svg'

import {Button} from './styles'

export default function ServerButton(isHome,hasNotifications,mentions){
    <Button isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}>
        {isHome && <img src={Logo}/>}
        </Button>
}