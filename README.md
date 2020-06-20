# Курсы по фронтенду в УрФУ 2019-2020

Итоговый проект по дисциплине.
[Сервис](https://miraplane-task-2019.herokuapp.com/) размещен в облаке Heroku.

## Используемые технологии

Первая версия приложения построена на следующих технологиях:

- [TypeScript](https://www.typescriptlang.org)
- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com/ru/)
- [PostgreSQL](https://www.postgresql.org)
- [Sequelize](http://docs.sequelizejs.com)
- [Handlebars for Express.js](https://github.com/pillarjs/hbs)

Вторая версия приложения построена на том же набор технологии, но для клиентской логики на стороне браузера теперь используется чистый JavaScript, DOM и другие API браузера.

В третьей версии приложения вместо handlebars и чистого JavaScript для организации всего клиентского кода используется React.

## Доступные команды

| Команда | Действие |
| ------------- | ------------- |
| clean | Удаление зависимостей и собранных файлов |
| build | Коипиляция next.js приложения |
| lint | Запуск всех проверок |
| lint:css | Проверка css файлов на codestyle |
| lint:js | Проверка JavaScript файлов на codestyle |
| deps:all | Установка всех зависимостей |
| deps:production | Установка зависимостей, ноебходимых только для работы приложения |
| dev | Запуск приложения в режиме разработки |
| dev:evn | Добавить переменные окружения |
| docker:build | Локальная сборка Docker-образа |
| docker:run | Локальный запуск контейнера с приложением |
| heroku:login | Авторизация в Heroku |
| heroku:push | Сборка и отправка образа в Heroku |
| heroku:release | Запуск контейнера с приложением в Heroku |
| heroku:open | Открытие браузера с приложение в Heroku |
| heroku:logs | Просмотр логов приложения в Heroku |
| heroku | Деплой приложения в Heroku |
| heroku-init | Создание приложения в Heroku |
| start | Старт приложения |
| surge | Деплой статики в Surge |
| deploy | Сборка приложения, деплой приложения в Heroku и деплой статики в Surge |
