import request from '@/utils/request'

const api_address = '/hospital/hospitalSet/getHospitalSetList'

export default {

    getPageList(hospitalSetDTO) {
        return request({
            url: `${api_address}`,
            method: 'post',
            data: hospitalSetDTO
        })
    }
}