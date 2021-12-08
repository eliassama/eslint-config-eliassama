module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        'standard',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": 'latest',
        "sourceType": 'module',
    },
    "rules": {
        "semi": ["error", "always"], // 要求必须使用分号
        "semi-spacing": ["error", {"before": false, "after": true}], // 不允许分号之前使用空格，强制分号之后使用空格
        "quotes": ["error", "single"], // 尽可能的使用单引号
        "quote-props": ["error", "always"], // 要求对象字面量属性名称用引号括起来
        "space-before-function-paren": ["error", "always"],     // 强制在 function的左括号之前使用一致的空格
        "space-in-parens": ["error", "always"], // 强制在圆括号内使用一致的空格
        "eol-last": ["error", "always"], // 强制文件末尾至少保留一行空行
        "require-jsdoc": ["warn", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": true,
                "FunctionExpression": true
            }
        }], // 要求使用 JSDoc 注释
        "no-dupe-keys": "error", // 禁止对象字面量中出现重复的 key
        "no-duplicate-case": "error", // 禁止出现重复的 case 标签
        "no-empty": ["error", { "allowEmptyCatch": true }], // 禁止出现空语句块
        "no-ex-assign": "error", // 禁止对 catch 子句的参数重新赋值
        "no-extra-boolean-cast": "error", // 禁止不必要的布尔转换
        "no-extra-parens": "error", // 禁止不必要的括号
        "new-parens": ["error", "always"], // 要求调用无参构造函数时有圆括号
        "func-names": ["error", "always"], // 强制使用命名的 function 表达式
        "key-spacing": ["error",
            {
                "beforeColon": false, // 不允许在对象文字中的键和冒号之间有空格
                "afterColon": true, // 需要在冒号和对象文字中的值之间至少有一个空格。
                "mode": "strict", // 在对象字面量中在冒号之前或之后强制执行一个空格。
            }
        ], // 强制在对象字面量的属性中键和值之间使用一致的间距
        "keyword-spacing": ["error", { "before": true, "after": true }], // 强制在关键字前后使用一致的空格
        "newline-after-var": ["error", "always"], // 要求在变量声明后出现空行
        "newline-before-return": "error", // 要求 return 语句之前有一空行
        "no-mixed-spaces-and-tabs": "error", // 不允许空格和 tab 混合缩进
        "no-multiple-empty-lines": ["error", {
            "max": 2, // 文件中允许的最大空行
            "maxEOF": 1, // 文件末尾允许的最大空行
            "maxBOF":0 // 文件开头允许的最大空行
        }], // 不允许多个空行
        "array-bracket-spacing": ["error", "never", {
            "singleValue": false,
            "objectsInArrays": false,
            "arraysInArrays": false,
        }], // 强制数组方括号中使用一致的空格
        "space-infix-ops": ["error", { "int32Hint": false }], // 要求操作符周围有空格
        "block-spacing": ["error", "always"], // 强制在单行代码块中使用一致的空格
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // 强制在代码块中使用一致的大括号风格
        "comma-spacing": ["error", { "before": false, "after": true }], // 强制在逗号前后使用一致的空格
        "comma-style": ["error", "last"], // 强制使用一致的逗号风格
        "func-style":  ["error", "declaration"], // 强制一致地使用函数声明或函数表达式
        "one-var": ["error", "never"], // 强制函数中的变量要么一起声明要么分开声明
        "sort-vars": ["error", { "ignoreCase": true }], // 要求同一个声明块中的变量按顺序排列
        "spaced-comment": ["error", "always"], // 强制在注释中 // 或 /* 使用一致的空格
        "consistent-return": "error", // 要求 return 语句必须返回明确的值
        "no-cond-assign": ["error", "always"],// 禁止在条件语句中使用赋值运算符
        "no-constant-condition": ["error", { "checkLoops": false }], // 禁止在条件中使用常量表达式
        "no-func-assign": "error", // 禁止对 function 声明重新赋值
        "no-prototype-builtins": "error", // 禁止直接使用Object.prototypes 的内置属性
        "no-unexpected-multiline": "error", // 禁止出现令人困惑的多行表达式
        "no-unreachable": "error", // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        "use-isnan": ["error", {"enforceForSwitchCase": true, "enforceForIndexOf": true}], // 要求使用 isNaN() 检查 NaN
        "valid-typeof": "error", // 强制 typeof 表达式与有效的字符串进行比较
        "eqeqeq": ["error", "always"], // 要求使用 === 和 !==
        "no-empty-function": "error", // 禁止出现空函数
       " no-fallthrough": "error", // 禁止 case 语句落空
        "no-redeclare": "error", // 禁止使用 var 多次声明同一变量
        "no-return-assign": ["error", "always"], // 禁止在 return 语句中使用赋值语句
        "no-self-assign": "error", // 禁止自我赋值
        "no-self-compare": "error", // 禁止自身比较
        "no-unused-expressions": "error", // 禁止出现未使用过的表达式
        "no-unused-vars": "error", // 禁止出现未使用过的变量
        "no-use-before-define": "error", // 不允许在变量定义之前使用它们
        "no-new-require": "error", // 禁止调用 require 时使用 new 操作符
        "no-path-concat": "error", // 禁止对 dirname 和 filename进行字符串连接
    }
}