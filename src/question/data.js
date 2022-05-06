export const data = [
  {
    question: "Что используется для передачи данных к компоненту извне?",
    options: ["setState", "render with arguments", "PropTypes", "props"],
    rightAnswer: 3,
  },
  {
    question: "Константа?",
    options: ["const", "var", "let", "jet"],
    rightAnswer: 0,
  },
  {
    question: "Как получить доступ к функции fetch() с элемента h1 в JSX?",
    options: [
      "<h1>{fetch()}</h1>",
      "<h1>${fetch()}</h1>",
      "<h1>{fetch}</h1>",
      "<h1>${fetch}</h1>",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "… может быть выполнено, когда необходимо возвратить несколько элементов из компонента.",
    options: ["Абстракция", "Упаковка", "Обертывание", "Изоляция"],
    rightAnswer: 2,
  },
  {
    question: "Методы жизненного цикла в основном используются",
    options: [
      "никакой из вышеперечисленных",
      "для освобождения ресурсов",
      "для расширения компонентов",
      "для отслеживания истории событий",
    ],
    rightAnswer: 3,
  },
  {
    question: "React в основном используется для...",
    options: [
      " Базы данных",
      " Подключения",
      "Пользовательского интерфейса",
      "Разработки платформы",
    ],
    rightAnswer: 2,
  },
  {
    question: "Какие факты о Flux истины?",
    options: [
      "Flux является частью Reactн",
      "Flux - это архитектура приложений, которая дополняет React и концепцию однонаправленного потока данных",
      "React приложение нельзя писать без Flux",
      "Flux является дополнительным плагином React",
    ],
    rightAnswer: 1,
  },
  {
    question: "Что такое props.children?",
    options: [
      "Это хранилище ключ-значение всех props, переданных дочерним компонентам.",
      "Это переменная, которая содержит ссылки на дочерние компоненты.",
      "Это переменная, которая содержит содержимое между открывающим и закрывающим тегами компонента.",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Как создать компонент React без наследования класса React.Component?",
    options: [
      "Это невозможно. Все компоненты React должны наследовать React.Component",
      "Используюя метод React.createElement",
      "Используюя метод ReactDOM.render",
    ],
    rightAnswer: 2,
  },
  {
    question: "Кто изобрел компьютер?",
    options: ["Билл Гейтс", "Стив Джобс", "Чарльз Бэббидж", "Алан Тьюринг"],
    rightAnswer: 3,
  },
  {
    question:
      "Какой метод необходимо переопределить в React Component, чтобы компонент не обновлялся?",
    options: [
      "willComponentUpdate",
      "shouldComponentUpdate",
      "componentDidUpdate",
      "componentDidMount",
    ],
    rightAnswer: 1,
  },
  {
    question: "Какую часть шаблона проектирования MVC реализует React.js?",
    options: [
      "React - это полноценный MVC-фреймворк",
      "React предназначен для работы с `view` частью",
      "React является «контроллером» с точки зрения MVC",
    ],
    rightAnswer: 1,
  },
  {
    question: "Какой шаблонизатор можно использовать в React?",
    options: [
      "HBS",
      "EJS",
      "XML",
      "В React вы не должны использовать какой-либо шаблонизатор. Для рендеринга HTML используется JSX (расширение синтаксиса JS).",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Какой из этих методов жизненного цикла компонента существуют в React.js?",
    options: ["shouldComponentUpdate", "destroyed", "mounted", "deleted"],
    rightAnswer: 0,
  },
  {
    question:
      "Перерисовывает ли React всё view когда изминелись props или состояние?",
    options: [
      "Да. React.js распространяет событие на все дерево компонентов, и они вызывают метод render.",
      "Нет. React только повторно рендерит только измененный компонент.",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Какой метод компонента следует использовать для кастомной логики для реагирования на изменения?",
    options: [
      "shouldComponentUpdate",
      "getSnapshotBeforeUpdate",
      "componentWillUpdate",
      "componentWillMount",
    ],
    rightAnswer: 0,
  },
  {
    question: "Что можно передать как второй аргумент в метод setState?",
    options: [
      "свойства, которые должны быть обновлены",
      "функцую обратного вызова для получения нового состояния",
      "предыдущее состояние",
    ],
    rightAnswer: 1,
  },
  {
    question: "Какой атрибут обязателен при рендеринге компонентов списка?",
    options: ["key", "index", " data-index", "id"],
    rightAnswer: 0,
  },
  {
    question: "Какое из этих утверждений относительно props истины?",
    options: [
      "метод componentWillReceiveProps объявлен как deprecated",
      "дочерний компонент наследует props родительского компонента",
      "React автоматически проверяет переданны ли необходимые props",
      "Вы не можете передать объект в props",
    ],
    rightAnswer: 0,
  },
  {
    question: "Что такое React.PureComponent?",
    options: [
      "это базовый класс всех компонентов React",
      "React.PureComponent - это компонент, у которого нет метода render.",
      "React.PureComponent почти такой же, как React.Component. Основное отличие состоит в том, что первый не реализует метод shouldComponentUpdate ()",
    ],
    rightAnswer: 2,
  },
  {
    question: "Какой метод любого React компонента вызывается первым?",
    options: [
      "render",
      "componentDidMount",
      "componentWillMount",
      "constructor",
    ],
    rightAnswer: 3,
  },
  {
    question: "Что такое подъем состояния вверх?",
    options: [
      "Обновление props родительского элемента .",
      "Процесс подъема состояния изменившегося компонента до ближайшего общего предка, чтобы обновить необходимые компоненты.",
      "Обновление состояния дочерних компонентов",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Выберите правильный синтаксис для обработчика события “щелчок по кнопке” foo.",
    options: [
      "<button onclick={this.foo()}>",
      "<button onclick={this.foo}>",
      "<button onClick={this.foo()}>",
      "<button onClick={this.foo}>",
    ],
    rightAnswer: 2,
  },
  {
    question: "Что происходит при вызове setState() в методе render()?",
    options: [
      "На экране появляется повторяющийся вывод",
      "Ошибка клавиши дублирования",
      "Ошибка переполнения стека",
      "Ничего не происходит",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Как создать встроенный стиль в JSX, указывая font-size:12px и color:red;.",
    options: [
      "style={{font-size:12,color:'red'}}",
      "style={{fontSize:'12px',color:'red'}}",
      "style={{font-size:12px,color:'red'}}",
      "style={fontSize:'12px',color:'red'}",
    ],
    rightAnswer: 3,
  },
  {
    question: "Что такое ReactJS?",
    options: [
      "Библиотека для создания интерфейсов взаимодействия",
      "Фреймворк пользовательского интерфейса",
      "Фреймворк на стороне сервера",
    ],
    rightAnswer: 0,
  },
  {
    question: "Выберите правильный ответ касательно JSX",
    options: [
      "JSX работает быстрее, так как он выполняет оптимизацию при компиляции кода в JavaScript",
      "JSX - это синтаксическая нотация для JavaScript XML",
      "JSX обеспечивает выразительные возможности JavaScript вместе с HTML подобно синтаксическому шаблону",
      "Все вышеперечисленные",
    ],
    rightAnswer: 3,
  },
  {
    question: "Произвольный входной сигнал компонентов называется...",
    options: ["Keys", "Props", "Elements", "Ref"],
    rightAnswer: 1,
  },
  {
    question:
      "ref используется для ссылки на элемент/компонент, возвращаемый...",
    options: ["react()", "render()", "reduce()", "refer()"],
    rightAnswer: 1,
  },
  {
    question: "Где правильно выведен компонент через рендер",
    options: ["{Test /}", "<Test >", "</ Test>", "<Test />"],
    rightAnswer: 3,
  },
  {
    question: "Как обратится к свойству weight?",
    options: [
      "{this.weight}",
      "{this.props.weight}",
      "{this.prop.weight}",
      "{props.weight}",
    ],
    rightAnswer: 1,
  },
  {
    question: "Чем свойства отличаются от состояний?",
    options: [
      "Свойства можно изменять, состояния нельзя",
      "Свойства для работы со значениями, состояния для работы с функциями",
      "Состояния для работы со значениями, свойства для работы с функциями",
      "Состояния можно изменять, свойства нельзя",
    ],
    rightAnswer: 3,
  },
  {
    question: "Как много компонентов может быть на сайте?",
    options: [
      "Не более 100",
      "Не более 300",
      "Не более 50",
      "Неограниченное количество",
    ],
    rightAnswer: 3,
  },
  {
    question: "Сколько родительских элементов можно вывести одновременно?",
    options: [
      "Не более 1",
      "Не более 3",
      "Не более 10",
      "Неограниченное количество",
    ],
    rightAnswer: 0,
  },
  {
    question: "Какой метод отвечает за вывод информации?",
    options: ["ReactDOM", "render", "reduce", "refer"],
    rightAnswer: 1,
  },
  {
    question: "Куда можно встроить готовый код из метода render()?",
    options: [
      "Только в div",
      "Только в тег, у которого есть id",
      "В любой тег",
      "В div или же в span",
    ],
    rightAnswer: 2,
  },
  {
    question: "React JS это...",
    options: ["MVC-фреймворк", "фреймворк", "JavaScript библиотека"],
    rightAnswer: 2,
  },
  {
    question: "Какая компания разработала React JS?",
    options: ["Facebook", "Amazon", "Google", "Twitter"],
    rightAnswer: 0,
  },
];
