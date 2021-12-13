import React,{useState} from "react";
import './App.scss';
import Hero from "./components/hero/hero";
import TextBlock from "./components/text-block/textblock";
import Icons from "./Icons";

function App() {
    const [bool, setBool] = useState(false)
    const [themes, setTheme] = useState(false)

    const dark = () =>{
        document.documentElement.style.setProperty('--dark', 'white');
        document.documentElement.style.setProperty('--light', '#000');
    }
    const light = () =>{
        document.documentElement.style.setProperty('--dark', '#000');
        document.documentElement.style.setProperty('--light', 'white');
    }
    themes?dark():light()

    let data = []
    const dataRus = [
        {
            h1: 'О себе',
            subtitle1: 'Личные качества:',
            paragr1: 'Внимание к деталям, Пунктуальность, Отзывчивость, Умение легко находить контакт с людьми, Креативное мышление, Перфекционизм, Без вредных привычек.',
            subtitle2: 'Хобби:',
            paragr2: 'Компьютерные игры, Youtube, Netflix, Музыка, Литература по психологии.',
        },
        {
            h1: 'Навыки',
            paragr1: 'JavaScriptES7, TypeScript, Swift',
            paragr2: 'Angular, React, Vue3, SwiftUI, SCSS, Styled-Components',
            paragr3: 'REST API, JSON, Git, Github, RxJS, Redux, NGRX, VUEX',
            paragr4: 'Figma, Illustrator, Photoshop, GSAP, Framer-Motion',
        },
        {
            h1: 'Портфолио',
            linkTitle: 'Смотреть',
            link: 'https://rafaelnassybullin.github.io/portfolioRafael/'
        },
        {
            h1: 'Опыт работы',
            subtitle2: '(2019-2021) Выполнение заказов на Фрилансе, Удаленная работа',
        },
        {
            h1: 'Знание языков',
            paragr1: 'Казахский',
            paragr2: 'Русский',
            paragr3: 'Английский (Upper-Intermediate B2)'
        },
        {
            h1: 'Образование',
            subtitle1: '(2004-2015) Школа им. Жансена Кереева',
            subtitle2: '(2015-2019) Актюбинский университет Баишева',
            paragr2: 'Технический факультет, "Автоматизация и Управление"'
        },
    ]
    const dataEng = [
        {
            h1: 'ABOUT ME',
            subtitle1: 'Personal qualities:',
            paragr1: 'Attention to detail, Punctuality, Responsiveness, Ability to easily find contact with people, Creative thinking, Perfectionism, No bad habits.',
            subtitle2: 'Hobby:',
            paragr2: 'Video games, Youtube, Netflix, Music, Psychology literature.',
        },
        {
            h1: 'SKILLS',
            paragr1: 'JavaScriptES7, TypeScript, Swift',
            paragr2: 'Angular, React, Vue3, SwiftUI, SCSS, Styled-Components',
            paragr3: 'REST API, JSON, Git, Github, RxJS, Redux, NGRX, VUEX',
            paragr4: 'Figma, Illustrator, Photoshop, GSAP, Framer-Motion',
        },
        {
            h1: 'PORTFOLIO',
            linkTitle: 'Watch',
            link: 'https://rafaelnassybullin.github.io/portfolioRafael/'
        },
        {
            h1: 'EXPERIENCE',
            subtitle2: '(2019-2021) Execution of orders on Freelance, Remote work',
        },
        {
            h1: 'Languages',
            paragr1: 'Kazakh',
            paragr2: 'Russian',
            paragr3: 'English (Upper-Intermediate B2)'
        },
        {
            h1: 'EDUCATION',
            subtitle1: '(2004-2015) School named after Zhansen Kereeva',
            subtitle2: '(2015-2019) Aktobe Baishev University',
            paragr2: 'Faculty of Technology, "Automation and Control"'
        },
    ]

        bool
        ?data=dataRus
        :data=dataEng

    return (
        <div className={'container'}>
            <div className="one">
                <Hero engBollean={bool}/>
            </div>
            <div className="two">
                {data.map((item, index) => (
                    <TextBlock key={index} textData={item}/>
                ))}</div>
            <div onClick={()=>setTheme(!themes)} className="change-theme-toggle">
                {!themes?<Icons sun/>:''}
                {themes?<Icons moon/>:''}
            </div>
            <div onClick={()=>setBool(!bool)} className="change-language-toggle">{bool?'RU':'EN'}</div>
        </div>
    );
}

export default App;
