// 카테고리 별 값 출력하는 함수 

export function filterDataByCategory(responseData, category) {
    return responseData.response.body.items.item.filter(item => item.category === category);
}


