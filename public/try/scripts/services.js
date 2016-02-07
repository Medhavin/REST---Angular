'use strict';

// angular.module('tryApp')

//     .constant("baseURL","http://localhost:3000/")

//     .factory('feedbackFactory', ['$resource','baseURL', function($resource,baseURL) {

//         return $resource(baseURL+"feedback/:id", { id: '@id' }, {update: {method: 'PUT'}});
//         // return $resource(baseURL+"feedback", { id: '@_id' }, {update: {method: 'PUT'}});

//     }])

// ;

angular.module('tryApp')

    // .constant("baseURL","http://localhost:3000/")
    .constant("baseURL","http://192.168.1.44/index.php/api/")

    .factory('feedbackFactory', ['$resource','baseURL', function($resource,baseURL) {

        // return $resource(baseURL+"feedback/:id", { id: '@id', q: 'hello' },
        return $resource(baseURL+"user/:id", { id: '@user_id', salutation: 'Hello', lastwords : 'Hey Ram' },
            {   
                get: {
                    method: 'GET',
                    // params: {},
                    // url: '',
                    // isArray: ,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                },
                query: {
                    method: 'GET',
                    // params: {},
                    // url: '',
                    isArray: true,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                },
                save: {
                    method: 'POST',
                    // params: {},
                    // url: '',
                    // isArray: ,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                },
                update: {
                    method: 'PUT',
                    // params: {},
                    // url: '',
                    // isArray: ,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                },
                delete: {
                    method: 'DELETE',
                    // params: {},
                    // url: '',
                    // isArray: ,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                },
                custom: {
                    // method: '',
                    // params: {},
                    // url: '',
                    // isArray: ,
                    // transformRequest: ,
                    // transformResponse: ,
                    // cache: ,
                    // timeout: ,
                    // cancellable: ,
                    // withCredentials: ,
                    // responseType: ,
                    // interceptor: 

                }
            },
            {
                // stripTrailingSlashes: ,
                // cancellable: 
            }
        );
        // return $resource(baseURL+"feedback", { id: '@_id' }, {update: {method: 'PUT'}});

    }])

;
