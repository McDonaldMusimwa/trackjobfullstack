
import {Calendar1,CircleGaugeIcon,FilePlus,FileTextIcon,NotebookPen,Settings} from 'lucide-react'
import type{ElementType} from "react"

type NavLink=|{
    link : string
    name :string
    icon:ElementType
    id:number
}

export const navlinks:Array<NavLink> =[

    {
        link:"/app",
        name:"Dashboard",
        icon:CircleGaugeIcon,
        id:1
    },
    {
        link:"/applications",
        name:"Applications",
        icon:FileTextIcon,
        id:2
    },
      {
        link:"/notes",
        name:"Notes",
        icon:NotebookPen,
        id:3
    },
      {
        link:"/interviews",
        name:"Interviews",
        icon:Calendar1,
        id:4
    },
    {
        link:"/settings",
        name:"Settings",
        icon:Settings,
        id:5
    },
    {
        link:"app/AddApplication",
        name:"Add App",
        icon:FilePlus,
        id:6
    }
]