import { uuid } from './utils'

export default {
    name: 'workshop',
    columns: [
        {
            name: 'Активные',
            tasks: [
                {
                    description: 'Сверстать landing page для промо акции',
                    name: 'Верстка lainding page',
                    id: uuid(),
                },
                {
                    description: 'Выгрузка данных с таблицы products',
                    name: 'Выгрузка данных от товарах',
                    id: uuid(),
                },
                {
                    description: '',
                    name: 'Реализовать двухфакторную аутентификацию на сайте',
                    id: uuid(),
                }
            ]
        },
        {
            name: 'Выполненные',
            tasks: [
                {
                    description: 'Разработать портал для сотрудников HR',
                    name: 'Разработка портала для HR',
                    id: uuid(),
                },
                {
                    description: '',
                    name: 'Перенести систему с Vue в Nuxt',
                    id: uuid(),
                },
                {
                    description: '',
                    name: 'Добавить логи запросов в систему',
                    id: uuid(),
                }
            ]
        },
        {
            name: 'Архив',
            tasks: []
        }
    ]
}