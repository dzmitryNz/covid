## getApi(category, country) 

category - раздел api, если отсутствует загружает summaryRoute
country - страна, не обязательный, добавляется в к url если есть параметр :country в Path

если разница с текущим временем и lastUpdate меньше UpdatePeriod часов возвращаются данные из localStorage

весь ответ на запрос сохраняется в LocalStorage  по ключу category
если данные по стране category-country

после получения данных вызывается функция Page.set(result) c данными полученными из Api  
