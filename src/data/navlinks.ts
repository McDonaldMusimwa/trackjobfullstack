
import {File,Home,Telescope,} from 'lucide-react'
import type{ElementType} from "react"

type NavLink=|{
    link : string
    name :string
    icon:ElementType
    id:number
}

export const navlinks:Array<NavLink> =[

    {
        link:"/",
        name:"Home",
        icon:Home,
        id:1
    },
      {
        link:"/Documents",
        name:"Uploads",
        icon:File,
        id:2
    },
      {
        link:"/Explore",
        name:"Explore",
        icon:Telescope,
        id:3
    }
]