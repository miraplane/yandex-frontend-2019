'use strict';

const Scene = require('../models').Scene;
const currentDate = new Date();

module.exports = () => Scene.bulkCreate([
    {
        content: 'Древнее зло пробудилось. Оно уничтожает города один за другим. Горстка выживших просят вас о помощи. Готовы ли вы бросить ему вызов?',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/evil.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы убежали и остались целы. Мудрый поступок!',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/images/run.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Выберите заклинание',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/book.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Начинается бой...',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/Jace.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Вы храбро сражались. До самой смерти.',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/images/dead.jpg',
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
        img: 'http://miraplane-task-2019.surge.sh/images/threeHeroes.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Чем сегодня займутся сестрички TRIX?',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/images/wathsapp.png',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В библиотеке оказалось жутко скучно',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/lib.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В бой...',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/trixvswinx.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Ура! Каникулы, можно пойти погулять, поиграть с друзьями, что же выбрать?',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/stayhome.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Я в домике и тут хорошо :)',
        contentPosition: 'leftBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/yvdom.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Куда на этот раз отправимся братцы?',
        contentPosition: 'rightTop',
        img: 'http://miraplane-task-2019.surge.sh/images/wheretogo.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/sea.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/egypt.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/res.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/total_war.jpg',
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
        img: 'http://miraplane-task-2019.surge.sh/images/nif.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/nuf.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        img: 'http://miraplane-task-2019.surge.sh/images/naf.jpg',
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
        img: 'http://miraplane-task-2019.surge.sh/images/home.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'Спряч котлетку так, что бы ее никто не нашел',
        contentPosition: 'leftTop',
        img: 'http://miraplane-task-2019.surge.sh/images/eat.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    },
    {
        content: 'В животике самое надежное место!!!',
        contentPosition: 'rightBottom',
        img: 'http://miraplane-task-2019.surge.sh/images/happy.jpg',
        createdAt: currentDate,
        updatedAt: currentDate
    }

    ]);
