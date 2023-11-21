export const utilService = {
    setDataTime,
    getStatus,
    onSorting
}


function setDataTime(start, end) {
    const startDate = new Date(start)
    const endDate = new Date(end)

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };

    const formattedStartDate = startDate.toLocaleString('ru-RU', options)
    const formattedEndDate = endDate.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    const result = `${formattedStartDate}-${formattedEndDate}`

    return result
}

function getStatus(status) {
    if (status === 'planned') return 'Запланировано'
    if (status === 'completed') return 'Завершено'
    if (status === 'examination') return 'Идет'
    if (status === 'canceled') return 'Отменено'
}


function onSorting(param, data) {
    let sortedData = data
    if (param === 'time') {
        sortedData.sort((a, b) => {
            const nameA = a.start.toUpperCase();
            const nameB = b.start.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

    if (param === 'status') {
        sortedData.sort((a, b) => {
            const nameA = a.status.name.toUpperCase();
            const nameB = b.status.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

    if (param === 'module') {
        sortedData.sort((a, b) => {
            const nameA = a.module.toUpperCase();
            const nameB = b.module.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

    if (param === 'type') {
        sortedData.sort((a, b) => {
            const nameA = a.type.name.toUpperCase();
            const nameB = b.type.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

    if (param === 'rooms') {
        sortedData.sort((a, b) => {
            const nameA = a.rooms[0].name.toUpperCase();
            const nameB = b.rooms[0].name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

    if (param === 'groups') {
        sortedData.sort((a, b) => {

            if (a.groups < 1) return 1
            if (b.groups < 1) return -1
            const nameA = a.groups[0].name.toUpperCase();
            const nameB = b.groups[0].name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        return (sortedData)
    }

}