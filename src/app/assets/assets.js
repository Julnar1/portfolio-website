import user_image from './user_img.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import postman from './postman.png';
import profile_img from './profile_img.png';
import download_icon from './download-icon.png';
import download_icon_white from './download_icon_white.png';
import hand_icon from './hand-icon.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import phone from './phone.png';
import phone_dark from './phone_dark.png';
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    postman,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    phone,
    phone_dark,
    profile_img,
    download_icon,
    download_icon_white,
    hand_icon,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    right_arrow,
    send_icon,
};

export const workData = [
    {
        title: 'E-commerce Website (React.js,Bootstrap,Redux)',
        description: 'Developed a full-stack e-commerce site (frontend focus) with product listings, cart, and order processing.',
        bgImage: '/zencart_preview.png',
        projectLink: 'https://modern-ecommerce-react-redux.vercel.app/'
    },
    {
        title: 'E-commerce Admin Dashboard (Next.js, TypeScript,MUI,Redux)',
        description: 'Built an admin dashboard with role-based access for managing products and categories.',
        bgImage: '/store_sentry_admin_dashboard_preview.png',
        projectLink: 'https://store-sentry-admin-dashboard.vercel.app/'
    },
    {
        title: 'Modern E-commerce Application (Next.js, TypeScript)',
        description: 'Built a modern e-commerce app with advanced filtering, shopping cart, and TypeScript integration.',
        bgImage: '/smart_shop_preview.png',
        projectLink: 'https://nextjs-ecommerce-product-filter.vercel.app/'
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages & Frameworks', description: 'HTML5, CSS3, SCSS, JavaScript, React Js, Next Js, Typescript' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Electronics and Communication Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.git,assets.postman
];