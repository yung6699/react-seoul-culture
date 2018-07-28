/* eslint-disable eol-last */

module.exports = {
    "extends" : "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        'no-console': 'off',
        'no-alert': 'off',
        'no-confirm': 'off',
        'no-unused-vars': 'error',
        'no-underscore-dangle': 'off', // underscore 를 쓸거고 private 변수 앞에서 쓸거임
        'eol-last' : 0,

        "arrow-body-style": 'off', // arrow body 쓸수있도록 
        'jsx-a11y/anchor-is-valid': 'off', // Link태그에 href계속 붙이라고 하는거 좀 짜증남

        "indent": ["error", 2], // 들여쓰기
        "linebreak-style": ["error", "unix"],
        "quotes": ["off", "single", "double"], // 콤마 관련에러 끄기
        "semi": ["error", "always"], // 세미콜론 안붙이면 에러

        'import/prefer-default-export':'off',
        'import/no-unresolved': 'off', // 앞에 절대경로 쓰기 싫음. - - 
        'import/extensions': 'off', // 앞에 절대경로 쓰기 싫음. - - 

        'react/prefer-stateless-function' :'off', //component는 pure function으로 한다 off
        'react/prop-types': 'warn', // 속성값을 반드시 지정해야한다.
        'react/forbid-prop-types': 'off', // react component 에서 Prop object가 떨어질 수 있는데 못받게 하는것 꺼버림
        'react/jsx-filename-extension': 'off', // jsx는 따로 확장자명을 두고 써라
        'react/no-render-return-value': 'off', // { }없으면 그냥 리턴인데 자꾸 리턴하라해서 끔
        'react/jsx-curly-brace-presence': 'off', // 속성에 들어갈 문자열이 길어서 템플릿 리터럴을 쓰는데 .. 자꾸 못쓰게함
        'react/no-find-dom-node': 'off', // 특정 노드로 스크롤을 할때 특정 노드를 ref로 지정해도 scroll 위치를 구할 수 없음... 실제 DOM에 접근 하는 수 밖에..
        'react/jsx-one-expression-per-line':'off', // 줄바꿔가며 써라
        'react/no-array-index-key' :'off' // index를 key로 쓰지마라
    }
};