export default {
    saveFile({ commit }, type) {
        const img = "http://placehold.it/350x50";
        const video = "https://www.youtube.com/watch?v=LXb3EKWsInQ&t=210s";
        const file = "https://inter-net.pro/images/music/zvuk.mp3";
        return new Promise((resolve) => {
            if (type === 'video') {
                resolve(video)
            } else if (type === 'image') {
                resolve(img)
            } else {
                resolve(file)

            }
        }).then(url => {
            commit('AddFile', { url, type });
        }).catch(error => {
            commit('UpdateAlert', {
                type: 'error',
                text: error,
            })
        })
    }
}