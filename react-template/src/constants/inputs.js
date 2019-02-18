/* eslint-disable */

/*
 text - текст Input
 number - число Input
 list
 - если количество == 2, то RadioButtons (сюда же относим Да/Нет, Нет/Да)
 - если количество >  2, то Select
 */

import Input from '../components/Input';
import LargeText from '../components/LargeText';
import SmallText from '../components/SmallText';
import CustomSelect from '../components/CustomSelect';
import DatePicker from '../components/DatePicker';
import RadioButtons from '../components/RadioButtons';

export default {
  '0': {
    id: 0,
    name: 'projectName',
    type: 'text',
    component: Input,
    label: 'Название проекта',
    width: '712px',
    lengthText: 512,
    form: 'projectInfo',
  },

  '1': {
    id: 1,
    isReadOnly: true,
    name: 'legalForm',
    width: '712px',
    type: 'text',
    component: Input,
    componentDisplay: SmallText,
    label: 'Организационно-правовая форма',
    form: 'developer',
  },

  '2': {
    id: 2,
    isReadOnly: true,
    name: 'developerName',
    width: '712px',
    type: 'text',
    component: Input,
    componentDisplay: LargeText,
    label: 'Наименование застройщика',
    form: 'developer',
  },

  // Пока не нужен. Не прошел UX-тестирование у дизайнеров
  // '3': {
  //   id: 3,
  //   name: 'inn',
  //   type: 'number',
  //   subtype: 'integer',
  //   component: Input,
  //   label: 'ИНН застройщика',
  //   form: 'developer',
  // },

  '4': {
    id: 4,
    name: 'companyGroup',
    isReadOnly: true,
    type: 'text',
    component: Input,
    label: 'Группа компаний',
    width: '712px',
    helpText: 'Укажите название группы, в которую входит застройщик',
    form: 'developer',
  },

  '5': {
    id: 5,
    name: 'investmentType',
    type: 'list',
    component: CustomSelect,
    label: 'Порядок привлечения дольщиков в проект',
    width: '712px',
    helpText:
      'В случае, если порядок привлечения дольщиков уже определен, необходимо выбрать либо "Долевое строительство", либо "Эскроу". В случае, если порядок привлечения не определен, необходимо выбрать "Не определен"',
    itemsName: ['Долевое финансирование', 'Эскроу', 'Не определено'],
    itemsId: ['SHARE', 'ESCROW', 'UNDEFINED'],
    form: 'projectInfo',
  },

  '6': {
    id: 6,
    name: 'expectedLoanLimit',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Ожидаемая сумма кредитного лимита',
    width: '336px',
    postfix: ' тыс. ₽',
    form: 'projectInfo',
  },

  '7': {
    id: 7,
    name: 'expectedLoanRate',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Ожидаемая процентная ставка',
    width: '336px',
    helpText:
      'В % годовых\nПри выборе "Эскроу" в качестве порядка привлечения дольщиков, указывается ожидаемая ставка по кредиту при отсутствии средств на счетах эскроу',
    postfix: ' тыс. ₽',
    validateMessage: 'Должно быть указано значение не более 20%',
    form: 'projectInfo',
  },

  '8': {
    id: 8,
    name: 'buildingPermitsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label:
      'Общее количество действующих разрешений на строительство с учетом данного проекта *',
    helpText: 'шт.',
    width: '336px',
    postfix: ' шт.',
    childs: ['8.1'],
    form: 'documents',
  },
  '8.1': {
    id: 8.1,
    name: 'isFundAllBuildingPermits',
    type: 'list',
    component: RadioButtons,
    label:
      'Рассматриваете ли Вы возможность финансирования Банком всех проектов в рамках действующих РнС у застройщика?',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    limits: 1,
    form: 'documents',
  },

  '9': {
    id: 9,
    name: 'buildingPermitDate',
    type: 'date',
    component: DatePicker,
    label: 'Дата выдачи РнС для данного проекта*',
    width: '336px',
    form: 'documents',
  },

  '10': {
    id: 10,
    name: 'isEquityAgreementSold',
    type: 'list',
    component: RadioButtons,
    label: 'Факт продажи не менее 1 ДДУ по проекту*',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    childs: ['10.1'],
    form: 'documents',
  },
  '10.1': {
    id: 10.1,
    name: 'firstEquityAgreementSaleDate',
    type: 'date',
    component: DatePicker,
    label: 'Дата продажи первого ДДУ',
    mask: '99.99.9999',
    limits: ['Да'],
    form: 'documents',
  },

  '11': {
    id: 11,
    name: 'commissioningPlanDate',
    type: 'date',
    component: DatePicker,
    width: '336px',
    label: 'Плановая дата ввода проекта* в эксплуатацию',
    mask: '99.99.9999',
    form: 'documents',
  },

  // Это подпись. Вбита текстом в FormInfo, мешает при подсчете прогресса
  // '12': {
  //   id: 12,
  //   name: 'generalContractorExperience',
  //   label:
  //     'Опыт застройщика/ГК в качестве генерального подрядчика/тех.заказчика за последние 5 лет',
  //   form: 'developer',
  // },
  '12.1': {
    id: 12.1,
    name: 'yearsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Количество полных лет',
    width: '336px',
    helpText:
      'Если опыт составляет 3 года и 7 месяцев, в данном поле указывается 3',
    childs: ['12.3', '12.4'],
    form: 'developer',
  },
  '12.2': {
    id: 12.2,
    name: 'monthsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Количество месяцев',
    width: '336px',
    helpText:
      'Если опыт составляет 3 года и 7 месяцев, в данном поле указывается 7',
    childs: ['12.3', '12.4'],
    form: 'developer',
  },
  '12.3': {
    id: 12.3,
    name: 'projectsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label:
      'Количество реализованных проектов в качестве генерального подрядчика / тех.заказчика',
    width: '336px',
    helpText: 'Общее число проектов',
    postfix: ' ед.',
    limits: 0,
    form: 'developer',
  },
  '12.4': {
    id: 12.4,
    name: 'similarProjectsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label:
      'Количество реализованных похожих проектов в качестве генерального подрядчика / тех.заказчика',
    width: '336px',
    helpText: 'Количество похожих проектов',
    postfix: ' ед.',
    limits: 0,
    validateMessage:
      'Значение должно меньше либо равно значению в поле "Количество реализованных проектов в качестве генерального подрядчика/тех.заказчика"',
    form: 'developer',
  },

  // Это подпись. Вбита текстом в FormInfo, мешает при подсчете прогресса
  // '13': {
  //   id: 13,
  //   name: 'developerExperience',
  //   label: 'Опыт строительства застройщика / ГК в качестве застройщика',
  //   form: 'developer',
  // },/
  '13.1': {
    id: 13.1,
    name: 'yearsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Количество полных лет',
    width: '336px',
    helpText:
      'Если опыт составляет 3 года и 7 месяцев, в данном поле указывается 3',
    form: 'developer',
  },
  '13.2': {
    id: 13.2,
    name: 'monthsCount',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Количество месяцев',
    width: '336px',
    helpText:
      'Если опыт составляет 3 года и 7 месяцев, в данном поле указывается 7',
    validateMessage: 'Значение должно быть меньше либо равно "11"',
    form: 'developer',
  },

  '14': {
    id: 14,
    name: 'builtArea',
    type: 'number',
    subtype: 'float',
    component: Input,
    label:
      'Построенная застройщиком / ГК общая площадь проектов в качестве застройщика',
    width: '336px',
    helpText:
      'Под определение "проекты" попадает жилье, апартаменты, таунхаусы',
    postfix: ' м²',
    form: 'developer',
  },

  '15': {
    id: 15,
    name: 'similarProjectsCount',
    type: 'list',
    component: CustomSelect,
    label:
      'Количество реализованных строительных проектов в качестве застройщика за последние 5 лет',
    width: '336px',
    helpText:
      'Под определение "проекты" попадает жилье, апартаменты, таунхаусы\n\n' +
      'Проект считает "реализованным" при условии сдачи объекта в эксплуатацию и продажи не менее 85% площадей соответствующего проекта',
    itemsName: ['Отсутствует', '1', '2', '3', 'Более 3'],
    itemsId: ['ABSENT', 'ONE', 'TWO', 'THREE', 'MORE_THAN_3'],
    form: 'developer',
  },

  '16': {
    id: 16,
    name: 'projectsCount',
    type: 'list',
    component: CustomSelect,
    label:
      'Количество реализованных проектов, подобных испрашиваемому к финансированию, в качестве застройщика за последние 5 лет',
    width: '336px',
    helpText:
      'Под определение "проекты" попадает жилье, апартаменты, таунхаусы\n\n' +
      'Проект считает "реализованным" при условии сдачи объекта в эксплуатацию и продажи не менее 85% площадей соответствующего проекта\n\n' +
      'Критерии "подобности" - тип объекта (жилье, апартаменты, таунхаусы) и общая площадь. В случае, если общая площадь ранее реализованного проекта больше испрашиваемого к финансированию ЛИБО меньше не более, чем на 10%, такой проект проходит критерий "подобности" по общей площади',
    itemsName: ['Отсутствует', '1', '2', '3', 'Более 3'],
    itemsId: ['ABSENT', 'ONE', 'TWO', 'THREE', 'MORE_THAN_3'],
    form: 'developer',
  },

  '17': {
    id: 17,
    name: 'completeOnTimeProjectsShare',
    type: 'list',
    component: CustomSelect,
    label:
      'Доля реализованных застройщиком / ГК проектов без задержек строительства',
    width: '336px',
    helpText:
      'Под определение "проекты" попадает жилье, апартаменты, таунхаусы\n\n' +
      'Критерий задержки - сдача проекта в эксплуатацию в срок позднее даты, указанной в первоначальном разрешении на строительство (без учета его продления)',
    itemsName: ['Менее 25%', '25-50%', '50-75%', 'Более 75%'],
    itemsId: ['LESS_THAN_25', 'BETWEEN_25_50', 'BETWEEN_50_75', 'MORE_THAN_75'],
    form: 'developer',
  },

  '18': {
    id: 18,
    name: 'fundingProjectClass',
    type: 'list',
    component: CustomSelect,
    label: 'Класс проекта',
    width: '336px',
    itemsName: ['Эконом', 'Комфорт', 'Бизнес', 'Элитный'],
    itemsId: ['ECONOMICAL', 'COMFORT', 'BUSINESS', 'ELITE'],
    form: 'projectInfo',
  },

  '19': {
    id: 19,
    name: 'propertyType',
    type: 'list',
    component: CustomSelect,
    label: 'Тип недвижимости, предназначенной для проживания граждан',
    width: '336px',
    itemsName: [
      'многоквартирный дом',
      'жилой дом блокированной застройки, состоящий из 3 и более блоков',
      'нежилое здание',
      'жилой блок в блокированном жилом доме с приусадебном участке',
      'социальный объект',
      'одноквартирный жилой дом',
      'неактивный объект',
    ],
    form: 'projectInfo',
    // список загружается с сервера
  },

  '20': {
    id: 20,
    name: 'subjectRF',
    type: 'list',
    component: CustomSelect,
    label: 'Субъект федерации, в котором реализуется проект',
    width: '336px',
    form: 'projectInfo',
    // список загружается с сервера
  },

  '21': {
    id: 21,
    name: 'landRight',
    type: 'list',
    component: CustomSelect,
    label: 'Земельные правоотношения в рамках проекта',
    width: '336px',
    itemsName: [
      'право собственности',
      'право аренды',
      'право субаренды',
      'право безвозмездного пользования',
    ],
    childs: ['21.1', '21.2'],
    form: 'projectInfo',
    // список загружается с сервера
  },
  '21.1': {
    id: 21.1,
    name: 'landlordName',
    type: 'text',
    component: Input,
    label:
      'Наименование арендодателя / уполномоченного органа, предоставившего земельный участок',
    width: '336px',
    helpText:
      'Полное наименование арендодателя с учетом организационно-правовой формы',
    limits: [
      'право аренды',
      'право субаренды',
      'право безвозмездного пользования',
    ],
    form: 'projectInfo',
  },
  '21.2': {
    id: 21.2,
    name: 'rentEndDate',
    type: 'date',
    component: DatePicker,
    label:
      'Дата окончания действия договора аренды / права безвозмездного пользования',
    width: '336px',
    helpText: 'Не заполняется, если договор бессрочный',
    mask: '99.99.9999',
    limits: ['право аренды', 'право субаренды'],
    form: 'projectInfo',
  },

  '22': {
    id: 22,
    name: 'landRightPurchasePrice',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Цена приобретения прав на земельный участок для реализации проекта',
    width: '336px',
    helpText: 'В тыс.руб.',
    postfix: ' тыс. ₽',
    form: 'projectInfo',
  },

  '23': {
    id: 23,
    name: 'isLandRightPurchaseDebt',
    type: 'list',
    component: RadioButtons,
    label:
      'Наличие задолженности по оплате за приобретение прав на земельный участок для реализации проекта',
    width: '336px',
    itemsName: ['Отсутствует', 'Имеется'],
    itemsId: [false, true],
    childs: ['23.1'],
    form: 'projectInfo',
  },
  '23.1': {
    id: 23.1,
    name: 'landRightPurchaseDebtValue',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label:
      'Размер задолженности по оплате за приобретенные права на земельный участок',
    width: '336px',
    helpText: 'В тыс.руб.',
    postfix: ' тыс. ₽',
    limits: ['Имеется'],
    validateMessage:
      'Значение должно быть меньше либо равно значению в поле "Цена приобретения прав на земельный участок для реализации"',
    form: 'projectInfo',
  },

  '24': {
    id: 24,
    name: 'isPermittedUsePurchaseDebt',
    type: 'list',
    component: RadioButtons,
    label:
      'Наличие задолженности по оплате за изменение ВРИ земельного участка для реализации проекта',
    width: '336px',
    itemsName: ['Отсутствует', 'Имеется'],
    itemsId: [false, true],
    childs: ['24.1'],
    form: 'projectInfo',
  },
  '24.1': {
    id: 24.1,
    name: 'permittedUsePurchaseDebtValue',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Размер задолженности за изменение ВРИ земельного участка',
    width: '336px',
    helpText: 'В тыс.руб.',
    postfix: ' тыс. ₽',
    limits: ['Имеется'],
    form: 'projectInfo',
  },

  '25': {
    id: 25,
    name: 'fundingProjectArea',
    type: 'number',
    subtype: 'float',
    component: Input,
    label: 'Общая площадь в соответствии с РнС',
    width: '336px',
    helpText: 'В кв.м.',
    postfix: ' м²',
    form: 'projectInfo',
  },

  '26': {
    id: 26,
    name: 'isRecoveryClaim',
    type: 'list',
    component: RadioButtons,
    label:
      'Наличие исков о взыскании денежных средств и / или имущества (застройщик в качестве ответчика)',
    width: '336px',
    itemsName: ['Отсутствуют', 'Имеются'],
    itemsId: [false, true],
    childs: ['26.1', '26.2'],
    form: 'projectInfo',
  },
  '26.1': {
    id: 26.1,
    name: 'recoveryClaimValue',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Сумма исковых требований к застройщику',
    width: '336px',
    helpText: 'В тыс.руб.',
    postfix: ' тыс. ₽',
    limits: ['Имеются'],
    form: 'projectInfo',
  },
  '26.2': {
    id: 26.2,
    name: 'developerAssetsValue',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Чистые активы застройщика',
    width: '336px',
    helpText: 'В тыс.руб.',
    postfix: ' тыс. ₽',
    limits: ['Имеются'],
    form: 'projectInfo',
  },

  '27': {
    id: 27,
    name: 'isReadyBankSystemsDocumentFlow',
    type: 'list',
    component: RadioButtons,
    label:
      'Готовность к использованию банковских систем электронного документооборота',
    width: '336px',
    itemsName: ['Да', 'Нет'],
    itemsId: [true, false],
    form: 'projectInfo',
  },

  '28': {
    id: 28,
    name: 'developerBeneficiaries',
    type: 'arrayItems',
    component: Input,
    label: 'Номер бенефициара',
    form: 'projectInfo',
  },
  // Нет на форме
  // '28.1': {
  //   id: 28.1,
  //   name: 'rowNum',
  //   type: 'number',
  //   subtype: 'integer',
  //   component: Input,
  //   label: 'Номер бенефициара',
  //   form: 'projectInfo',
  // },
  '28.2': {
    id: 28.2,
    name: 'beneficiaryName',
    type: 'text',
    component: Input,
    label: 'Наименование бенефициара',
    width: '464px',
    isRequired: true,
    form: 'projectInfo',
  },
  '28.3': {
    id: 28.3,
    name: 'beneficiaryShare',
    type: 'number',
    subtype: 'float',
    component: Input,
    label: 'Доля владения',
    width: '192px',
    postfix: ' %',
    isRequired: true,
    validateMessage: 'Должно быть указано значение в диапазоне от 0 до 100',
    form: 'projectInfo',
  },

  '29': {
    id: 29,
    name: 'isTechnicalCustomerContractSigned',
    type: 'list',
    component: RadioButtons,
    mainTitle: 'Договор с тех. заказчиком',
    label: 'Наличие подписанного договора для реализации проекта*',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    childs: ['29.1', '29.2', '29.3'],
    form: 'documents',
  },
  '29.1': {
    id: 29.1,
    name: 'technicalCustomerName',
    type: 'text',
    component: Input,
    label: 'Наименование технического заказчика',
    width: '336px',
    helpText:
      'Полное наименование технического заказчика с учетом организационно-правовой формы',
    limits: ['Да'],
    form: 'documents',
  },
  '29.2': {
    id: 29.2,
    name: 'technicalCustomerInn',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'ИНН технического заказчика',
    width: '336px',
    limits: ['Да'],
    validateMessage: 'ИНН заполнен неверно',
    form: 'documents',
  },
  '29.3': {
    id: 29.3,
    name: 'isAffiliationTechnicalCustomer',
    type: 'list',
    component: RadioButtons,
    label: 'Аффилированность технического заказчика с застройщиком / ГК',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    limits: ['Да'],
    form: 'documents',
  },

  '30': {
    id: 30,
    name: 'isContractGeneralContractorSigned',
    type: 'list',
    component: RadioButtons,
    mainTitle: 'Договор с ген.подрядчиком',
    label: 'Наличие подписанного договора для реализации проекта*',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    childs: ['30.1', '30.2', '30.3'],
    form: 'documents',
  },
  '30.1': {
    id: 30.1,
    name: 'generalContractorName',
    type: 'text',
    component: Input,
    label: 'Наименование генерального подрядчика',
    width: '336px',
    helpText:
      'Полное наименование технического заказчика с учетом организационно-правовой формы',
    limits: ['Да'],
    form: 'documents',
  },
  '30.2': {
    id: 30.2,
    name: 'generalContractorInn',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'ИНН генерального подрядчика',
    width: '336px',
    limits: ['Да'],
    form: 'documents',
    validateMessage: 'ИНН заполнен неверно',
  },
  '30.3': {
    id: 30.3,
    name: 'isAffiliationGeneralContractor',
    type: 'list',
    component: RadioButtons,
    label: 'Аффилированность генерального подрядчика с застройщиком / ГК',
    width: '336px',
    itemsName: ['Нет', 'Да'],
    itemsId: [false, true],
    limits: ['Да'],
    form: 'documents',
  },

  '31': {
    id: 31,
    type: 'arrayItems',
    name: 'mortgagedPropertyGuarantee',
    label: 'Имущественное обеспечение',
    form: 'developer',
  },
  '31.1': {
    id: 31.1,
    name: 'mortgagedPropertyType',
    type: 'text',
    component: Input,
    label: 'Вид обеспечения',
    width: '464px',
    helpText:
      'Вид альтернативного имущественного обеспечения (земельный участок, акции/доли и т.д.)',
    isRequired: true,
    form: 'developer',
  },
  '31.2': {
    id: 31.2,
    name: 'mortgagedPropertyCost',
    type: 'number',
    subtype: 'integer',
    component: Input,
    label: 'Рыночная стоимость',
    width: '192px',
    helpText:
      'В тыс.руб.\n\n' +
      'необходимо занести его оценочную рыночную стоимость без НДС',
    postfix: ' тыс. ₽',
    isRequired: true,
    form: 'developer',
  },

  '32': {
    id: 32,
    name: 'developerContactDetails',
    label: 'Контактные данные представителя застройщика',
    form: 'developer',
  },
  '32.1': {
    id: 32.1,
    name: 'lastName',
    type: 'text',
    component: Input,
    label: 'Фамилия',
    width: '211px',
    form: 'developer',
  },
  '32.2': {
    id: 32.2,
    name: 'firstName',
    type: 'text',
    component: Input,
    label: 'Имя',
    width: '211px',
    form: 'developer',
  },
  '32.3': {
    id: 32.3,
    name: 'middleName',
    type: 'text',
    component: Input,
    label: 'Отчество (если есть)',
    width: '211px',
    form: 'developer',
  },
  '32.4': {
    id: 32.4,
    name: 'phoneNumber',
    type: 'text',
    component: Input,
    label: 'Контактный телефон',
    mask: '+7 (000) 000 00 00',
    validateMessage: 'Номер телефона заполнен неверно',
    width: '336px',
    form: 'developer',
  },
  '32.5': {
    id: 32.5,
    name: 'email',
    type: 'text',
    component: Input,
    label: 'Еmail',
    placeholder: 'Example@mail.ru',
    validateMessage: 'Некорректный Email',
    width: '336px',
    form: 'developer',
  },
};
