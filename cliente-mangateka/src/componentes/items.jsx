import {
  
    AlertOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';


const items = [
    {
        key: '/main',
        icon: <PieChartOutlined />,
        label: 'Main',
    },
    {
        key: '/mangas',
        icon: <DesktopOutlined />,
        label: 'Mangas',
    },
    {
        key: '/novedades',
        icon: <AlertOutlined />,
        label: 'Novedades',
    },
    {
        key: '/contacto',
        icon: <MailOutlined />,
        label: 'Contacto',
    },
    {
        key: '/logout',
        icon: <ContainerOutlined />,
        label: 'Cerrar sesión',
    },
   
    
];

export default items;