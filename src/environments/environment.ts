// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    user: '/auth',
    todo: '/api/todo',
    weather: 'https://api.openweathermap.org/data/2.5/find?units=metric&appid=85e3470a63c593af3034af2e8513e04f&q='
  }
};
