import { SET_HEADER_BANNER } from './actionTypes'

// export const getSetCategoriesAction = data => {
//     return {
//         type: SET_HEADER_BANNER,
//         data: data
//     }
// }

export const getHeaderBanner = () => {
    return dispatch => {
        // fetch('http://www.gp5.com/api/index.json')
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res.ret && res.data) {
        //             const action = getSetCategoriesAction(res.data.categories)
        //             dispatch(action)
        //         }
        //     })
        //     .catch(() => {
        //         alert('请求异常')
        //     })

        const action = {
            type: SET_HEADER_BANNER,
            data: [
                // {id: 1, url: '../../resource/images/main/banner/banner-1.jpg'},
                // {id: 2, url: '../../resource/images/main/banner/banner-2.jpg'},
                // {id: 3, url: '../../resource/images/main/banner/banner-3.jpg'},
                // {id: 4, url: '../../resource/images/main/banner/banner-4.jpg'}
                {id: 1, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db836f98c10eb6c04b05df6b3f1e3e8a.jpg'},
                {id: 2, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cc5e04a3f6020d81cb3b00a1b6c6581.jpg'},
                {id: 3, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2bb21c48b35c0ab2cd7308c0dd4c59d5.jpg?bg=FFFFFF'},
                {id: 4, url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d2144d3b0b018f0cdd1282db885bd80f.jpg?bg=FFFFFF'}
            ]
        }
        dispatch(action);
    }
}
