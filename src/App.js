import './App.scss';
import Hero from "./components/hero/hero";
import TextBlock from "./components/text-block/textblock";

function App() {
    const dataTextBlock = [
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
    return (
        <div className={'container'}>
            <div className="one">
                <Hero/>
            </div>
            <div className="two">
                {dataTextBlock.map((item, index) => (
                    <TextBlock key={index} textData={item}/>
                ))}</div>
        </div>
    );
}

export default App;
