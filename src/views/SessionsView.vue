<template>
    <div class="sessions">
        <div class="header">
            <span class="title">Учебные сессии</span>

            <div class="session-nav">
                <div className="search-panel">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.25 4C7.38401 4 4.25 7.13401 4.25 11C4.25 14.866 7.38401 18 11.25 18C15.116 18 18.25 14.866 18.25 11C18.25 7.13401 15.116 4 11.25 4ZM2.25 11C2.25 6.02944 6.27944 2 11.25 2C16.2206 2 20.25 6.02944 20.25 11C20.25 15.9706 16.2206 20 11.25 20C6.27944 20 2.25 15.9706 2.25 11Z"
                            fill="#999999" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.1929 15.9429C16.5834 15.5524 17.2166 15.5524 17.6071 15.9429L21.9571 20.2929C22.3476 20.6834 22.3476 21.3166 21.9571 21.7071C21.5666 22.0976 20.9334 22.0976 20.5429 21.7071L16.1929 17.3571C15.8024 16.9666 15.8024 16.3334 16.1929 15.9429Z"
                            fill="#999999" />
                    </svg>

                    <input @input="currPage = 1" v-model="searchTerm" type="text" placeholder='Поиск' />
                </div>
                <svg class="search-btn" width="45" height="44" viewBox="0 0 45 44" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" width="44" height="44" rx="12" fill="#F4F4F4" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.1968 12.9522C14.1968 12.9522 14.1969 12.9522 14.1968 12.9522H30.3031C30.594 12.9523 30.8789 13.037 31.1226 13.1961C31.3663 13.3551 31.5584 13.5815 31.6757 13.8478C31.7929 14.1141 31.8302 14.4087 31.7829 14.6958C31.7358 14.9824 31.6065 15.249 31.4107 15.4635C31.4103 15.4639 31.41 15.4643 31.4096 15.4647L25.25 22.2431V27.5462C25.2516 27.7957 25.1906 28.0416 25.0725 28.2615C24.9545 28.4809 24.7835 28.6673 24.5751 28.8035L21.578 30.7985L21.575 30.8005C21.3499 30.9487 21.0891 31.0336 20.8199 31.0461C20.5507 31.0587 20.2831 30.9985 20.0452 30.8719C19.8073 30.7453 19.6079 30.5569 19.4679 30.3266C19.328 30.0962 19.2527 29.8325 19.25 29.563L19.2499 29.5554L19.25 22.2432L19.248 22.2411L13.0904 15.4647C13.09 15.4644 13.0897 15.464 13.0894 15.4636C12.8935 15.2492 12.7642 14.9824 12.717 14.6958C12.6697 14.4087 12.707 14.1141 12.8243 13.8478C12.9415 13.5815 13.1337 13.3551 13.3773 13.1961C13.6208 13.0371 13.9053 12.9524 14.196 12.9522M30.3029 14.4522H14.1971L14.1988 14.4541L20.3553 21.2291C20.6114 21.5054 20.7525 21.869 20.75 22.2458V29.5477L23.75 27.5509L23.7499 27.5491L23.75 22.2458C23.7474 21.869 23.8886 21.5054 24.1447 21.2291L30.3012 14.4541L30.3029 14.4522Z"
                        fill="#2F3144" fill-opacity="0.65" />
                </svg>
                <svg class="search-btn" width="45" height="44" viewBox="0 0 45 44" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" width="44" height="44" rx="12" fill="#F4F4F4" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.0527 22C15.0527 21.5858 15.3885 21.25 15.8027 21.25H27.8027C28.2169 21.25 28.5527 21.5858 28.5527 22C28.5527 22.4142 28.2169 22.75 27.8027 22.75H15.8027C15.3885 22.75 15.0527 22.4142 15.0527 22Z"
                        fill="#2F3144" fill-opacity="0.65" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.3027 17.5C11.3027 17.0858 11.6385 16.75 12.0527 16.75H31.5527C31.9669 16.75 32.3027 17.0858 32.3027 17.5C32.3027 17.9142 31.9669 18.25 31.5527 18.25H12.0527C11.6385 18.25 11.3027 17.9142 11.3027 17.5Z"
                        fill="#2F3144" fill-opacity="0.65" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M18.8027 26.5C18.8027 26.0858 19.1385 25.75 19.5527 25.75H24.0527C24.4669 25.75 24.8027 26.0858 24.8027 26.5C24.8027 26.9142 24.4669 27.25 24.0527 27.25H19.5527C19.1385 27.25 18.8027 26.9142 18.8027 26.5Z"
                        fill="#2F3144" fill-opacity="0.65" />
                </svg>
                <button class="create-btn">Создать</button>
            </div>
        </div>

        <div class="session-container">
            <div class="table-container">
                <section class="table-header">
                    <div class="data " v-on:click="onSortingData('time')">
                        <span  class='sorting'>Дата и время <svg v-if="filter === 'time'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>
                    <div v-on:click="onSortingData('status')" class="status ">
                        <span class='sorting'>Статус<svg v-if="filter === 'status'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>

                    <div v-on:click="onSortingData('module')" class="module ">
                        <span class='sorting'>Название учебного модуля<svg v-if="filter === 'module'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>

                    <div  v-on:click="onSortingData('type')" class="type ">
                        <span class='sorting'>Тип сессии<svg v-if="filter === 'type'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>

                    <div  v-on:click="onSortingData('rooms')" class="rooms ">
                        <span class='sorting'>Комната <svg v-if="filter === 'rooms'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>

                    <div  v-on:click="onSortingData('groups')" class="groups ">
                        <span class='sorting'>Группа <svg v-if="filter === 'groups'" width="25" height="25"
                                viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.3723 8.5349C19.7629 8.92542 19.7629 9.55859 19.3723 9.94911L13.3723 15.9491C12.9818 16.3396 12.3486 16.3396 11.9581 15.9491L5.95812 9.94911C5.56759 9.55859 5.56759 8.92542 5.95812 8.5349C6.34864 8.14437 6.9818 8.14437 7.37233 8.5349L12.6652 13.8278L17.9581 8.5349C18.3486 8.14437 18.9818 8.14437 19.3723 8.5349Z"
                                    fill="#999999" />
                            </svg></span>
                    </div>
                </section>

                <section v-for="data in filteredSessions" :key="data.id + data.start">
                    <div class="data table">{{ setDataTime(data.start, data.end) }}</div>
                    <div class="table status"> <section :class="getStatus(data.status.name)"> {{ getStatus(data.status.name) }}</section></div>
                    <div class="module table">{{ data.module }}</div>
                    <div class="type table">{{ data.type.name }}</div>
                    <div class="rooms table">
                        <div v-for="room in data.rooms" :key="room.name + room.id">
                            <span> {{ room.name }}</span>
                            <span v-if="room.name.length > 1">,</span>
                        </div>
                    </div>
                    <div class="groups table" v-if="data.groups.length">{{ data.groups[0].name }}</div>

                </section>
            </div>
            <div class="pagintation">
                <svg v-on:click="onSetPage(-1)" class="pageBtn" width="19" height="18" viewBox="0 0 19 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.1477 15.0227C11.9281 15.2424 11.5719 15.2424 11.3523 15.0227L5.72725 9.39775C5.50758 9.17808 5.50758 8.82192 5.72725 8.60225L11.3523 2.97725C11.5719 2.75758 11.9281 2.75758 12.1477 2.97725C12.3674 3.19692 12.3674 3.55308 12.1477 3.77275L6.92049 9L12.1477 14.2273C12.3674 14.4469 12.3674 14.8031 12.1477 15.0227Z"
                        fill="#999999" />
                </svg>

                <span>{{ currPage }}</span>
                <svg v-on:click="onSetPage(1)" class="pageBtn" width="19" height="18" viewBox="0 0 19 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.85225 2.97725C7.07192 2.75758 7.42808 2.75758 7.64775 2.97725L13.2727 8.60225C13.4924 8.82192 13.4924 9.17808 13.2727 9.39775L7.64775 15.0227C7.42808 15.2424 7.07192 15.2424 6.85225 15.0227C6.63258 14.8031 6.63258 14.4469 6.85225 14.2273L12.0795 9L6.85225 3.77275C6.63258 3.55308 6.63258 3.19692 6.85225 2.97725Z"
                        fill="#999999" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import DB from '../data/data1.json'
import { utilService } from '../service/util.service'

export default {
    data() {
        return {
            dataBase: DB.sessions,
            filter: '',
            currPage: 1,
            itemsPerPage: 13,
            searchTerm: '',
            dataToShow: null
        }
    },
    methods: {
        setDataTime(start, end) {
            // Call your existing function here
            return utilService.setDataTime(start, end);
        },
        getStatus(status) {
            return utilService.getStatus(status)
        },
        onSetPage(n) {
            let page = this.currPage + n
            let filteredData = this.getFilterdData()
            if (page < 1) this.currPage = 1
            else if (page > filteredData.length / this.itemsPerPage) this.currPage = Math.round(filteredData.length / this.itemsPerPage)
            else this.currPage = page
        },
        getFilterdData() {
            const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
            let filtered = this.dataBase.filter(session => session.module.toLowerCase().includes(lowerCaseSearchTerm));
            return filtered
        },
        onSortingData(sortBy){
            this.filter = sortBy
            this.dataBase = utilService.onSorting(sortBy, this.dataBase)
        }
    },
    computed: {
        filteredSessions() {
            let filtered = this.getFilterdData()
            let sliced = filtered.slice((this.currPage - 1) * this.itemsPerPage, ((this.currPage - 1) * this.itemsPerPage) + this.itemsPerPage);
            this.dataToShow = sliced
            return sliced;
        },
    },

};
</script>

<style lang="scss" scoped>
@import "../assets/cmps/sessions";
</style>