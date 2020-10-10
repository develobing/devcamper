module.exports = {
  env: { commonjs: true, es2020: true, node: true },
  extends: '',
  parserOptions: { ecmaVersion: 11 },
  ignorePatterns: ['/dist/*', '/src/plugins/*', '/static', '/public'],
  rules: {
    quotes: ['warn', 'single'], // String의 큰 따옴표 / 작은 따옴표 설정
    semi: ['warn', 'always'], // Semicolon 설정
    indent: ['warn', 2], // Indent 설정
    'no-tabs': ['warn'], // Indent에 Tab 허용 여부 설정
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ], // Function 과 () 사이의 띄어쓰기 여부
    'space-in-parens': ['warn', 'never'], // () 내부의 공백 허용 여부
    'keyword-spacing': ['warn', { before: true, after: true }], // Keyword(if 등) 후 띄어쓰기 여부
    'comma-spacing': ['warn', { before: false, after: true }], // Comma 뒤의 띄어쓰기 여부
    'semi-spacing': ['warn', { before: false, after: true }], // Semicolon 뒤의 띄어쓰기 여부
    'func-call-spacing': ['warn', 'never'], // Function 호출 시 () 앞에 띄어쓰기 여부
    'array-bracket-spacing': ['warn', 'never'], // Array의 [] 내부의 띄어쓰기 여부
    'object-curly-spacing': ['warn', 'always', { arraysInObjects: true }], // Object의 {} 내부의 띄어쓰기 여부
    'space-before-blocks': 'warn', // {} 앞의 띄어쓰기 여부
    'space-unary-ops': ['warn', { words: true, nonwords: false }], // 단항 Keyword / 연산자의 띄어쓰기 여부
    'arrow-parens': ['warn', 'always'], // 화살표 함수에서 () 생략 여부
    'object-shorthand': ['warn', 'always'], // Object 내 에서 property, method를 Shorthand 로 정의 여부
    'quote-props': ['warn', 'as-needed'], // Object의 Key 에 따옴표(Quote) 사용 여부
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ], // Trailing Comma 사용 여부
    'no-trailing-spaces': 'warn', // 빈 공간의 Indent Space 허용 여부
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }], // Colon 앞 / 뒤에 띄어쓰기 여부
    'space-infix-ops': ['warn', { int32Hint: false }], // 연산자 사이의 띄어쓰기 여부
    'spaced-comment': [
      'warn',
      'always',
      { block: { exceptions: ['*'], balanced: true } },
    ], // 주석 표시 앞 / 뒤에 띄어쓰기 여부
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 1 }], // 함수 chain 할 때 줄바꿈 여부
    'object-curly-newline': ['warn', { consistent: true }], // Object 의 {} 앞뒤 줄바꿈 여부
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }], // Object 내부 Property 들의 줄바꿈 여부
    'array-bracket-newline': ['warn', 'consistent'], // Array 의 [] 앞뒤 줄바꿈 여부
    'array-element-newline': ['warn', 'consistent'], // Array 내부 Element 들의 줄바꿈 여부
    'arrow-spacing': ['warn', { before: true, after: true }], // 화살표 함수의 화살표 앞뒤 띄어쓰기 여부
    'function-paren-newline': ['error', 'consistent'],
    'function-call-argument-newline': ['error', 'consistent'],
    'no-extra-semi': 'warn', // 부가적인 ; 허용 여부
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 내용 없는 라인의 허용 개수
    'no-unused-vars': 'warn', // 선언된 변수 중 사용되지 않은 변수 허용 여부
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: ['import', 'cjs-import', 'case', 'default'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['try', 'class', 'export', 'cjs-export', 'block', 'block-like'],
      },
      { blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
      {
        blankLine: 'never',
        prev: ['import', 'cjs-import'],
        next: ['import', 'cjs-import'],
      },
      { blankLine: 'any', prev: ['cjs-import'], next: ['let', 'const'] },
      { blankLine: 'any', prev: ['let', 'const'], next: ['let', 'const'] },
    ], // 특정 명령어 뒤에 띄어쓰기 추가하는지 여부
    // curly: ['warn', 'multi-or-nest', 'consistent'], // 명령어(if, while 등) 뒤의 {} 생략 가능 여부
    // 'brace-style': ['warn', '1tbs', { allowSingleLine: true }], // {} Block 의 줄바꿈 스타일
    // 'padded-blocks': ['warn', 'never', { allowSingleLineBlocks: true }], // {} Block 내부에 사이에 줄바꿈 허용여부
    // 'max-len': ['warn', 80, { ignoreUrls: true, ignoreComments: true }], // 한 줄의 최대 글자 수
    // 'linebreak-style': 'off', // Line Break 를 Window(CRLF), Mac(LF) 허용 여부
    // 'no-undef': 'off', // 정의되지 않은 변수가 파일 내에 있을 경우, 점검 여부
    // 'no-alert': 'off', // alert 사용 허용 여부
    // 'no-console': 'off', // console 사용 허용 여부
    // 'no-debugger': 'off', // debugger 사용 허용 여부
  },
};
