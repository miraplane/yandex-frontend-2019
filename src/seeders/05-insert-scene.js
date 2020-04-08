'use strict';

const Scene = require('../models').Scene;
const currentDate = new Date();

module.exports = () => Scene.bulkCreate([
    {
        content: 'Древнее зло пробудилось. Оно уничтожает города один за другим. Горстка выживших просят вас о помощи. Готовы ли вы бросить ему вызов?',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/evil.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы убежали и остались целы. Мудрый поступок!',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/run.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Выберите заклинание',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/book.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Начинается бой...',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/Jace.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы храбро сражались. До самой смерти.',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/dead.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Первым из героев был волшебник Амадей. Вторым был рыцарь Понтий, бесстрашный защитник королевства. И, наконец, Зоя, таинственная фигура.',
        contentPosition: 'leftTop',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/threeHeroes.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Чем сегодня займутся сестрички TRIX?',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/wathsapp.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В библиотеке оказалось жутко скучно',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/lib.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В бой...',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/trixvswinx.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Ура! Каникулы, можно пойти погулять, поиграть с друзьями, что же выбрать?',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/stayhome.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Я в домике и тут хорошо :)',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/yvdom.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Куда на этот раз отправимся братцы?',
        contentPosition: 'rightTop',
        img: 'http://miraplane-task-2019.surge.sh/wheretogo.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/sea.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/egypt.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/res.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/total_war.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Выбери материал для построения домика',
        contentPosition: 'leftBottom',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/nif.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/nuf.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/naf.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'А какой путь выберешь ты?',
        contentPosition: 'leftBottom',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/home.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Спряч котлетку так, что бы ее никто не нашел',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/eat.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В животике самое надежное место!!!',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/happy.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    }

    ]);
