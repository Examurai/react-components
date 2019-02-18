export const getProject = inputs => {
  return [
    {
      items: [{ ...inputs['0'], marginTop: '0px' }],
    },
    {
      items: [inputs['19'], { ...inputs['20'], marginLeft: '40px' }],
    },
    {
      items: [inputs['18'], { ...inputs['25'], marginLeft: '40px' }],
    },
    {
      items: [inputs['22'], { ...inputs['21'], marginLeft: '40px' }],
    },
    {
      items: [
        {
          ...inputs['21.1'],
          parent: ['21'],
          isShow: values =>
            values.some(value => inputs['21.1'].limits.includes(value)),
        },
        {
          ...inputs['21.2'],
          marginLeft: '40px',
          parent: ['21'],
          isShow: values =>
            values.some(value => inputs['21.2'].limits.includes(value)),
        },
      ],
    },
    {
      items: [
        {
          isColumn: true,
          width: '336px',
          items: [
            inputs['23'],
            {
              ...inputs['23.1'],
              marginTop: '40px',
              parent: ['23'],
              parentValidate: '22',
              isShow: values => values.some(value => inputs['23.1'].limits.includes(value)),
	            isValidate: (value1, value2) => value1 === '' || value2 === '' || parseInt(value1) <= parseInt(value2),
            },
          ],
        },
        {
          isColumn: true,
          width: '336px',
          marginLeft: '40px',
          items: [
            inputs['24'],
            {
              ...inputs['24.1'],
              marginTop: '40px',
              parent: ['24'],
              isShow: values => values.some(value => inputs['24.1'].limits.includes(value)),
            },
          ],
        },
      ],
    },
    {
      items: [inputs['26']],
    },
    {
      items: [
        {
          ...inputs['26.1'],
          parent: ['26'],
          isShow: values =>
            values.some(value => inputs['26.1'].limits.includes(value)),
        },
        {
          ...inputs['26.2'],
          marginLeft: '40px',
          parent: ['26'],
          isShow: values =>
            values.some(value => inputs['26.2'].limits.includes(value)),
        },
      ],
    },
    { delimiter: true },
    {
      title: 'Финансирование проекта',
      marginTop: '40px',
      items: [{ ...inputs['5'], marginTop: '40px' }],
    },
    {
      items: [
        inputs['6'],
        {
          ...inputs['7'],
          marginLeft: '40px',
          isValidate: value => value === '' || parseInt(value) <= 20,
        }
      ],
    },
    {
      items: [inputs['27']],
    },
    { delimiter: true },
  ];
};
export const getBuilder = inputs => {
  return [
    {
      items: [{ ...inputs['1'], marginTop: '0px' }],
    },
    {
      items: [inputs['2']],
    },
    {
      items: [inputs['4']],
    },
    {
      title: 'Контактные данные представителя застройщика',
      marginTop: '40px',
      items: [],
    },
    {
      items: [
        inputs['32.1'],
        { ...inputs['32.2'], marginLeft: '27px' },
        { ...inputs['32.3'], marginLeft: '52px' },
      ],
    },
    {
      items: [
        {
          ...inputs['32.4'],
          isValidate: value => value === '' || value.length === 10,
        },
        {
          ...inputs['32.5'],
          marginLeft: '40px',
	        isValidate: value => value === '' || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
        }
      ],
    },
    {
      delimiter: true,
    },
    {
      title:
        'Опыт застройщика/ГК в качестве генерального подрядчика/тех.заказчика за последние 5 лет',
      marginTop: '40px',
      width: '336px',
      items: [],
    },
    {
      items: [inputs['12.1'], { ...inputs['12.2'], marginLeft: '40px' }],
    },
    {
      items: [
        {
          ...inputs['12.3'],
          parent: ['12.1', '12.2'],
          isShow: values =>
            values.some(value => value !== '' && parseInt(value) !== 0),
        },
        {
          ...inputs['12.4'],
          parent: ['12.1', '12.2'],
	        parentValidate: '12.3',
          marginLeft: '40px',
          isShow: values => values.some(value => value !== '' && parseInt(value) !== 0),
          isValidate: (value1, value2) => value1 === '' || value2 === '' || parseInt(value1) <= parseInt(value2),
        },
      ],
    },

    {
      title: 'Опыт строительства застройщика / ГК в качестве застройщика',
      marginTop: '40px',
      width: '336px',
      items: [],
    },
    {
      items: [
        inputs['13.1'],
        {
          ...inputs['13.2'],
          marginLeft: '40px',
          isValidate: value => value.length < 12,
        }
      ],
    },
    {
      items: [inputs['16'], { ...inputs['15'], marginLeft: '40px' }],
    },
    {
      items: [inputs['17'], { ...inputs['14'], marginLeft: '40px' }],
    },
    {
      delimiter: true,
    },
  ];
};
export const getDocuments = inputs => {
  return [
    {
      items: [
        { ...inputs['8'], marginTop: '0px' },
        { ...inputs['9'], marginTop: '0px', marginLeft: '40px' },
      ],
    },
    {
      items: [
        {
          ...inputs['8.1'],
          parent: ['8'],
          isShow: values =>
            values.some(value => value !== '' && parseInt(value) > 1),
        },
      ],
    },
    {
      items: [inputs['10'], { ...inputs['11'], marginLeft: '40px' }],
    },
    {
      items: [
        {
          ...inputs['10.1'],
          parent: ['10'],
          isShow: values =>
            values.some(value => inputs['10.1'].limits.includes(value)),
        },
      ],
    },
    {
      items: [
        {
          title: 'Договор с тех. заказчиком ',
          marginTop: '40px',
          isColumn: true,
          width: '336px',
          items: [
            { ...inputs['29'], marginTop: '16px' },
            {
              ...inputs['29.1'],
              marginTop: '40px',
              parent: ['29'],
              isShow: values =>
                values.some(value => inputs['29.1'].limits.includes(value)),
            },
            {
              ...inputs['29.2'],
              marginTop: '40px',
              parent: ['29'],
              isShow: values => values.some(value => inputs['29.2'].limits.includes(value)),
              isValidate: value => value.length > 9 && value.length < 13,
            },
            {
              ...inputs['29.3'],
              marginTop: '40px',
              parent: ['29'],
              isShow: values =>
                values.some(value => inputs['29.3'].limits.includes(value)),
            },
          ],
        },
        {
          title: 'Договор с ген.подрядчиком',
          marginTop: '40px',
          isColumn: true,
          width: '336px',
          marginLeft: '40px',
          items: [
            { ...inputs['30'], marginTop: '16px' },
            {
              ...inputs['30.1'],
              marginTop: '40px',
              parent: ['30'],
              isShow: values =>
                values.some(value => inputs['30.1'].limits.includes(value)),
            },
            {
              ...inputs['30.2'],
              marginTop: '40px',
              parent: ['30'],
              isShow: values => values.some(value => inputs['30.2'].limits.includes(value)),
	            isValidate: value => value.length > 9 && value.length < 13,
            },
            {
              ...inputs['30.3'],
              marginTop: '40px',
              parent: ['30'],
              isShow: values =>
                values.some(value => inputs['30.3'].limits.includes(value)),
            },
          ],
        },
      ],
    },
    {
      note: '* Испрашиваемый к финансированию проект',
    },
    {
      delimiter: true,
    },
  ];
};
