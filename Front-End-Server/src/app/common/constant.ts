export const Constants = {
    navLinks: [
        {
            label: 'User',
            path: './user',
            index: 0
        }, {
            label: 'Todo App',
            path: './todo',
            index: 1
        }, {
            label: 'Weather',
            path: './weather',
            index: 2
        }, {
            label: 'News',
            path: './news',
            index: 3
        },
    ],
    siteKey: '6LeVkKwUAAAAAMVxE5TOuLMGDmUcSaosdHi7Mdqm', // captcha
    secretKey: '6LeVkKwUAAAAAC_vlSZz_rpcEOKnA3VtE7pQRB8S', // captcha
    apiKey: 'AIzaSyB4uj7QKxYsEyushHyGFd-0gOYfOpzntsA', // ggmap - vinmart +
    // apiKey: 'AIzaSyBEcMt890KQQSgWBHrjlvuDvI74uIBPwYU' // ggmap
    Things: {
        '0': {
            title: 'Share', values: [
                { id: 0, thing: 'Style Snack Bar', isDone: true },
                { id: 1, thing: 'Routing and Auth Guard', isDone: true },
                { id: 2, thing: 'Creat database to store to-do list and user information', isDone: false },
                { id: 3, thing: 'i18n - multi language', isDone: false },
                { id: 4, thing: 'Pre-load Animation', isDone: true },
            ]
        },
        '1': {
            title: 'User', values: [
                { id: 0, thing: 'Check valid password on login/signup', isDone: true },
                { id: 1, thing: 'Send data to backend server on login/signup', isDone: true },
                { id: 2, thing: 'Add logout button', isDone: true },
                { id: 3, thing: 'Use Captcha on signin', isDone: true },
                { id: 4, thing: 'Add loading to login/signup button on click', isDone: true },
                { id: 5, thing: 'Add reCaptcha to signup Form', isDone: false },
                { id: 6, thing: 'Add icon to User input field and show/hide password on click', isDone: true },
                { id: 7, thing: 'Store User information on Session storage', isDone: true },
            ]
        },
        '2': {
            title: 'To-do List', values: [
                { id: 0, thing: 'Re-desgin: Using Expansion Panel', isDone: true },
                { id: 1, thing: 'EditBtn show diaglog to edit thing on click', isDone: true },
                { id: 2, thing: 'View completed and active thing on Display Option', isDone: true },
            ]
        },
        '3': {
            title: 'Weather', values: [
                { id: 0, thing: 'Get data from OpenWeatherMap API', isDone: true },
                { id: 1, thing: 'Show weather info on Popup Dialog', isDone: true },
                { id: 2, thing: 'Add map to weather info', isDone: true },
            ]
        },
        '4': {
            title: 'News', values: [
                { id: 0, thing: 'Get News form newsapi.org', isDone: false },
            ]
        }
    }
};
